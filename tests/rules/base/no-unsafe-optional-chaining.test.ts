import { validateESLintRule } from "@tests/utils";

validateESLintRule({
  cwd: __dirname,
  ruleName: "no-unsafe-optional-chaining",
  valid: [
    "(obj?.foo)?.();",
    "obj?.foo();",
    "(obj?.foo ?? bar)();",
    "obj?.foo.bar;",
    "obj.foo?.bar;",
    "foo?.()?.bar;",
    "(obj?.foo ?? bar)`template`;",
    "new (obj?.foo ?? bar)();",
    "var baz = {...obj?.foo};",
    "const { bar } = obj?.foo || baz;",
  ],
  invalid: [
    {
      code: "(obj?.foo)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(obj?.foo).bar;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(foo?.()).bar;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(foo?.()).bar();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(obj?.foo ?? obj?.bar)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(foo || obj?.foo)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(obj?.foo && foo)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(foo ? obj?.foo : bar)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(foo, obj?.bar).baz;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "(obj?.foo)`template`;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "new (obj?.foo)();",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "[...obj?.foo];",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "bar(...obj?.foo);",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "1 in obj?.foo;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "bar instanceof obj?.foo;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "for (bar of obj?.foo);",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "const { bar } = obj?.foo;",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "[{ bar } = obj?.foo] = [];",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "class A extends obj?.foo {}",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "var a = class A extends obj?.foo {};",
      errors: [
        "Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
      ],
    },
    {
      code: "+obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "-obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo + bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo - bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo / bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo * bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo % bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "obj?.foo ** bar;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz += obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz -= obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz /= obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz *= obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz %= obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
    {
      code: "baz **= obj?.foo;",
      errors: [
        "Unsafe arithmetic operation on optional chaining. It can result in NaN.",
      ],
    },
  ],
});
