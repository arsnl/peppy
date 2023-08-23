import { eslintPluginsConfig } from "@/config/eslint";

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
