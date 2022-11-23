<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<h2 align="center">Base rule set</h2>

Here are the basic ESLint rules provided with Peppy. These rules are used by the `peppy` configuration only.

These rules use the [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) and [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) plugins already included in Peppy.

Since Peppy supports TypeScript by default, some rules can be overwritten when applied on a TypeScript file. You will find the list of these rules in the [TypeScript](#typescript) section of this document.

<!-- START rules -->
<div align="center">

### Rules stats

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 179   | 174      | 5          | 0           |

</div>

#### 🔴 [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```js
["error", { allowImplicit: true, checkForEach: false }];
```

#### 🔴 [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)

```js
["error", "as-needed", { requireReturnForObjectLiteral: false }];
```

#### 🔴 [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)

```js
["error"];
```

#### 🔴 [`camelcase`](https://eslint.org/docs/rules/camelcase)

```js
[
  "error",
  {
    ignoreDestructuring: false,
    ignoreGlobals: false,
    ignoreImports: false,
    properties: "never",
  },
];
```

#### 🔴 [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```js
["error", { enforceForClassFields: true, exceptMethods: [] }];
```

#### 🔴 [`curly`](https://eslint.org/docs/rules/curly)

```js
["error", "all"];
```

#### 🔴 [`consistent-return`](https://eslint.org/docs/rules/consistent-return)

```js
["error"];
```

#### 🔴 [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

```js
["error"];
```

#### 🔴 [`default-case`](https://eslint.org/docs/rules/default-case)

```js
["error", { commentPattern: "^no default$" }];
```

#### 🔴 [`default-case-last`](https://eslint.org/docs/rules/default-case-last)

```js
["error"];
```

#### 🔴 [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```js
["error"];
```

#### 🔴 [`dot-notation`](https://eslint.org/docs/rules/dot-notation)

```js
[
  "error",
  {
    allowKeywords: true,
    allowPattern: "",
    allowPrivateClassPropertyAccess: false,
    allowProtectedClassPropertyAccess: false,
    allowIndexSignaturePropertyAccess: false,
  },
];
```

#### 🔴 [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)

```js
["error", "always"];
```

#### 🔴 [`for-direction`](https://eslint.org/docs/rules/for-direction)

```js
["error"];
```

#### 🟠 [`func-names`](https://eslint.org/docs/rules/func-names)

```js
["warn"];
```

#### 🔴 [`getter-return`](https://eslint.org/docs/rules/getter-return)

```js
["error", { allowImplicit: true }];
```

#### 🔴 [`global-require`](https://eslint.org/docs/rules/global-require)

```js
["error"];
```

#### 🔴 [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)

```js
["error"];
```

#### 🔴 [`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)

```js
["error"];
```

#### 🔴 [`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

```js
["error"];
```

#### 🔴 [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

```js
["error", "ignorePackages", { js: "never", jsx: "never", mjs: "never" }];
```

#### 🔴 [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

```js
["error"];
```

#### 🔴 [`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

```js
["error"];
```

#### 🔴 [`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

```js
["error"];
```

#### 🔴 [`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

```js
["error"];
```

#### 🔴 [`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

```js
["error"];
```

#### 🔴 [`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)

```js
["error", { ignoreExternal: false, maxDepth: "∞" }];
```

#### 🔴 [`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

```js
["error"];
```

#### 🔴 [`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)

```js
["error"];
```

#### 🔴 [`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

```js
[
  "error",
  {
    devDependencies: [
      "test/**",
      "tests/**",
      "spec/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "test.{js,jsx}",
      "test-*.{js,jsx}",
      "**/*{.,_}{test,spec}.{js,jsx}",
      "**/jest.config.js",
      "**/jest.setup.js",
      "**/vue.config.js",
      "**/webpack.config.js",
      "**/webpack.config.*.js",
      "**/rollup.config.js",
      "**/rollup.config.*.js",
      "**/gulpfile.js",
      "**/gulpfile.*.js",
      "**/Gruntfile{,.js}",
      "**/protractor.conf.js",
      "**/protractor.conf.*.js",
      "**/karma.conf.js",
      "**/.eslintrc.js",
    ],
    optionalDependencies: false,
  },
];
```

#### 🔴 [`import/no-import-module-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)

```js
["error", { exceptions: [] }];
```

#### 🔴 [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

```js
["error"];
```

#### 🔴 [`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

```js
["error"];
```

