import { type Linter } from "eslint";

export type ESLintPluginConfig = {
  docsUrlTemplate: string;
  pluginName: string | null;
  pluginUrl: string | null;
};

export type ESLintConfigName =
  | "base"
  | "jest"
  | "next"
  | "prettier"
  | "react"
  | "tailwindcss";

export type RuleVersionEntryValue = {
  level: Linter.StringSeverity;
  entry: string;
};

export type RuleVersionEntryValues = {
  js?: RuleVersionEntryValue;
  ts?: RuleVersionEntryValue;
};

export type RuleVersionEntry = {
  version: string;
  values: RuleVersionEntryValues | null;
};

export type RuleUsedByEntry = {
  versions: RuleVersionEntry[];
};

export type RuleUsedBy = Record<string, RuleUsedByEntry>;

export type Rule = {
  docsUrl: string;
  description: string;
  usedBy: RuleUsedBy;
};

export type Rules = Record<string, Rule>;
