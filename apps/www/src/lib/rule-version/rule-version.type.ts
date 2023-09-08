export type RuleConfig = { description: string };

export type RulesConfig = Record<string, RuleConfig>;

export type ESLintPluginConfig = {
  docsUrlTemplate: string;
  pluginName: string | null;
  pluginUrl: string | null;
};

export type ESLintPluginsConfig = Record<string, ESLintPluginConfig>;