#### 🔴 [`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

```js
["error"];
```

#### 🔴 [`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)

```js
["error"];
```

#### 🔴 [`import/no-relative-packages`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)

```js
["error"];
```

#### 🔴 [`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)

```js
["error"];
```

#### 🔴 [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

```js
["error", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

#### 🔴 [`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)

```js
["error", { commonjs: true }];
```

#### 🔴 [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

```js
["error"];
```

#### 🔴 [`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)

```js
["error", { after: "always", before: "always" }];
```

#### 🔴 [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)

```js
["error", "always", { exceptAfterSingleLine: false }];
```

#### 🔴 [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)

```js
["error", 1];
```

#### 🔴 [`new-cap`](https://eslint.org/docs/rules/new-cap)

```js
[
  "error",
  {
    capIsNew: false,
    capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    newIsCap: true,
    newIsCapExceptions: [],
    properties: true,
  },
];
```

#### 🟠 [`no-alert`](https://eslint.org/docs/rules/no-alert)

```js
["warn"];
```

#### 🔴 [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

```js
["error"];
```

#### 🔴 [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)

```js
["error"];
```

#### 🔴 [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)

```js
["error"];
```

#### 🔴 [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)

```js
["error"];
```

#### 🔴 [`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)

```js
["error"];
```

#### 🔴 [`no-caller`](https://eslint.org/docs/rules/no-caller)

```js
["error"];
```

#### 🔴 [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)

```js
["error"];
```

#### 🔴 [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)

```js
["error"];
```

#### 🔴 [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)

```js
["error"];
```

#### 🔴 [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)

```js
["error", "except-parens"];
```

#### 🟠 [`no-console`](https://eslint.org/docs/rules/no-console)

```js
["warn"];
```

#### 🔴 [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

```js
["error"];
```

#### 🟠 [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)

```js
["warn"];
```

#### 🔴 [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)

```js
["error"];
```

#### 🔴 [`no-continue`](https://eslint.org/docs/rules/no-continue)

```js
["error"];
```

#### 🔴 [`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)

```js
["error"];
```

#### 🔴 [`no-debugger`](https://eslint.org/docs/rules/no-debugger)

```js
["error"];
```

#### 🔴 [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)

```js
["error"];
```

#### 🔴 [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)

```js
["error"];
```

#### 🔴 [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

```js
["error"];
```

#### 🔴 [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if)

```js
["error"];
```

#### 🔴 [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)

```js
["error"];
```

#### 🔴 [`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)

```js
["error"];
```

#### 🔴 [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```js
["error", { allowElseIf: false }];
```

#### 🔴 [`no-empty`](https://eslint.org/docs/rules/no-empty)

```js
["error"];
```

#### 🔴 [`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)

```js
["error"];
```

#### 🔴 [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

#### 🔴 [`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)

```js
["error"];
```

#### 🔴 [`no-eval`](https://eslint.org/docs/rules/no-eval)

```js
["error"];
```

#### 🔴 [`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)

```js
["error"];
```

#### 🔴 [`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)

```js
["error"];
```

#### 🔴 [`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)

```js
["error"];
```

#### 🔴 [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)

```js
["error"];
```

#### 🔴 [`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)

```js
["error"];
```

#### 🔴 [`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)

```js
["error"];
```

#### 🔴 [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)

```js
["error"];
```

#### 🔴 [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)

```js
["error", { exceptions: [] }];
```

#### 🔴 [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)

```js
["error"];
```

#### 🔴 [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign)

```js
["error"];
```

#### 🔴 [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)

```js
["error"];
```

#### 🔴 [`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)

```js
["error"];
```

#### 🔴 [`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)

```js
["error"];
```

#### 🔴 [`no-iterator`](https://eslint.org/docs/rules/no-iterator)

```js
["error"];
```

#### 🔴 [`no-label-var`](https://eslint.org/docs/rules/no-label-var)

```js
["error"];
```

#### 🔴 [`no-labels`](https://eslint.org/docs/rules/no-labels)

```js
["error", { allowLoop: false, allowSwitch: false }];
```

#### 🔴 [`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)

```js
["error"];
```

#### 🔴 [`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)

```js
["error"];
```

#### 🔴 [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)

```js
["error"];
```

#### 🔴 [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)

```js
["error"];
```

#### 🔴 [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)

```js
["error"];
```

#### 🔴 [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

```js
["error"];
```

