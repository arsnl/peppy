import {
  type ESLintConfigName,
  type ESLintRuleLevel,
  type ESLintRuleState,
} from "@/types/eslint";

export const eslintRuleStateTextConfig: { [state in ESLintRuleState]: string } =
  {
    added: "New",
    changed: "Changed",
    removed: "Removed",
    unchanged: "Unchanged",
  };

export const eslintRuleLevelTextConfig: { [level in ESLintRuleLevel]: string } =
  {
    off: "Off",
    warn: "Warn",
    error: "Error",
  };

export const eslintConfigNamesConfig = [
  "base",
  "jest",
  "next",
  "prettier",
  "react",
  "tailwindcss",
] satisfies ESLintConfigName[];
