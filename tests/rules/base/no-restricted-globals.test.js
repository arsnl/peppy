const { validateESLintRule } = require("@tests/utils");

validateESLintRule({
  cwd: __dirname,
  ruleName: "no-restricted-globals",
  valid: [],
  invalid: [
    {
      code: "isFinite(Infinity)",
      errors: ["Unexpected use of 'isFinite'. Use Number.isFinite instead."],
    },
    {
      code: "isNaN(undefined)",
      errors: ["Unexpected use of 'isNaN'. Use Number.isNaN instead."],
    },
  ],
});