#### 🔴 [`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)

```js
["error"];
```

#### 🔴 [`no-new`](https://eslint.org/docs/rules/no-new)

```js
["error"];
```

#### 🔴 [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

```js
["error"];
```

#### 🔴 [`no-new-object`](https://eslint.org/docs/rules/no-new-object)

```js
["error"];
```

#### 🔴 [`no-new-require`](https://eslint.org/docs/rules/no-new-require)

```js
["error"];
```

#### 🔴 [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)

```js
["error"];
```

#### 🔴 [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
["error"];
```

#### 🔴 [`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)

```js
["error"];
```

#### 🔴 [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)

```js
["error"];
```

#### 🔴 [`no-octal`](https://eslint.org/docs/rules/no-octal)

```js
["error"];
```

#### 🔴 [`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)

```js
["error"];
```

#### 🔴 [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)

```js
[
  "error",
  {
    ignorePropertyModificationsFor: [
      "acc",
      "accumulator",
      "e",
      "ctx",
      "context",
      "req",
      "request",
      "res",
      "response",
      "$scope",
      "staticContext",
    ],
    props: true,
  },
];
```

#### 🔴 [`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)

```js
["error"];
```

#### 🔴 [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

```js
["error"];
```

#### 🔴 [`no-promise-executor-return`](https://eslint.org/docs/rules/no-promise-executor-return)

```js
["error"];
```

#### 🔴 [`no-proto`](https://eslint.org/docs/rules/no-proto)

```js
["error"];
```

#### 🔴 [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

```js
["error"];
```

#### 🔴 [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)

```js
["error"];
```

#### 🔴 [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)

```js
["error"];
```

#### 🔴 [`no-restricted-exports`](https://eslint.org/docs/rules/no-restricted-exports)

```js
["error", { restrictedNamedExports: ["default", "then"] }];
```

#### 🔴 [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

```js
[
  "error",
  { name: "isFinite", message: "Use Number.isFinite instead." },
  { name: "isNaN", message: "Use Number.isNaN instead." },
  "addEventListener",
  "blur",
  "close",
  "closed",
  "confirm",
  "defaultStatus",
  "defaultstatus",
  "event",
  "external",
  "find",
  "focus",
  "frameElement",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "locationbar",
  "menubar",
  "moveBy",
  "moveTo",
  "name",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onunload",
  "open",
  "opener",
  "opera",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "print",
  "removeEventListener",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollbars",
  "scrollBy",
  "scrollTo",
  "scrollX",
  "scrollY",
  "self",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top",
];
```

#### 🔴 [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties)

```js
[
  "error",
  {
    message: "arguments.callee is deprecated.",
    object: "arguments",
    property: "callee",
  },
  {
    message: "Please use Number.isFinite instead.",
    object: "global",
    property: "isFinite",
  },
  {
    message: "Please use Number.isFinite instead.",
    object: "self",
    property: "isFinite",
  },
  {
    message: "Please use Number.isFinite instead.",
    object: "window",
    property: "isFinite",
  },
  {
    message: "Please use Number.isNaN instead.",
    object: "global",
    property: "isNaN",
  },
  {
    message: "Please use Number.isNaN instead.",
    object: "self",
    property: "isNaN",
  },
  {
    message: "Please use Number.isNaN instead.",
    object: "window",
    property: "isNaN",
  },
  {
    message: "Please use Object.defineProperty instead.",
    property: "__defineGetter__",
  },
  {
    message: "Please use Object.defineProperty instead.",
    property: "__defineSetter__",
  },
  {
    message: "Use the exponentiation operator (**) instead.",
    object: "Math",
    property: "pow",
  },
];
```

#### 🔴 [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

```js
[
  "error",
  {
    selector: "ForInStatement",
    message:
      "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
  },
  {
    selector: "ForOfStatement",
    message:
      "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
  },
  {
    selector: "LabeledStatement",
    message:
      "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
  },
  {
    selector: "WithStatement",
    message:
      "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
  },
];
```

#### 🔴 [`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)

```js
["error", "always"];
```

#### 🔴 [`no-return-await`](https://eslint.org/docs/rules/no-return-await)

```js
["error"];
```

#### 🔴 [`no-script-url`](https://eslint.org/docs/rules/no-script-url)

```js
["error"];
```

#### 🔴 [`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)

```js
["error", { props: true }];
```

#### 🔴 [`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)

