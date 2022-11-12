const { validateESLintRule } = require("@tests/utils");

validateESLintRule({
  cwd: __dirname,
  ruleName: "prefer-arrow-callback",
  valid: [
    `foo(a => a)`,
    `foo(() => this.a)`,
    `foo(function() { this.a; });`,
    `foo(function() { (() => this); });`,
    `someArray.map(function(item) { return this.doSomething(item); }, someObject);`,
  ],
  invalid: [
    {
      code: `foo(function(a) { return a; });`,
      errors: ["Unexpected function expression."],
    },
    {
      code: `foo(function() { return this.a; }.bind(this));`,
      errors: ["Unexpected function expression."],
    },
    {
      code: `foo(function bar() {});`,
      errors: ["Unexpected function expression."],
    },
  ],
});
