/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import {
  contentlayerBuild,
  getESLintConfigKeys,
  getRuleVersions,
  removeNextVersion,
  type RuleVersion,
  writeRuleVersion,
  writeVersion,
} from "./utils/contentlayer";
import { getESLintConfig } from "./utils/eslint";

type PartialRuleVersion = Pick<
  RuleVersion,
  "configKey" | "ruleKey" | "tsEntry" | "jsEntry"
>;

const sortPartialRuleVersions = (
  a: PartialRuleVersion,
  b: PartialRuleVersion,
) => {
  const aKey = `${a.configKey}${a.ruleKey}`;
  const bKey = `${b.configKey}${b.ruleKey}`;

  return aKey.localeCompare(bKey);
};

const getCurrentRuleVersions = async () => {
  const eslintConfigsProps = (await getESLintConfigKeys()).reduce<
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
    .sort(sortPartialRuleVersions);

  return partialRuleVersions;
};

const getNextPartialRuleVersions = async () => {
  const latestPartialRuleVersions = (await getRuleVersions())
    .map(({ configKey, ruleKey, jsEntry, tsEntry }) => ({
      configKey,
      ruleKey,
      jsEntry,
      tsEntry,
    }))
    .filter(({ jsEntry, tsEntry }) => !!jsEntry || !!tsEntry) // filter out the removed rules
    .sort(sortPartialRuleVersions);

  const currentPartialRuleVersions = await getCurrentRuleVersions();

  if (
    stringify(currentPartialRuleVersions) ===
    stringify(latestPartialRuleVersions)
  ) {
    return null;
  }

  const removedRulesVersion = latestPartialRuleVersions
    .filter(
      (latestPartialRuleVersion) =>
        !currentPartialRuleVersions.some(
          (currentPartialRuleVersion) =>
            currentPartialRuleVersion.configKey ===
              latestPartialRuleVersion.configKey &&
            currentPartialRuleVersion.ruleKey ===
              latestPartialRuleVersion.ruleKey,
        ),
    )
    .map((removedRuleVersion) => ({
      ...removedRuleVersion,
      jsEntry: null,
      tsEntry: null,
    }));

  return [...currentPartialRuleVersions, ...removedRulesVersion];
};

/**
 *  Update the next version in the generated files, if needed
 */
(async () => {
  // Clear the cache and build the contentlayer files
  await contentlayerBuild();

  // Get the next rule versions.
  // If there's no changes between the current and the latest version, the value is null
  const nextPartialRuleVersions = await getNextPartialRuleVersions();

  // Remove the previous next version folder and the next version file
  await removeNextVersion();

  // If there's no next rule versions, we don't need to create the next version
  if (!nextPartialRuleVersions) {
    return console.log("Nothing changed since last release");
  }

  // Write the rule versions in the next folder
  await Promise.all(
    nextPartialRuleVersions.map(
      async ({ configKey, ruleKey, tsEntry, jsEntry }) => {
        const ruleVersions = await getRuleVersions();
        const {
          jsEntry: previousJsEntry,
          tsEntry: previousTsEntry,
          updates,
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
          updates,
        });
      },
    ),
  );

  // Write the next version file
  await writeVersion({ version: "next" });

  return console.log("Next rule version files updated");
})();
