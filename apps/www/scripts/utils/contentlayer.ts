/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import execa from "execa";
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { rulesConfig } from "@/lib/rule-version/rule-version.config";
import { writeWithPrettier } from "./common";
import type * as ContentlayerGenerated from "contentlayer/generated";

type ESLintConfig = ContentlayerGenerated.ESLintConfig;
type RuleVersion = ContentlayerGenerated.RuleVersion;
type Version = ContentlayerGenerated.Version;
type VersionChangesEntry = ContentlayerGenerated.VersionChangesEntry;

export type { ESLintConfig, RuleVersion, Version };

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

/**
 * Get the contentlayer generated files without cache since the
 * genereated files are cached and changed a lot in a short lapse of time
 */
export const getFreshContentlayerGenerated = () => {
  const contentlayerGeneratedFolder = path.join(
    __dirname,
    "../../.contentlayer/generated",
  );

  Object.keys(require.cache).forEach((key) => {
    if (key.startsWith(contentlayerGeneratedFolder)) {
      delete require.cache[key];
    }
  });

  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(
    path.join(contentlayerGeneratedFolder, "index.mjs"),
  ) as typeof ContentlayerGenerated;
};

export const getESLintConfigKeys = async () => {
  const { allESLintConfigs } = getFreshContentlayerGenerated();
  return allESLintConfigs.map((doc) => doc.key);
};

export const getRuleVersions = async (next: boolean = false) => {
  const { allRuleVersions } = getFreshContentlayerGenerated();
  return allRuleVersions.filter((doc) =>
    next ? doc.version === "next" : doc.version !== "next",
  );
};

export const getLatestVersion = async () => {
  const { allVersions } = getFreshContentlayerGenerated();

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
  history,
}: Pick<
  RuleVersion,
  | "configKey"
  | "ruleKey"
  | "version"
  | "jsEntry"
  | "previousJsEntry"
  | "tsEntry"
  | "previousTsEntry"
> & {
  history: Pick<RuleVersion["history"][0], "version" | "jsState" | "tsState">[];
}) => {
  const folder =
    version === "next" ? RULE_VERSIONS_NEXT_FOLDER : RULE_VERSIONS_TEMP_FOLDER;
  const filepath = path.join(
    folder,
    `/${configKey}/${ruleKey.replace(/\//g, "_")}.mdx`,
  );

  const content = `---
version: "${version}"
ruleKey: "${ruleKey}"
description: ${rulesConfig?.[ruleKey]?.description || null}
jsEntry: ${jsEntry ? stringify(jsEntry) : null}
previousJsEntry: ${previousJsEntry ? stringify(previousJsEntry) : null}
tsEntry: ${tsEntry ? stringify(tsEntry) : null}
previousTsEntry: ${previousTsEntry ? stringify(previousTsEntry) : null}
history: ${stringify(history || [])}
---

<RuleInfos 
  configKey="${configKey}" 
  ruleKey="${ruleKey}" 
>

\`\`\`json
${stringify(jsEntry || {})}
\`\`\`

\`\`\`json
${stringify(tsEntry || {})}
\`\`\`
</RuleInfos>
`;

  return writeWithPrettier({
    filepath,
    content,
    options: { parser: "mdx" },
  });
};

export const writeVersion = async ({ version }: Pick<Version, "version">) => {
  const filepath = path.join(VERSIONS_FOLDER, `/${version}.mdx`);
  console.log("Rebuilding contentlayer before writing the version");
  await contentlayerBuild();
  const ruleVersions = await getRuleVersions(version === "next");

  const changes = ruleVersions
    .reduce<
      Pick<
        VersionChangesEntry,
        "configKey" | "ruleKey" | "jsState" | "tsState"
      >[]
    >((acc, ruleVersion) => {
      const { configKey, ruleKey, jsState, tsState } = ruleVersion;

      return (jsState === "none" || jsState === "unchanged") &&
        (tsState === "none" || tsState === "unchanged")
        ? acc
        : [...acc, { configKey, ruleKey, jsState, tsState }];
    }, [])
    .sort((a, b) => {
      const keyA = `${a.configKey}/${a.ruleKey}`;
      const keyB = `${b.configKey}/${b.ruleKey}`;

      return keyA.localeCompare(keyB);
    });

  const content = `---
publishedDate: ${new Date().toISOString()}
changes: ${stringify(changes)}
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
