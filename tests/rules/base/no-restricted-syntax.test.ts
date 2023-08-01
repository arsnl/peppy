import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "no-restricted-syntax",
  valid: [],
  invalid: [
    // ForInStatement
    {
      code: `
            let object1 = {a: 1, b: 2, c: 3};
            for (let property1 in object1) {
              console.log(property1);
            }
          `,
      errors: [
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      ],
    },
    // ForOfStatement
    {
      code: `
            const array1 = ['a', 'b', 'c'];

            for (const element of array1) {
                console.log(element);
            }
            `,
      errors: [
        "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      ],
    },
    // LabeledStatement
    {
      code: `
            let str = '';

            loop1:
            for (let i = 0; i < 5; i++) {
                if (i === 1) {
                continue loop1;
                }
                str = str + i;
            }
            `,
      errors: [
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      ],
    },
    // WithStatement
    {
      code: `
            function f(x, o) {
                with (o) {
                console.log(x);
                }
            }
            `,
      // Message in the configuration is "`with` is disallowed in strict mode because it makes code impossible to predict and optimize." for users not in strict mode.
      // The tests runs in strict mode so we retreive a different message during the tests
      errors: ["Parsing error: 'with' in strict mode"],
    },
  ],
});
