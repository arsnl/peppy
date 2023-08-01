import { validateESLintRule } from "@tests/utils";

const testConfig = {
  cwd: __dirname,
  ruleName: "no-shadow",
  valid: [],
  invalid: [
    {
      code: `
      var a = 3;
      function b() {
          var a = 10;
      }
        `,
      errors: [
        "'a' is already declared in the upper scope on line 2 column 11.",
      ],
    },
  ],
};

validateESLintRule(testConfig);

validateESLintRule({
  ...testConfig,
  ruleName: "@typescript-eslint/no-shadow",
  file: "file.ts",
  valid: [
    ...testConfig.valid,
    `
    enum MyEnum {
      a = "a",
      b = "b",
    }`,
  ],
});