```js
["error"];
```

#### 🔴 [`no-sequences`](https://eslint.org/docs/rules/no-sequences)

```js
["error"];
```

#### 🔴 [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)

```js
["error"];
```

#### 🔴 [`no-shadow`](https://eslint.org/docs/rules/no-shadow)

```js
["error"];
```

#### 🔴 [`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)

```js
["error"];
```

#### 🔴 [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)

```js
["error"];
```

#### 🔴 [`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)

```js
["error"];
```

#### 🔴 [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)

```js
["error"];
```

#### 🔴 [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)

```js
["error"];
```

#### 🔴 [`no-undef`](https://eslint.org/docs/rules/no-undef)

```js
["error"];
```

#### 🔴 [`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)

```js
["error"];
```

#### 🔴 [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)

```js
["error", { defaultAssignment: false }];
```

#### 🔴 [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)

```js
["error"];
```

#### 🔴 [`no-unreachable-loop`](https://eslint.org/docs/rules/no-unreachable-loop)

```js
["error", { ignore: [] }];
```

#### 🔴 [`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)

```js
["error"];
```

#### 🔴 [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)

```js
["error"];
```

#### 🔴 [`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining)

```js
["error", { disallowArithmeticOperators: true }];
```

#### 🔴 [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)

```js
[
  "error",
  {
    allowShortCircuit: true,
    allowTaggedTemplates: true,
    allowTernary: true,
    enforceForJSX: false,
  },
];
```

#### 🔴 [`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)

```js
["error"];
```

#### 🟠 [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

```js
[
  "warn",
  {
    args: "after-used",
    argsIgnorePattern: "^_",
    ignoreRestSiblings: true,
    vars: "all",
  },
];
```

#### 🔴 [`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference)

```js
["error"];
```

#### 🔴 [`no-useless-catch`](https://eslint.org/docs/rules/no-useless-catch)

```js
["error"];
```

#### 🔴 [`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)

```js
["error"];
```

#### 🔴 [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)

```js
["error"];
```

#### 🔴 [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```js
["error"];
```

#### 🔴 [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

```js
["error"];
```

#### 🔴 [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)

```js
[
  "error",
  { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
];
```

#### 🔴 [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)

```js
["error"];
```

#### 🔴 [`no-var`](https://eslint.org/docs/rules/no-var)

```js
["error"];
```

#### 🔴 [`no-void`](https://eslint.org/docs/rules/no-void)

```js
["error"];
```

#### 🔴 [`no-with`](https://eslint.org/docs/rules/no-with)

```js
["error"];
```

#### 🔴 [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)

```js
["error", "always", { avoidQuotes: true, ignoreConstructors: false }];
```

#### 🔴 [`one-var`](https://eslint.org/docs/rules/one-var)

```js
["error", "never"];
```

#### 🔴 [`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)

```js
["error", "always"];
```

#### 🔴 [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)

```js
["error", { allowNamedFunctions: false, allowUnboundThis: true }];
```

#### 🔴 [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```js
["error", { destructuring: "any", ignoreReadBeforeAssign: true }];
```

#### 🔴 [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

```js
[
  "error",
  {
    AssignmentExpression: { array: true, object: false },
    VariableDeclarator: { array: false, object: true },
  },
  { enforceForRenamedProperties: false },
];
```

#### 🔴 [`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator)

```js
["error"];
```

#### 🔴 [`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)

```js
["error"];
```

#### 🔴 [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)

```js
["error"];
```

#### 🔴 [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)

```js
["error", { allowEmptyReject: true }];
```

#### 🔴 [`prefer-regex-literals`](https://eslint.org/docs/rules/prefer-regex-literals)

```js
["error", { disallowRedundantWrapping: true }];
```

#### 🔴 [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

```js
["error"];
```

#### 🔴 [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

```js
["error"];
```

#### 🔴 [`prefer-template`](https://eslint.org/docs/rules/prefer-template)

```js
["error"];
```

#### 🔴 [`radix`](https://eslint.org/docs/rules/radix)

```js
["error"];
```

#### 🔴 [`require-yield`](https://eslint.org/docs/rules/require-yield)

```js
["error"];
```

#### 🔴 [`simple-import-sort/exports`](https://github.com/lydell/eslint-plugin-simple-import-sort)

```js
["error"];
```

#### 🔴 [`simple-import-sort/imports`](https://github.com/lydell/eslint-plugin-simple-import-sort)

