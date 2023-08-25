import { eslintPluginsConfig } from "@/config/eslint";
import { eslintVersions } from "@/generated/eslint-versions";
import { type ESLintConfigName, type Rules } from "@/types/eslint";

export const getESLintRuleDocsUrl = (ruleName: string) => {
  const noPrefixRuleName = ruleName.split("/").pop();
  const pluginName = ruleName.split("/").slice(0, -1).join("/") || "eslint";

  const { docsUrlTemplate = "", pluginUrl } =
    eslintPluginsConfig[pluginName] || {};

  return docsUrlTemplate
    .replace("{ruleName}", ruleName || "")
    .replace("{pluginUrl}", pluginUrl || "")
    .replace("{noPrefixRuleName}", noPrefixRuleName || "");
};

export const getESLintRules = async ({
  configName,
  version,
}: {
  configName: ESLintConfigName;
  version: string;
}): Promise<Rules | null> => {
  const validatedVersion =
    version === "latest"
      ? eslintVersions?.[0]?.version
      : eslintVersions.find((v) => v.version === version)?.version;

  if (!validatedVersion) {
    return null;
  }

  try {
    const { rules } = await import(
      `@/generated/rules/${validatedVersion}/${configName}.ts`
    );

    return rules || null;
  } catch {
    return null;
  }
};
