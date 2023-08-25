/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { defu } from "defu";
import { ESLint, type Linter } from "eslint";
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import {
  eslintConfigNamesConfig,
  eslintRulesDescriptionConfig,
} from "@/config/eslint";
import { eslintVersions } from "@/generated/eslint-versions";
import { getESLintRuleDocsUrl } from "@/lib/eslint";
import {
  type ESLintConfigName,
  type ESLintVersion,
  type Rule,
  type RuleInfo,
  type Rules,
} from "@/types/eslint";
import {
  getGeneratedVersionPath,
  getStringifiedJSONWithPrettier,
  getVersionnedConfigsRules,
  isJSONStringSames,
  writeRulesFile,
  writeVersionFile,
} from "./commons";

type ConfigsRules = Record<string, Rules>;

const getESLintStringSeverity = (
  ruleEntry: Linter.RuleEntry,
): Linter.StringSeverity => {
  const levels = ["off", "warn", "error"] satisfies Linter.StringSeverity[];
  const ruleLevel =
    typeof ruleEntry === "number"
      ? levels[ruleEntry]
      : typeof ruleEntry?.[0] === "number"
      ? levels[ruleEntry[0]]
      : (ruleEntry?.[0] as Linter.StringSeverity);

  if (!levels.includes(ruleLevel)) {
    throw new Error(
      `Rule \`${stringify(ruleEntry)}\` have unexpected severity`,
    );
  }

  return ruleLevel;
};

const getESLintRuleStringSeverityAndOptions = (
  ruleEntry: Linter.RuleEntry,
): [Linter.StringSeverity, ...any] => {
  const level = getESLintStringSeverity(ruleEntry);
  const [, ...options] = Array.isArray(ruleEntry) ? ruleEntry : [];

  return [level, ...options];
};

const getESLintConfig = async ({
  configName,
  ts = false,
}: {
  configName: ESLintConfigName;
  ts?: boolean;
}) => {
  const engine = new ESLint({
    baseConfig: {
      extends: [`peppy/configs/${configName}`],
    },
    useEslintrc: false,
  });

  const eslintConfig: Linter.Config = ts
    ? await engine.calculateConfigForFile("file.ts")
    : await engine.calculateConfigForFile("file.js");

  const rules = eslintConfig?.rules || {};
  const sanitizedRules = Object.entries(rules).reduce<
    Record<string, Linter.RuleLevelAndOptions>
  >(
    (acc, [rule, ruleEntry]) =>
      ruleEntry
        ? {
            ...acc,
            [rule]: getESLintRuleStringSeverityAndOptions(ruleEntry),
          }
        : { ...acc },
    {},
  );

  return { ...eslintConfig, rules: sanitizedRules };
};

const getESLintConfigs = async () => {
  const configsProps = eslintConfigNamesConfig.reduce<
    Parameters<typeof getESLintConfig>[0][]
  >(
    (acc, configName) => [
      ...acc,
      { configName, ts: false },
      { configName, ts: true },
    ],
    [],
  );

  const promises = configsProps.map(async (configProps) => {
    const config = await getESLintConfig(configProps);
    return { ...configProps, config };
  });

  const eslintConfigs = await Promise.all(promises);

  return eslintConfigs;
};

const getRuleState = ({
  previousRule,
  currentRule,
}: {
  previousRule?: Rule;
  currentRule: Rule;
}): Rule["state"] => {
  if (!currentRule) {
    return "removed";
  }

  if (!previousRule) {
    return "new";
  }

  if (!isJSONStringSames(currentRule.js?.entry, previousRule.js?.entry)) {
    return "changed";
  }

  if (!isJSONStringSames(currentRule.ts?.entry, previousRule.ts?.entry)) {
    return "changed";
  }

  return "unchanged";
};

const getRuleInfo = async (ruleEntry: Linter.RuleEntry): Promise<RuleInfo> => {
  const ruleStringSeverityAndOptions =
    getESLintRuleStringSeverityAndOptions(ruleEntry);
  const [level] = ruleStringSeverityAndOptions;
  const entry = await getStringifiedJSONWithPrettier(
    ruleStringSeverityAndOptions,
  );
  return { level, entry };
};

