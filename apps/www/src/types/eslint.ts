import { type Linter } from "eslint";

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

export type ESLintRuleLevel = Linter.StringSeverity;

export type RuleInfo = {
  level: ESLintRuleLevel;
  entry: string;
};

export type ESLintRuleState = "added" | "changed" | "removed" | "unchanged";

export type Rule = {
  updates: string[];
  state: ESLintRuleState;
  js?: RuleInfo;
  ts?: RuleInfo;
};

export type Rules = Record<string, Rule>;
