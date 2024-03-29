import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "no-var",
  valid: ["const a = 1;", "let a = 1;"],
  invalid: [
    {
      code: "var a = 1;",
      errors: ["Unexpected var, use let or const instead."],
    },
  ],
});