const getUpdatedConfigsRules = async () => {
  const eslintConfigs = await getESLintConfigs();
  const latestConfigsRules = await getVersionnedConfigsRules("latest");

  const currentConfigsRules = await eslintConfigs.reduce<Promise<ConfigsRules>>(
    async (acc, { configName, ts, config }) =>
      Object.entries(config?.rules || {}).reduce(
        async (configsAccPromise, [ruleName, configRuleEntry]) => {
          const configsAcc = await configsAccPromise;
          const configEntry = configsAcc[configName] || {};
          const ruleEntry = configEntry[ruleName] || {};
          const ruleInfo = await getRuleInfo(configRuleEntry);

          const updatedRuleEntry: Rule = {
            ...ruleEntry,
            [ts ? "ts" : "js"]: ruleInfo,
          };

          return {
            ...configsAcc,
            [configName]: {
              ...configEntry,
              [ruleName]: updatedRuleEntry,
            },
          };
        },
        acc,
      ),
    Promise.resolve({}),
  );

  const removedConfigsRules: ConfigsRules = Object.fromEntries(
    Object.entries(currentConfigsRules).map(([configName, currentRules]) => {
      const latestRules = latestConfigsRules?.[configName] || {};
      const missingRules = Object.entries(latestRules).filter(
        ([ruleName, latestRule]) =>
          !currentRules[ruleName] && latestRule.state !== "removed",
      );

      return [configName, Object.fromEntries(missingRules)];
    }),
  );

  const allConfigsRules = defu(removedConfigsRules, currentConfigsRules);

  // Keep count of the changes.
  // If there is no changes (0 new and changed), we don't need to update so we return null
  const statesCount = { new: 0, changed: 0, unchanged: 0, removed: 0 };

  const updatedConfigsRules = Object.entries(
    allConfigsRules,
  ).reduce<ConfigsRules>(
    (acc, [configName, rules]) =>
      Object.entries(rules).reduce((configsAcc, [ruleName, rule]) => {
        const configEntry = configsAcc[configName] || {};
        const state = getRuleState({
          previousRule: latestConfigsRules?.[configName]?.[ruleName],
          currentRule: currentConfigsRules?.[configName]?.[ruleName],
        });
        const latestUpdates =
          latestConfigsRules?.[configName]?.[ruleName]?.updates || [];
        const updates =
          state === "unchanged" ? latestUpdates : ["next", ...latestUpdates];

        statesCount[state] += 1;

        const updatedRuleEntry: Rule = {
          ...rule,
          description: eslintRulesDescriptionConfig?.[ruleName],
          docsUrl: getESLintRuleDocsUrl(ruleName),
          updates,
          state,
        };

        return {
          ...configsAcc,
          [configName]: {
            ...configEntry,
            [ruleName]: updatedRuleEntry,
          },
        };
      }, acc),
    {},
  );

  return statesCount.new || statesCount.changed || statesCount.removed
    ? updatedConfigsRules
    : null;
};

const updateRulesFile = async (updatedConfigsRules: ConfigsRules) => {
  await fsPromises.rm(getGeneratedVersionPath({ version: "next" }), {
    recursive: true,
    force: true,
  });

  const writePromises = Object.entries(updatedConfigsRules).map(
    async ([configName, rules]) => {
      await writeRulesFile({ rules, version: "next", config: configName });
    },
  );

  await Promise.all(writePromises);
};

const updateVersionsFile = async (updatedConfigsRules: ConfigsRules) => {
  const eslintVersionsWithoutNext = eslintVersions.filter(
    (version) => version.version !== "next",
  );

  const nextVersion: ESLintVersion = {
    version: "next",
    configs: Object.keys(updatedConfigsRules).sort(),
  };

  const updatedVersions = [nextVersion, ...eslintVersionsWithoutNext];

  await writeVersionFile(updatedVersions);
};

/**
 *  Update the next version in the generated files, if needed
 */
(async () => {
  const updatedConfigsRules = await getUpdatedConfigsRules();

  if (!updatedConfigsRules) {
    return console.log("Nothing changed since last release");
  }
  await updateRulesFile(updatedConfigsRules);
  await updateVersionsFile(updatedConfigsRules);

  return console.log("Next version files updated");
})();
