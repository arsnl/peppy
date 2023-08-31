/* eslint-disable import/no-extraneous-dependencies */
import {
  type ESLintConfig,
  type RuleVersion,
  type Version,
} from "contentlayer/generated";
import execa from "execa";
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { rulesConfig } from "@/config/rule";
import { writeWithPrettier } from "./common";

export type { ESLintConfig, RuleVersion, Version };

const GENERATED_PATH = path.join(
  __dirname,
  "../../.contentlayer/generated/index.mjs",
);

export const CONTENT_FOLDER = path.join(__dirname, `../../src/content`);

export const RULE_VERSIONS_FOLDER = path.join(CONTENT_FOLDER, "/rule-versions");

export const RULE_VERSIONS_NEXT_FOLDER = path.join(
  RULE_VERSIONS_FOLDER,
  "/next",
);

export const RULE_VERSIONS_TEMP_FOLDER = path.join(
  RULE_VERSIONS_FOLDER,
  "/temp",
);

export const RULE_VERSIONS_LATEST_FOLDER = path.join(
  RULE_VERSIONS_FOLDER,
  "/latest",
);

export const VERSIONS_FOLDER = path.join(CONTENT_FOLDER, "/versions");

export const getAllESLintConfigs = async () =>
  import(GENERATED_PATH).then((mod) => mod.allESLintConfigs as ESLintConfig[]);

export const getAllRuleVersions = async () =>
  import(GENERATED_PATH).then((mod) => mod.allRuleVersions as RuleVersion[]);

export const getAllVersions = async () =>
  import(GENERATED_PATH).then((mod) => mod.allVersions as Version[]);

export const getESLintConfigKeys = async () => {
  const allESLintConfigs = await getAllESLintConfigs();
  return allESLintConfigs.map((doc) => doc.key);
};

export const getRuleVersions = async (next: boolean = false) => {
  const allRuleVersions = await getAllRuleVersions();
  return allRuleVersions.filter((doc) =>
    next ? doc.version === "next" : doc.version !== "next",
  );
};

export const getLatestVersion = async () => {
  const allVersions = await getAllVersions();

  return allVersions
    .sort((a, b) => b.version.localeCompare(a.version))
    .filter((doc) => doc.version !== "next")?.[0]?.version;
};

export const writeRuleVersion = async ({
  configKey,
  ruleKey,
  version,
  jsEntry,
  previousJsEntry,
  tsEntry,
  previousTsEntry,
  updates,
}: Pick<
  RuleVersion,
  | "configKey"
  | "ruleKey"
  | "version"
  | "jsEntry"
  | "previousJsEntry"
  | "tsEntry"
  | "previousTsEntry"
  | "updates"
>) => {
  const folder =
    version === "next" ? RULE_VERSIONS_NEXT_FOLDER : RULE_VERSIONS_TEMP_FOLDER;
  const filepath = path.join(
    folder,
    `/${configKey}/${ruleKey.replace(/\//g, "_")}.mdx`,
  );

  // replace all the slash in a string by _

  const content = `---
version: "${version}"
ruleKey: "${ruleKey}"
description: ${rulesConfig?.[ruleKey]?.description || null}
jsEntry: ${jsEntry ? stringify(jsEntry) : null}
previousJsEntry: ${previousJsEntry ? stringify(previousJsEntry) : null}
tsEntry: ${tsEntry ? stringify(tsEntry) : null}
previousTsEntry: ${previousTsEntry ? stringify(previousTsEntry) : null}
updates: ${stringify(updates || [])}
---`;

  return writeWithPrettier({
    filepath,
    content,
    options: { parser: "mdx" },
  });
};

export const writeVersion = async ({ version }: Pick<Version, "version">) => {
  const filepath = path.join(VERSIONS_FOLDER, `/${version}.mdx`);

  const content = `---
publishedDate: ${new Date().toISOString()}
---`;

  return writeWithPrettier({
    filepath,
    content,
    options: { parser: "mdx" },
  });
};

export const removeNextVersion = async () => {
  await fsPromises.rm(RULE_VERSIONS_NEXT_FOLDER, {
    recursive: true,
    force: true,
  });
  await fsPromises.rm(path.join(VERSIONS_FOLDER, "next.mdx"), {
    recursive: true,
    force: true,
  });
};

export const contentlayerBuild = async () =>
  execa("npx", ["contentlayer", "build", "--clearCache"], { stdio: "inherit" });
