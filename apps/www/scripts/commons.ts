/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import fsPromises from "node:fs/promises";
import path from "node:path";
import prettier, { type Options } from "prettier";
import { eslintVersions } from "@/generated/eslint-versions";
import { type ESLintVersions, type Rules } from "@/types/eslint";

const NO_EDIT_BANNER = `// This file is generated automatically
// DO NOT EDIT IT MANUALLY`;

export const writeWithPrettier = async ({
  filepath,
  content,
  options = {},
}: {
  filepath: string;
  content: string;
  options?: Options;
}) => {
  await fsPromises.mkdir(path.dirname(filepath), { recursive: true });

  const data = await prettier.format(content, {
    parser: "babel",
    ...options,
  });

  await fsPromises.writeFile(filepath, data, { encoding: "utf-8", flag: "w" });
};

export const getStringifiedJSONWithPrettier = async (value: unknown) =>
  prettier.format(stringify(value), {
    parser: "json",
  });

export const isJSONStringSames = (a?: string, b?: string) => {
  try {
    return (
      stringify(JSON.parse(a || "{}")) === stringify(JSON.parse(b || "{}"))
    );
  } catch {
    return false;
  }
};

export const getGeneratedPath = () => path.join(__dirname, `../src/generated`);

export const getGeneratedRulePath = () =>
  path.join(getGeneratedPath(), "rules");

export const getGeneratedVersionPath = ({ version }: { version: string }) =>
  path.join(getGeneratedRulePath(), version);

export const getGeneratedConfigPath = ({
  version,
  config,
}: {
  version: string;
  config: string;
}) => path.join(getGeneratedVersionPath({ version }), `${config}.ts`);

export const importConfigRules = async ({
  version,
  config,
}: {
  version: string;
  config: string;
}): Promise<Rules | null> => {
  try {
    const { rules } = await import(
      getGeneratedConfigPath({
        version,
        config,
      })
    );

    return rules;
  } catch {
    return null;
  }
};

export const getVersionnedConfigsRules = async (
  version: string,
): Promise<Record<string, Rules>> => {
  const versionInfo =
    version === "latest"
      ? eslintVersions.find((v) => v.version !== "next")
      : eslintVersions.find((v) => v.version === version);

  if (!versionInfo) {
    return {};
  }

  return versionInfo.configs.reduce<Promise<Record<string, Rules>>>(
    async (accPromise, configName) => {
      const acc = await accPromise;
      const rules = await importConfigRules({
        version: versionInfo.version,
        config: configName,
      });

      return rules
        ? {
            ...acc,
            [configName]: rules,
          }
        : acc;
    },
    Promise.resolve({}),
  );
};

export const writeVersionFile = async (versions: ESLintVersions) => {
  const content = `${NO_EDIT_BANNER}
  import { type ESLintVersions } from "@/types/eslint";

  export const eslintVersions: ESLintVersions = ${stringify(versions)};`;

  await writeWithPrettier({
    filepath: path.join(getGeneratedPath(), "eslint-versions.ts"),
    content,
    options: { parser: "typescript" },
  });
};

export const writeRulesFile = async ({
  rules,
  version,
  config,
}: {
  rules: Rules;
  version: string;
  config: string;
}) => {
  const content = `${NO_EDIT_BANNER}
  import { type Rules } from "@/types/eslint";

  export const rules: Rules = ${stringify(rules)};`;

  await writeWithPrettier({
    filepath: getGeneratedConfigPath({
      version,
      config,
    }),
    content,
    options: { parser: "typescript" },
  });
};
