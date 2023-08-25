import { type Linter } from "eslint";

export type ESLintPluginConfig = {
  docsUrlTemplate: string;
  pluginName: string | null;
  pluginUrl: string | null;
};

export type ESLintVersion = {
  version: string;
  configs: string[];
};

export type ESLintVersions = ESLintVersion[];

export type ESLintConfigName =
  | "base"
  | "jest"
  | "next"
  | "prettier"
  | "react"
  | "tailwindcss";

export type RuleInfo = {
  level: Linter.StringSeverity;
  entry: string;
};

export type RuleState = "new" | "changed" | "unchanged" | "removed";

export type Rule = {
  docsUrl: string;
  description: string;
  updates: string[];
  state: RuleState;
  js?: RuleInfo;
  ts?: RuleInfo;
};

export type Rules = Record<string, Rule>;
