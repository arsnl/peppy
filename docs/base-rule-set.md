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

<details><summary>🔴 <a href="https://eslint.org/docs/rules/array-callback-return">array-callback-return</a></summary><br/>

```js
["error", { allowImplicit: true, checkForEach: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/arrow-body-style">arrow-body-style</a></summary><br/>

```js
["error", "as-needed", { requireReturnForObjectLiteral: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/block-scoped-var">block-scoped-var</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/camelcase">camelcase</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/class-methods-use-this">class-methods-use-this</a></summary><br/>

```js
["error", { enforceForClassFields: true, exceptMethods: [] }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/curly">curly</a></summary><br/>

```js
["error", "all"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/consistent-return">consistent-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/constructor-super">constructor-super</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/default-case">default-case</a></summary><br/>

```js
["error", { commentPattern: "^no default$" }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/default-case-last">default-case-last</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/default-param-last">default-param-last</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/dot-notation">dot-notation</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/eqeqeq">eqeqeq</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/for-direction">for-direction</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://eslint.org/docs/rules/func-names">func-names</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/getter-return">getter-return</a></summary><br/>

```js
["error", { allowImplicit: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/global-require">global-require</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/grouped-accessor-pairs">grouped-accessor-pairs</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/guard-for-in">guard-for-in</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md">import/export</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md">import/extensions</a></summary><br/>

```js
["error", "ignorePackages", { js: "never", jsx: "never", mjs: "never" }];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md">import/first</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md">import/named</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md">import/newline-after-import</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md">import/no-absolute-path</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md">import/no-amd</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md">import/no-cycle</a></summary><br/>

```js
["error", { ignoreExternal: false, maxDepth: "∞" }];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md">import/no-duplicates</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md">import/no-dynamic-require</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md">import/no-extraneous-dependencies</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md">import/no-import-module-exports</a></summary><br/>

```js
["error", { exceptions: [] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md">import/no-mutable-exports</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md">import/no-named-as-default</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md">import/no-named-as-default-member</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md">import/no-named-default</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md">import/no-relative-packages</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md">import/no-self-import</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md">import/no-unresolved</a></summary><br/>

```js
["error", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md">import/no-useless-path-segments</a></summary><br/>

```js
["error", { commonjs: true }];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md">import/no-webpack-loader-syntax</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/lines-around-directive">lines-around-directive</a></summary><br/>

```js
["error", { after: "always", before: "always" }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/lines-between-class-members">lines-between-class-members</a></summary><br/>

```js
["error", "always", { exceptAfterSingleLine: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/max-classes-per-file">max-classes-per-file</a></summary><br/>

```js
["error", 1];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/new-cap">new-cap</a></summary><br/>

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

</details>
<details><summary>🟠 <a href="https://eslint.org/docs/rules/no-alert">no-alert</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-array-constructor">no-array-constructor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-async-promise-executor">no-async-promise-executor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-await-in-loop">no-await-in-loop</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-bitwise">no-bitwise</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-buffer-constructor">no-buffer-constructor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-caller">no-caller</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-case-declarations">no-case-declarations</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-class-assign">no-class-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-compare-neg-zero">no-compare-neg-zero</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-cond-assign">no-cond-assign</a></summary><br/>

```js
["error", "except-parens"];
```

</details>
<details><summary>🟠 <a href="https://eslint.org/docs/rules/no-console">no-console</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-const-assign">no-const-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://eslint.org/docs/rules/no-constant-condition">no-constant-condition</a></summary><br/>

```js
["warn"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-constructor-return">no-constructor-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-continue">no-continue</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-control-regex">no-control-regex</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-debugger">no-debugger</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-delete-var">no-delete-var</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-dupe-args">no-dupe-args</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-dupe-class-members">no-dupe-class-members</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-dupe-else-if">no-dupe-else-if</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-dupe-keys">no-dupe-keys</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-duplicate-case">no-duplicate-case</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-else-return">no-else-return</a></summary><br/>

```js
["error", { allowElseIf: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-empty">no-empty</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-empty-character-class">no-empty-character-class</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-empty-function">no-empty-function</a></summary><br/>

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-empty-pattern">no-empty-pattern</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-eval">no-eval</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-ex-assign">no-ex-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-extend-native">no-extend-native</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-extra-bind">no-extra-bind</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-extra-boolean-cast">no-extra-boolean-cast</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-extra-label">no-extra-label</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-fallthrough">no-fallthrough</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-func-assign">no-func-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-global-assign">no-global-assign</a></summary><br/>

```js
["error", { exceptions: [] }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-implied-eval">no-implied-eval</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-import-assign">no-import-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-inner-declarations">no-inner-declarations</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-invalid-regexp">no-invalid-regexp</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-irregular-whitespace">no-irregular-whitespace</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-iterator">no-iterator</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-label-var">no-label-var</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-labels">no-labels</a></summary><br/>

```js
["error", { allowLoop: false, allowSwitch: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-lone-blocks">no-lone-blocks</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-lonely-if">no-lonely-if</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-loop-func">no-loop-func</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-loss-of-precision">no-loss-of-precision</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-misleading-character-class">no-misleading-character-class</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-multi-assign">no-multi-assign</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-multi-str">no-multi-str</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new">no-new</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new-func">no-new-func</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new-object">no-new-object</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new-require">no-new-require</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new-symbol">no-new-symbol</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-new-wrappers">no-new-wrappers</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-nonoctal-decimal-escape">no-nonoctal-decimal-escape</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-obj-calls">no-obj-calls</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-octal">no-octal</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-octal-escape">no-octal-escape</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-param-reassign">no-param-reassign</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-path-concat">no-path-concat</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-plusplus">no-plusplus</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-promise-executor-return">no-promise-executor-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-proto">no-proto</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-prototype-builtins">no-prototype-builtins</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-redeclare">no-redeclare</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-regex-spaces">no-regex-spaces</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-restricted-exports">no-restricted-exports</a></summary><br/>

```js
["error", { restrictedNamedExports: ["default", "then"] }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-restricted-globals">no-restricted-globals</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-restricted-properties">no-restricted-properties</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-restricted-syntax">no-restricted-syntax</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-return-assign">no-return-assign</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-return-await">no-return-await</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-script-url">no-script-url</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-self-assign">no-self-assign</a></summary><br/>

```js
["error", { props: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-self-compare">no-self-compare</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-sequences">no-sequences</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-setter-return">no-setter-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-shadow">no-shadow</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-shadow-restricted-names">no-shadow-restricted-names</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-sparse-arrays">no-sparse-arrays</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-template-curly-in-string">no-template-curly-in-string</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-this-before-super">no-this-before-super</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-throw-literal">no-throw-literal</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-undef">no-undef</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-undef-init">no-undef-init</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unneeded-ternary">no-unneeded-ternary</a></summary><br/>

```js
["error", { defaultAssignment: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unreachable">no-unreachable</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unreachable-loop">no-unreachable-loop</a></summary><br/>

```js
["error", { ignore: [] }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-finally">no-unsafe-finally</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-negation">no-unsafe-negation</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-optional-chaining">no-unsafe-optional-chaining</a></summary><br/>

```js
["error", { disallowArithmeticOperators: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unused-expressions">no-unused-expressions</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-unused-labels">no-unused-labels</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🟠 <a href="https://eslint.org/docs/rules/no-unused-vars">no-unused-vars</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-backreference">no-useless-backreference</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-catch">no-useless-catch</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-computed-key">no-useless-computed-key</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-concat">no-useless-concat</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-constructor">no-useless-constructor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-escape">no-useless-escape</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-rename">no-useless-rename</a></summary><br/>

```js
[
  "error",
  { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-useless-return">no-useless-return</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-var">no-var</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-void">no-void</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/no-with">no-with</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/object-shorthand">object-shorthand</a></summary><br/>

```js
["error", "always", { avoidQuotes: true, ignoreConstructors: false }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/one-var">one-var</a></summary><br/>

```js
["error", "never"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/operator-assignment">operator-assignment</a></summary><br/>

```js
["error", "always"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-arrow-callback">prefer-arrow-callback</a></summary><br/>

```js
["error", { allowNamedFunctions: false, allowUnboundThis: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-const">prefer-const</a></summary><br/>

```js
["error", { destructuring: "any", ignoreReadBeforeAssign: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-destructuring">prefer-destructuring</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-exponentiation-operator">prefer-exponentiation-operator</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-numeric-literals">prefer-numeric-literals</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-object-spread">prefer-object-spread</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-promise-reject-errors">prefer-promise-reject-errors</a></summary><br/>

```js
["error", { allowEmptyReject: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-regex-literals">prefer-regex-literals</a></summary><br/>

```js
["error", { disallowRedundantWrapping: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-rest-params">prefer-rest-params</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-spread">prefer-spread</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/prefer-template">prefer-template</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/radix">radix</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/require-yield">require-yield</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">simple-import-sort/exports</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">simple-import-sort/imports</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/spaced-comment">spaced-comment</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/strict">strict</a></summary><br/>

```js
["error", "never"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/symbol-description">symbol-description</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/use-isnan">use-isnan</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/valid-typeof">valid-typeof</a></summary><br/>

```js
["error", { requireStringLiterals: true }];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/vars-on-top">vars-on-top</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://eslint.org/docs/rules/yoda">yoda</a></summary><br/>

```js
["error"];
```

</details>
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

<details><summary>🔵 <a href="https://eslint.org/docs/rules/constructor-super">constructor-super</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/getter-return">getter-return</a></summary><br/>

```js
["off", { allowImplicit: true }];
```

</details>
<details><summary>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md">import/named</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md">import/no-named-as-default-member</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md">import/no-unresolved</a></summary><br/>

```js
["off", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-const-assign">no-const-assign</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-dupe-args">no-dupe-args</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-dupe-keys">no-dupe-keys</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-func-assign">no-func-assign</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-import-assign">no-import-assign</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-new-symbol">no-new-symbol</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-obj-calls">no-obj-calls</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-setter-return">no-setter-return</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-this-before-super">no-this-before-super</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-undef">no-undef</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-unreachable">no-unreachable</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-unsafe-negation">no-unsafe-negation</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/valid-typeof">valid-typeof</a></summary><br/>

```js
["off", { requireStringLiterals: true }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/camelcase">camelcase</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md">@typescript-eslint/naming-convention</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md">@typescript-eslint/consistent-type-exports</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md">@typescript-eslint/consistent-type-imports</a></summary><br/>

```js
["error", { prefer: "type-imports" }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/default-param-last">default-param-last</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md">@typescript-eslint/default-param-last</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/dot-notation">dot-notation</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md">@typescript-eslint/dot-notation</a></summary><br/>

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

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/lines-between-class-members">lines-between-class-members</a></summary><br/>

```js
["off", "always", { exceptAfterSingleLine: false }];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md">@typescript-eslint/lines-between-class-members</a></summary><br/>

```js
["error", "always", { exceptAfterSingleLine: false }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-array-constructor">no-array-constructor</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md">@typescript-eslint/no-array-constructor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-dupe-class-members">no-dupe-class-members</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md">@typescript-eslint/no-dupe-class-members</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-empty-function">no-empty-function</a></summary><br/>

```js
["off", { allow: ["arrowFunctions", "functions", "methods"] }];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md">@typescript-eslint/no-empty-function</a></summary><br/>

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-implied-eval">no-implied-eval</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-new-func">no-new-func</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md">@typescript-eslint/no-implied-eval</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-loss-of-precision">no-loss-of-precision</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md">@typescript-eslint/no-loss-of-precision</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-loop-func">no-loop-func</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md">@typescript-eslint/no-loop-func</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-redeclare">no-redeclare</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md">@typescript-eslint/no-redeclare</a></summary><br/>

```js
["error", { ignoreDeclarationMerge: true }];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-shadow">no-shadow</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md">@typescript-eslint/no-shadow</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-throw-literal">no-throw-literal</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md">@typescript-eslint/no-throw-literal</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-unused-expressions">no-unused-expressions</a></summary><br/>

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

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md">@typescript-eslint/no-unused-expressions</a></summary><br/>

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

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-unused-vars">no-unused-vars</a></summary><br/>

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

</details>
<details><summary>🟠 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md">@typescript-eslint/no-unused-vars</a></summary><br/>

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

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-useless-constructor">no-useless-constructor</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md">@typescript-eslint/no-useless-constructor</a></summary><br/>

```js
["error"];
```

</details>
<details><summary>🔵 <a href="https://eslint.org/docs/rules/no-return-await">no-return-await</a></summary><br/>

```js
["off"];
```

</details>
<details><summary>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md">@typescript-eslint/return-await</a></summary><br/>

```js
["error", "in-try-catch"];
```

</details>
<details><summary>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md">import/no-extraneous-dependencies</a></summary><br/>

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

</details>
<!-- END rules-ts -->
