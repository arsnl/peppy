import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "arrow-body-style",
  valid: [
    `let foo = () => 0;`,
    `let foo = () => ({});`,
    `let foo = () => ({ bar: 0 });`,
  ],
  invalid: [
    {
      code: `
        let foo = () => {
          return 0;
        };
        `,
      errors: [
        "Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.",
      ],
    },
    {
      code: `
        let foo = () => {
          return { bar: 0 }
        };
        `,
      errors: [
        "Unexpected block statement surrounding arrow body; parenthesize the returned value and move it immediately after the `=>`.",
      ],
    },
  ],
});
