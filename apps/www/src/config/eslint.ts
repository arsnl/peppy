import { type ESLintRuleState } from "@/types/eslint";

export const eslintRuleStateTextConfig: { [state in ESLintRuleState]: string } =
  {
    added: "New",
    changed: "Changed",
    removed: "Removed",
    unchanged: "Unchanged",
  };
