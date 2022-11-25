const { validateESLintRule } = require("@tests/utils");

validateESLintRule({
  cwd: __dirname,
  ruleName: "curly",
  valid: [
    `
    if (foo) {
      foo++;
    }
    `,
    `
    while (bar) {
      baz();
    }
    `,
    `
    if (foo) {
      baz();
    } else {
      qux();
    }
    `,
  ],
  invalid: [
    {
      code: `if (foo) foo++;`,
      errors: ["Expected { after 'if' condition."],
    },
    {
      code: `if (foo) 
               foo++;
            `,
      errors: ["Expected { after 'if' condition."],
    },
    {
      code: `
      while (bar)
        baz();
      `,
      errors: ["Expected { after 'while' condition."],
    },
    {
      code: `
      if (foo) {
        baz();
      } else qux();
      `,
      errors: ["Expected { after 'else'."],
    },
  ],
});
