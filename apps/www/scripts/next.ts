/* eslint-disable import/extensions */
/* eslint-disable import/no-relative-packages */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import path from "node:path";
import {
  allESLintConfigs,
  allVersions,
} from "../.contentlayer/generated/index.mjs";
import { writeWithPrettier } from "./utils/commons";
import { getESLintConfig } from "./utils/eslint";
import type {
  ESLintConfig,
  Version,
} from "../.contentlayer/generated/types.d.ts";

type RuleVersion = {
  configName: string;
  ruleName: string;
  tsEntry?: any;
  jsEntry?: any;
};

const CONFIG_NAMES = (allESLintConfigs as ESLintConfig[]).map(({ key }) => key);

const LATEST_DOCUMENTS = (allVersions as Version[]).filter(
  (document) => document.version !== "next",
);

const sortRulesVersion = (a: RuleVersion, b: RuleVersion) => {
  if (`${a.configName}${a.ruleName}` < `${b.configName}${b.ruleName}`) {
    return -1;
  }
  if (`${a.configName}${a.ruleName}` > `${b.configName}${b.ruleName}`) {
    return 1;
  }
  return 0;
};

const getCurrentRulesVersion = async () => {
  const configsProps = CONFIG_NAMES.reduce<
    Parameters<typeof getESLintConfig>[0][]
  >(
    (acc, configName) => [
      ...acc,
      { configName, ts: false },
      { configName, ts: true },
    ],
    [],
  );

  const eslintConfigsPromises = configsProps.map(async (configProps) => {
    const config = await getESLintConfig(configProps);
    return { ...configProps, config };
  });

  const eslintConfigs = await Promise.all(eslintConfigsPromises);

  const rulesVersion = eslintConfigs
    .reduce<RuleVersion[]>(
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
    .sort(sortRulesVersion);

  return rulesVersion;
};

const getNextRulesVersion = async () => {
  const latestRulesVersion = LATEST_DOCUMENTS.map(
    ({ configName, ruleName, jsEntry, tsEntry }) => ({
      configName,
      ruleName,
      jsEntry,
      tsEntry,
    }),
  ).sort(sortRulesVersion);

  const currentRulesVersion = await getCurrentRulesVersion();

  if (stringify(currentRulesVersion) === stringify(latestRulesVersion)) {
    return null;
  }

  const removedRulesVersion = latestRulesVersion
    .filter(
      (latestConfig) =>
        !currentRulesVersion.some(
          (config) =>
            config.configName === latestConfig.configName &&
            config.ruleName === latestConfig.ruleName,
        ),
    )
    .map((removedConfigRule) => ({
      ...removedConfigRule,
      jsEntry: null,
      tsEntry: null,
    }));

  return [...currentRulesVersion, ...removedRulesVersion];
};

/**
 *  Update the next version in the generated files, if needed
 */
(async () => {
  const nextFolder = path.join(__dirname, `../src/content/versions/next`);
  const nextRulesVersion = await getNextRulesVersion();

  // Remove the previous next version folder
  await fsPromises.rm(nextFolder, { recursive: true, force: true });

  // If there's no next version, we don't need to create the next version
  if (!nextRulesVersion) {
    return console.log("Nothing changed since last release");
  }

  const writeDocumentPromises = nextRulesVersion.map(
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

      const filepath = path.join(nextFolder, `${configName}/${ruleName}.mdx`);

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

  await Promise.all(writeDocumentPromises);

  return console.log("Next version files updated");
})();
