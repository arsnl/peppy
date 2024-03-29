import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "no-fallthrough",
  valid: [
    `
      switch (foo) {
        case 1:
          doSomething();
          break;
        case 2:
          doSomething();
      }
     `,
    `
      function bar(foo) {
        switch (foo) {
          case 1:
            doSomething();
            return;
          case 2:
            doSomething();
        }
      }
    `,
    `
      switch (foo) {
        case 1:
          doSomething();
          throw "Boo";
        case 2:
          doSomething();
      }
    `,
    `
    switch (foo) {
      case 1:
      case 2:
        doSomething();
      }`,
    `
    switch (foo) {
      case 1:
      doSomething();
      // falls through

      case 2:
      doSomething();
    }
    `,
  ],
  invalid: [
    {
      code: `
          switch (foo) {
            case 1:
              doSomething();
            case 2:
              doSomething();
          }
        `,
      errors: ["Expected a 'break' statement before 'case'."],
    },
  ],
});