```js
[
  "error",
  {
    groups: [
      [
        "^\\u0000",
        "^react(/.*)?(?<!(.(css|scss|sass|less)|\\u0000$))$",
        "^(?!(@\\/|~[^/]*\\/))(@?\\w).*(?<!(.(css|scss|sass|less)|\\u0000$))$",
        "^(@\\/|~[^/]*\\/).*(?<!(.(css|scss|sass|less)|\\u0000$))$",
        "^\\..*(?<!(.(css|scss|sass|less)|\\u0000$))$",
        "^(?!(@\\/|~[^/]*\\/))(@?\\w).*(\\u0000$)$",
        "^(@\\/|~[^/]*\\/).*(\\u0000$)$",
        "^\\..*(\\u0000$)$",
        "^(?!(@\\/|~[^/]*\\/))(@?\\w).*(.(css|scss|sass|less))$",
        "^(@\\/|~[^/]*\\/).*(.(css|scss|sass|less))$",
        "^\\..*(.(css|scss|sass|less))$",
      ],
    ],
  },
];
```

#### 🔴 [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

```js
[
  "error",
  "always",
  {
    block: {
      balanced: true,
      exceptions: ["-", "+"],
      markers: ["=", "!", ":", "::"],
    },
    line: { exceptions: ["-", "+"], markers: ["=", "!", "/"] },
  },
];
```

#### 🔴 [`strict`](https://eslint.org/docs/rules/strict)

```js
["error", "never"];
```

#### 🔴 [`symbol-description`](https://eslint.org/docs/rules/symbol-description)

```js
["error"];
```

#### 🔴 [`use-isnan`](https://eslint.org/docs/rules/use-isnan)

```js
["error"];
```

#### 🔴 [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)

```js
["error", { requireStringLiterals: true }];
```

#### 🔴 [`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)

```js
["error"];
```

#### 🔴 [`yoda`](https://eslint.org/docs/rules/yoda)

```js
["error"];
```

<!-- END rules -->

## TypeScript

Here are the rules that override the basic rules when applied to a TypeScript file.

These rules are only applied on `.ts` and `.tsx` files

<!-- START rules-ts -->
<div align="center">

### Rules stats

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 56    | 19       | 1          | 36          |

</div>

#### 🔵 [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

```js
["off"];
```

#### 🔵 [`getter-return`](https://eslint.org/docs/rules/getter-return)

```js
["off", { allowImplicit: true }];
```

#### 🔵 [`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

```js
["off"];
```

#### 🔵 [`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

```js
["off"];
```

#### 🔵 [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

```js
["off", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

#### 🔵 [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

```js
["off"];
```

#### 🔵 [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)

```js
["off"];
```

#### 🔵 [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)

```js
["off"];
```

#### 🔵 [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)

```js
["off"];
```

#### 🔵 [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign)

```js
["off"];
```

#### 🔵 [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)

```js
["off"];
```

#### 🔵 [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)

```js
["off"];
```

#### 🔵 [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)

```js
["off"];
```

#### 🔵 [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)

```js
["off"];
```

#### 🔵 [`no-undef`](https://eslint.org/docs/rules/no-undef)

```js
["off"];
```

#### 🔵 [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)

```js
["off"];
```

#### 🔵 [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)

```js
["off"];
```

#### 🔵 [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)

```js
["off", { requireStringLiterals: true }];
```

#### 🔵 [`camelcase`](https://eslint.org/docs/rules/camelcase)

```js
[
  "off",
  {
    ignoreDestructuring: false,
    ignoreGlobals: false,
    ignoreImports: false,
    properties: "never",
  },
];
```

#### 🔴 [`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)

```js
[
  "error",
  {
    selector: "variable",
    format: ["camelCase", "PascalCase", "UPPER_CASE"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },
  {
    selector: "function",
    format: ["camelCase", "PascalCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },
  {
    selector: "typeLike",
    format: ["PascalCase", "UPPER_CASE"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },
];
```

#### 🔴 [`@typescript-eslint/consistent-type-exports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md)

```js
["error"];
```

#### 🔴 [`@typescript-eslint/consistent-type-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md)

```js
["error", { prefer: "type-imports" }];
```

#### 🔵 [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/default-param-last`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md)

```js
["error"];
```

#### 🔵 [`dot-notation`](https://eslint.org/docs/rules/dot-notation)

