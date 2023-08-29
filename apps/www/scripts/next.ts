/* eslint-disable import/extensions */
/* eslint-disable import/no-relative-packages */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import path from "node:path";
import {
  allESLintConfigs,
  allRuleVersions,
} from "../.contentlayer/generated/index.mjs";
import { writeWithPrettier } from "./utils/commons";
import { RULE_VERSIONS_FOLDER, VERSIONS_FOLDER } from "./utils/constants";
import { getESLintConfig } from "./utils/eslint";
import type {
  ESLintConfig,
  RuleVersion,
} from "../.contentlayer/generated/types.d.ts";

type PartialRuleVersion = Pick<
  RuleVersion,
  "configName" | "ruleName" | "tsEntry" | "jsEntry"
>;

const CONFIG_NAMES = (allESLintConfigs as ESLintConfig[]).map(({ key }) => key);

const LATEST_DOCUMENTS = (allRuleVersions as RuleVersion[]).filter(
  (document) => document.version !== "next",
);

const sortPartialRuleVersions = (
  a: PartialRuleVersion,
  b: PartialRuleVersion,
) => {
  if (`${a.configName}${a.ruleName}` < `${b.configName}${b.ruleName}`) {
    return -1;
  }
  if (`${a.configName}${a.ruleName}` > `${b.configName}${b.ruleName}`) {
    return 1;
  }
  return 0;
};

const getCurrentRuleVersions = async () => {
  const eslintConfigsProps = CONFIG_NAMES.reduce<
    Parameters<typeof getESLintConfig>[0][]
  >(
    (acc, configName) => [
      ...acc,
      { configName, ts: false },
      { configName, ts: true },
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
      (rootAcc, { configName, ts, config }) =>
        Object.entries(config.rules).reduce((acc, [ruleName, ruleEntry]) => {
          const entryIndex = acc.findIndex(
            (ent) => ent.configName === configName && ent.ruleName === ruleName,
          );

          if (entryIndex === -1) {
            return [
              ...acc,
              {
                configName,
                ruleName,
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
  const latestPartialRuleVersions = LATEST_DOCUMENTS.map(
    ({ configName, ruleName, jsEntry, tsEntry }) => ({
      configName,
      ruleName,
      jsEntry,
      tsEntry,
    }),
  ).sort(sortPartialRuleVersions);

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
            currentPartialRuleVersion.configName ===
              latestPartialRuleVersion.configName &&
            currentPartialRuleVersion.ruleName ===
              latestPartialRuleVersion.ruleName,
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
  const nextRuleVersionsFolder = path.join(RULE_VERSIONS_FOLDER, "next");
  const nextVersionFilepath = path.join(VERSIONS_FOLDER, "next.mdx");

  const nextPartialRuleVersions = await getNextPartialRuleVersions();

  // Remove the previous next version folder
  await fsPromises.rm(nextRuleVersionsFolder, { recursive: true, force: true });
  await fsPromises.rm(nextVersionFilepath, { recursive: true, force: true });

  // If there's no next rule versions, we don't need to create the next version
  if (!nextPartialRuleVersions) {
    return console.log("Nothing changed since last release");
  }

  const writeRuleVersionPromises = nextPartialRuleVersions.map(
    async ({ configName, ruleName, tsEntry, jsEntry }) => {
      const latest = LATEST_DOCUMENTS.find(
        (document) =>
          document.configName === configName && document.ruleName === ruleName,
      );

      const previousJsEntry = latest?.jsEntry
        ? stringify(latest?.jsEntry)
        : null;

      const previousTsEntry = latest?.tsEntry
        ? stringify(latest?.tsEntry)
        : null;

      const updates = latest?.updates || [];

      const filepath = path.join(
        nextRuleVersionsFolder,
        `${configName}/${ruleName}.mdx`,
      );

      const content = `---
ruleName: "${ruleName}"
jsEntry: ${jsEntry ? stringify(jsEntry) : null}
previousJsEntry: ${previousJsEntry}
tsEntry: ${tsEntry ? stringify(tsEntry) : null}
previousTsEntry: ${previousTsEntry}
updates: ${stringify(updates)}
---`;

      return writeWithPrettier({
        filepath,
        content,
        options: { parser: "mdx" },
      });
    },
  );

  await Promise.all(writeRuleVersionPromises);

  await writeWithPrettier({
    filepath: nextVersionFilepath,
    content: `---
publishedDate: ${new Date().toISOString()}
---`,
    options: { parser: "mdx" },
  });

  return console.log("Next rule version files updated");
})();
