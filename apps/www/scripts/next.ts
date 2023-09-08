/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import {
  contentlayerBuild,
  getESLintConfigKeys,
  getNextVersionFileBody,
  getRuleVersions,
  removeNextVersion,
  removeRuleVersionsNextFolder,
  type RuleVersion,
  writeRuleVersion,
  writeVersion,
} from "./utils/contentlayer";
import { getESLintConfig } from "./utils/eslint";

type PartialRuleVersion = Pick<
  RuleVersion,
  "configKey" | "ruleKey" | "tsEntry" | "jsEntry"
>;

const sortRules = (a: PartialRuleVersion, b: PartialRuleVersion) => {
  const aKey = `${a.configKey}${a.ruleKey}`;
  const bKey = `${b.configKey}${b.ruleKey}`;

  return aKey.localeCompare(bKey);
};

const getCurrentRuleVersions = async () => {
  const eslintConfigsProps = getESLintConfigKeys().reduce<
    Parameters<typeof getESLintConfig>[0][]
  >(
    (acc, configKey) => [
      ...acc,
      { configKey, ts: false },
      { configKey, ts: true },
    ],
    [],
  );

  const eslintConfigsPromises = eslintConfigsProps.map(async (configProps) => {
    const config = await getESLintConfig(configProps);
    return { ...configProps, config };
  });

  const eslintConfigs = await Promise.all(eslintConfigsPromises);

  const partialRuleVersions = eslintConfigs
    .reduce<PartialRuleVersion[]>(
      (rootAcc, { configKey, ts, config }) =>
        Object.entries(config.rules).reduce((acc, [ruleKey, ruleEntry]) => {
          const entryIndex = acc.findIndex(
            (entry) =>
              entry.configKey === configKey && entry.ruleKey === ruleKey,
          );

          if (entryIndex === -1) {
            return [
              ...acc,
              {
                configKey,
                ruleKey,
                jsEntry: null,
                tsEntry: null,
                [ts ? "tsEntry" : "jsEntry"]: ruleEntry || null,
              },
            ];
          }
          acc[entryIndex] = {
            ...acc[entryIndex],
            [ts ? "tsEntry" : "jsEntry"]: ruleEntry || null,
          };

          return acc;
        }, rootAcc),
      [],
    )
    .sort(sortRules);

  return partialRuleVersions;
};

/**
 *  Update the next version in the generated files, if needed
 */
(async () => {
  await removeRuleVersionsNextFolder();
  const nextVersionFileBody = getNextVersionFileBody();

  console.log("Rebuilding contentlayer to validate the next version");
  await contentlayerBuild();

  const currentRules = await getCurrentRuleVersions();

  // Get the latest rules from contentlayer and remove the ones without entry because that mean they were removed
  const latestRules = getRuleVersions()
    .map(({ configKey, ruleKey, jsEntry, tsEntry }) => ({
      configKey,
      ruleKey,
      jsEntry,
      tsEntry,
    }))
    .filter(({ jsEntry, tsEntry }) => !!jsEntry || !!tsEntry)
    .sort(sortRules);

  // Compare the current rules with the latest rules to check the ones missing in the current rules
  const removedRules = latestRules
    .filter(
      (latest) =>
        !currentRules.some(
          (current) =>
            current.configKey === latest.configKey &&
            current.ruleKey === latest.ruleKey,
        ),
    )
    .map((removed) => ({
      ...removed,
      jsEntry: null,
      tsEntry: null,
    }));

  const nextRules = [...currentRules, ...removedRules];
  const hasRuleChanges = stringify(currentRules) !== stringify(latestRules);

  // If there's no rule changes and no next version body, a next version is not needed
  if (!hasRuleChanges && !nextVersionFileBody) {
    await removeNextVersion();
    return console.log("Nothing changed since the last version.");
  }

  const ruleVersions = getRuleVersions();

  // Write the rule versions in the next folder
  await Promise.all(
    nextRules.map(async ({ configKey, ruleKey, tsEntry, jsEntry }) => {
      const {
        jsEntry: previousJsEntry,
        tsEntry: previousTsEntry,
        history = [],
      } = ruleVersions.find(
        (document) =>
          document.configKey === configKey && document.ruleKey === ruleKey,
      ) || {};

      return writeRuleVersion({
        configKey,
        ruleKey,
        version: "next",
        jsEntry,
        previousJsEntry,
        tsEntry,
        previousTsEntry,
        history,
      });
    }),
  );

  await writeVersion({ version: "next" });

  return console.log("Next rule version files updated");
})();
