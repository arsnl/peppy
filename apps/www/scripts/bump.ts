/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { version } from "eslint-config-peppy/package.json";
import fsPromises from "node:fs/promises";
import { eslintVersions } from "@/generated/eslint-versions";
import { type Rule, type Rules } from "@/types/eslint";
import {
  getGeneratedVersionPath,
  getVersionnedConfigsRules,
  writeRulesFile,
  writeVersionFile,
} from "./commons";

const updateVersionsFile = async () => {
  const updatedVersions = eslintVersions.map((versionEntry) => ({
    ...versionEntry,
    version: versionEntry.version === "next" ? version : versionEntry.version,
  }));

  await writeVersionFile(updatedVersions);
};

const updateRulesFiles = async () => {
  const configsRules = await getVersionnedConfigsRules("next");

  const updatedConfigsRules = Object.entries(configsRules).reduce<
    Record<string, Rules>
  >(
    (acc, [configName, rules]) =>
      Object.entries(rules).reduce((configsAcc, [ruleName, rule]) => {
        const configEntry = configsAcc[configName] || {};

        const updatedRuleEntry: Rule = {
          ...rule,
          updates: rule?.updates?.map((update) =>
            update === "next" ? version : update,
          ),
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

  // Write rules files for the new version
  await Promise.all(
    Object.entries(updatedConfigsRules).map(async ([configName, rules]) =>
      writeRulesFile({ rules, version, config: configName }),
    ),
  );

  // Remove rules files for the next version
  await fsPromises.rm(getGeneratedVersionPath({ version: "next" }), {
    recursive: true,
  });
};

/**
 * Bump the version next version in the generated files to the current version
 */
(async () => {
  if (eslintVersions?.[0]?.version !== "next") {
    return console.log("Nothing to bump");
  }

  await updateRulesFiles();
  await updateVersionsFile();

  return console.log("Bump completed");
})();
