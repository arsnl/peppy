/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { version } from "eslint-config-peppy/package.json";
import fsPromises from "node:fs/promises";
import {
  contentlayerBuild,
  getLatestVersion,
  getRuleVersions,
  removeNextVersion,
  RULE_VERSIONS_LATEST_FOLDER,
  RULE_VERSIONS_TEMP_FOLDER,
  writeRuleVersion,
  writeVersion,
} from "./utils/contentlayer";

/**
 * Bump the version next version in the generated files to the current version
 */
(async () => {
  // Clear the cache and build the contentlayer files
  await contentlayerBuild();

  // Get the rule versions for the next version
  const nextRuleVersions = await getRuleVersions(true);

  // Get the latest version from contentlayer
  const latestVersion = await getLatestVersion();

  // If there's no next rule versions, we don't need to bump
  if (!nextRuleVersions?.length) {
    return console.log("Nothing to bump");
  }

  // If the latest and current versions are the same, we prevent the bump
  if (latestVersion === version) {
    console.error("You cannot bump the version to the same version.");
    console.error(
      "Ensure you have updated the version in package.json before running this script.",
    );
    throw new Error("Version bump failed");
  }

  // Write the rule versions in the temp folder
  await Promise.all(
    nextRuleVersions.map(
      async ({
        configKey,
        ruleKey,
        tsEntry,
        previousJsEntry,
        jsEntry,
        previousTsEntry,
        history = [],
        state = "new",
      }) => {
        const previousHistory = history.filter(
          (entry: any) => entry.version !== version && entry.version !== "next",
        );

        return writeRuleVersion({
          configKey,
          ruleKey,
          version,
          jsEntry,
          previousJsEntry,
          tsEntry,
          previousTsEntry,
          history:
            state === "unchanged"
              ? history
              : [{ version, state }, ...previousHistory],
        });
      },
    ),
  );

  // Remove the previous next version folder and the next version file
  await removeNextVersion();

  // Remove the previous latest version folder
  await fsPromises.rm(RULE_VERSIONS_LATEST_FOLDER, {
    recursive: true,
    force: true,
  });

  // Rename the temp folder to the latest version folder
  await fsPromises.rename(
    RULE_VERSIONS_TEMP_FOLDER,
    RULE_VERSIONS_LATEST_FOLDER,
  );

  // Write the version file
  await writeVersion({ version });

  return console.log(`Bumped to version ${version}`);
})();