```js
[
  "off",
  {
    allowKeywords: true,
    allowPattern: "",
    allowPrivateClassPropertyAccess: false,
    allowProtectedClassPropertyAccess: false,
    allowIndexSignaturePropertyAccess: false,
  },
];
```

#### 🔴 [`@typescript-eslint/dot-notation`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)

```js
[
  "error",
  {
    allowKeywords: true,
    allowPattern: "",
    allowPrivateClassPropertyAccess: false,
    allowProtectedClassPropertyAccess: false,
    allowIndexSignaturePropertyAccess: false,
  },
];
```

#### 🔵 [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)

```js
["off", "always", { exceptAfterSingleLine: false }];
```

#### 🔴 [`@typescript-eslint/lines-between-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)

```js
["error", "always", { exceptAfterSingleLine: false }];
```

#### 🔵 [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-array-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)

```js
["error"];
```

#### 🔵 [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-dupe-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)

```js
["error"];
```

#### 🔵 [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)

```js
["off", { allow: ["arrowFunctions", "functions", "methods"] }];
```

#### 🔴 [`@typescript-eslint/no-empty-function`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

#### 🔵 [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)

```js
["off"];
```

#### 🔵 [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-implied-eval`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md)

```js
["error"];
```

#### 🔵 [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-loss-of-precision`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)

```js
["error"];
```

#### 🔵 [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-loop-func`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)

```js
["error"];
```

#### 🔵 [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-redeclare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)

```js
["error", { ignoreDeclarationMerge: true }];
```

#### 🔵 [`no-shadow`](https://eslint.org/docs/rules/no-shadow)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-shadow`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md)

```js
["error"];
```

#### 🔵 [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-throw-literal`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)

```js
["error"];
```

#### 🔵 [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)

```js
[
  "off",
  {
    allowShortCircuit: true,
    allowTaggedTemplates: true,
    allowTernary: true,
    enforceForJSX: false,
  },
];
```

#### 🔴 [`@typescript-eslint/no-unused-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md)

```js
[
  "error",
  {
    allowShortCircuit: true,
    allowTaggedTemplates: true,
    allowTernary: true,
    enforceForJSX: false,
  },
];
```

#### 🔵 [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

```js
[
  "off",
  {
    args: "after-used",
    argsIgnorePattern: "^_",
    ignoreRestSiblings: true,
    vars: "all",
  },
];
```

#### 🟠 [`@typescript-eslint/no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)

```js
[
  "warn",
  {
    args: "after-used",
    argsIgnorePattern: "^_",
    ignoreRestSiblings: true,
    vars: "all",
  },
];
```

#### 🔵 [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/no-useless-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)

```js
["error"];
```

#### 🔵 [`no-return-await`](https://eslint.org/docs/rules/no-return-await)

```js
["off"];
```

#### 🔴 [`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)

```js
["error", "in-try-catch"];
```

#### 🔴 [`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

```js
[
  "error",
  {
    devDependencies: [
      "test/**",
      "tests/**",
      "spec/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "test.{js,jsx}",
      "test.{ts,tsx}",
      "test-*.{js,jsx}",
      "test-*.{ts,tsx}",
      "**/*{.,_}{test,spec}.{js,jsx}",
      "**/*{.,_}{test,spec}.{ts,tsx}",
      "**/jest.config.js",
      "**/jest.config.ts",
      "**/jest.setup.js",
      "**/jest.setup.ts",
      "**/vue.config.js",
      "**/vue.config.ts",
      "**/webpack.config.js",
      "**/webpack.config.ts",
      "**/webpack.config.*.js",
      "**/webpack.config.*.ts",
      "**/rollup.config.js",
      "**/rollup.config.ts",
      "**/rollup.config.*.js",
      "**/rollup.config.*.ts",
      "**/gulpfile.js",
      "**/gulpfile.ts",
      "**/gulpfile.*.js",
      "**/gulpfile.*.ts",
      "**/Gruntfile{,.js}",
      "**/Gruntfile{,.ts}",
      "**/protractor.conf.js",
      "**/protractor.conf.ts",
      "**/protractor.conf.*.js",
      "**/protractor.conf.*.ts",
      "**/karma.conf.js",
      "**/karma.conf.ts",
      "**/.eslintrc.js",
      "**/.eslintrc.ts",
    ],
    optionalDependencies: false,
  },
];
```

<!-- END rules-ts -->
