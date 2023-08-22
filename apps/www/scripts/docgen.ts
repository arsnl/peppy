/* eslint-disable import/no-extraneous-dependencies */
import { defu } from "defu";
import { type Linter } from "eslint";
import stringify from "fast-json-stable-stringify";
import path from "node:path";
import { eslintRulesDescriptionConfig } from "@/config/eslint";
import { rules as previousRules } from "@/generated/eslint";
import {
  type Rule,
  type Rules,
  type RuleUsedBy,
  type RuleVersionEntry,
  type RuleVersionEntryValue,
} from "@/types/eslint";
import {
  getESLintConfigs,
  getESLintRuleDocsUrl,
  getESLintRuleStringSeverityAndOptions,
} from "./utils/eslint";
import {
  getStringifiedJSONWithPrettier,
  writeWithPrettier,
} from "./utils/prettier";

const getVersionEntryValue = async (
  ruleEntry: Linter.RuleEntry,
): Promise<RuleVersionEntryValue> => {
  const ruleStringSeverityAndOptions =
    getESLintRuleStringSeverityAndOptions(ruleEntry);
  const [level] = ruleStringSeverityAndOptions;
  const entry = await getStringifiedJSONWithPrettier(
    ruleStringSeverityAndOptions,
  );
  return { level, entry };
};

const versionEntriesEqual = (
  left: RuleVersionEntry | undefined,
  right: RuleVersionEntry | undefined,
) => {
  const leftCompareString = stringify({
    js: JSON.parse(left?.values?.js?.entry || "{}"),
    ts: JSON.parse(left?.values?.ts?.entry || "{}"),
  });

  const rightCompareString = stringify({
    js: JSON.parse(right?.values?.js?.entry || "{}"),
    ts: JSON.parse(right?.values?.ts?.entry || "{}"),
  });

  return leftCompareString === rightCompareString;
};

const getUpdatedUsedBy = ({
  ruleName,
  usedBy,
  currentRules,
}: {
  ruleName: string;
  usedBy: RuleUsedBy;
  currentRules: Rules;
}) => {
  const updatedUsedBy: RuleUsedBy = Object.fromEntries(
    Object.entries(usedBy)
      .map(([configName]) => {
        const currentUsedByEntry = {
          ...currentRules?.[ruleName]?.usedBy?.[configName],
        };
        const previousUsedByEntry = {
          ...previousRules?.[ruleName]?.usedBy?.[configName],
          versions: [
            ...(
              previousRules?.[ruleName]?.usedBy?.[configName]?.versions || []
            ).filter(({ version }) => version !== "next"),
          ],
        };

        const currentVersion = currentUsedByEntry?.versions?.[0];
        const [previousVersion, ...otherVersions] =
          previousUsedByEntry?.versions || [];

        const currentIsEqualAsPrevious = versionEntriesEqual(
          currentVersion,
          previousVersion,
        );

        const versions = [
          ...(currentIsEqualAsPrevious
            ? []
            : [currentVersion || { version: "next", values: null }]),
          ...(previousVersion ? [previousVersion] : []),
          ...otherVersions,
        ];

        return versions.length
          ? [configName, { ...currentUsedByEntry, versions }]
          : [];
      })
      .filter((entry) => !!entry[0]),
  );

  const isEmpty = !Object.keys(updatedUsedBy).length;

  return isEmpty ? null : updatedUsedBy;
};

const getUpdatedRules = async () => {
  const eslintConfigs = await getESLintConfigs();

  const currentRules = await eslintConfigs.reduce<Promise<Rules>>(
    async (rulesAcc, { configName, ts, config }) =>
      Object.entries(config?.rules || {}).reduce(
        async (configRulesAccPromise, [ruleName, configRuleEntry]) => {
          const configRulesAcc = await configRulesAccPromise;
          const ruleEntry = configRulesAcc[ruleName] || { usedBy: {} };
          const usedByEntry = ruleEntry.usedBy?.[configName] || {
            versions: [{ version: "next", values: {} }],
          };
          const versionEntryValue = await getVersionEntryValue(configRuleEntry);

          const updatedRuleEntry: Rule = {
            ...ruleEntry,
            usedBy: {
              ...ruleEntry.usedBy,
              [configName]: {
                ...usedByEntry,
                versions: [
                  {
                    ...usedByEntry.versions[0],
                    values: {
                      ...usedByEntry.versions[0].values,
                      [ts ? "ts" : "js"]: versionEntryValue,
                    },
                  },
                ],
              },
            },
          };

          return {
            ...configRulesAcc,
            [ruleName]: updatedRuleEntry,
          };
        },
        rulesAcc,
      ),
    Promise.resolve({}),
  );

  const allRules = defu(previousRules, currentRules) as Rules;

  const updatedRules = Object.fromEntries(
    Object.entries(allRules)
      .map(([ruleName, rule]) => {
        const description = eslintRulesDescriptionConfig?.[ruleName] || null;
        const docsUrl = getESLintRuleDocsUrl(ruleName);
        const usedBy = getUpdatedUsedBy({
          ruleName,
          usedBy: rule.usedBy,
          currentRules,
        });

        return usedBy
          ? [ruleName, { ...rule, description, docsUrl, usedBy }]
          : [];
      })
      .filter((entry) => !!entry[0]),
  );

  return updatedRules;
};

const writeRulesFile = async () => {
  const updatedRules = await getUpdatedRules();

  const content = `import { type Rules } from "@/types/eslint";

  // This file is generated by \`apps/www/scripts/docgen.ts\`
  // DO NOT EDIT IT MANUALLY
  export const rules: Rules = ${stringify(updatedRules)};`;

  await writeWithPrettier({
    filepath: path.join(__dirname, `../src/generated/eslint.ts`),
    content,
    options: { parser: "typescript" },
  });
};

const run = async () => {
  await writeRulesFile();
};

run();
