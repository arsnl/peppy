<div align="center"><img src="../media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>
<h2 align="center">

`peppy` rules

</h2>

Here is the list of rules applied in the `peppy` configuration.

These rules are applied to all files. However, TypeScript specific rules override some of these rules for TypeScript files.

The list of these rules is available in the [TypeScript](#typescript) section of this file.

<!-- START rules -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 178   | 173      | 5          | 0           |

</div>

<h4>🔴 <a href="https://eslint.org/docs/rules/array-callback-return">array-callback-return</a></h4>

```json
[{ "allowImplicit": true, "checkForEach": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/arrow-body-style">arrow-body-style</a></h4>

```json
["as-needed", { "requireReturnForObjectLiteral": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/block-scoped-var">block-scoped-var</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/camelcase">camelcase</a></h4>

```json
[
  {
    "ignoreDestructuring": false,
    "ignoreGlobals": false,
    "ignoreImports": false,
    "properties": "never"
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/class-methods-use-this">class-methods-use-this</a></h4>

```json
[{ "enforceForClassFields": true, "exceptMethods": [] }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/curly">curly</a></h4>

```json
["all"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/consistent-return">consistent-return</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/constructor-super">constructor-super</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/default-case">default-case</a></h4>

```json
[{ "commentPattern": "^no default$" }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/default-case-last">default-case-last</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/default-param-last">default-param-last</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/dot-notation">dot-notation</a></h4>

```json
[
  {
    "allowKeywords": true,
    "allowPattern": "",
    "allowPrivateClassPropertyAccess": false,
    "allowProtectedClassPropertyAccess": false,
    "allowIndexSignaturePropertyAccess": false
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/eqeqeq">eqeqeq</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/for-direction">for-direction</a></h4>
<h4>🟠 <a href="https://eslint.org/docs/rules/func-names">func-names</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/getter-return">getter-return</a></h4>

```json
[{ "allowImplicit": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/global-require">global-require</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/grouped-accessor-pairs">grouped-accessor-pairs</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/guard-for-in">guard-for-in</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md">import/export</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md">import/extensions</a></h4>

```json
[
  "ignorePackages",
  { "js": "never", "jsx": "never", "cjs": "never", "mjs": "never" }
]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md">import/first</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md">import/named</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md">import/newline-after-import</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md">import/no-absolute-path</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md">import/no-amd</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md">import/no-cycle</a></h4>

```json
[
  {
    "ignoreExternal": false,
    "maxDepth": "∞",
    "allowUnsafeDynamicCyclicDependency": false
  }
]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md">import/no-duplicates</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md">import/no-dynamic-require</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md">import/no-extraneous-dependencies</a></h4>

```json
[
  {
    "devDependencies": [
      "test/**",
      "tests/**",
      "spec/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "test.{js,jsx,cjs,mjs}",
      "test-*.{js,jsx,cjs,mjs}",
      "**/*{.,_}{test,spec}.{js,jsx,cjs,mjs}",
      "**/.eslintrc.{js,cjs,mjs}",
      "**/astro.config.{js,cjs,mjs}",
      "**/babel.config.{js,cjs,mjs}",
      "**/contentlayer.config.{js,cjs,mjs}",
      "**/gatsby-config.{js,cjs,mjs}",
      "**/Gruntfile{,.js,.cjs,.mjs}",
      "**/gulpfile.{js,cjs,mjs}",
      "**/gulpfile.*.{js,cjs,mjs}",
      "**/jest.config.{js,cjs,mjs}",
      "**/jest.setup.{js,cjs,mjs}",
      "**/karma.conf.{js,cjs,mjs}",
      "**/next-sitemap.config.{js,cjs,mjs}",
      "**/next.config.{js,cjs,mjs}",
      "**/postcss.config.{js,cjs,mjs}",
      "**/prettierrc.{js,cjs,mjs}",
      "**/protractor.conf.{js,cjs,mjs}",
      "**/protractor.conf.*.{js,cjs,mjs}",
      "**/remix.config.{js,cjs,mjs}",
      "**/rollup.config.{js,cjs,mjs}",
      "**/rollup.config.*.{js,cjs,mjs}",
      "**/tailwind.config.{js,cjs,mjs}",
      "**/vue.config.{js,cjs,mjs}",
      "**/webpack.config.{js,cjs,mjs}",
      "**/webpack.config.*.{js,cjs,mjs}"
    ],
    "optionalDependencies": false
  }
]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md">import/no-import-module-exports</a></h4>

```json
[{ "exceptions": [] }]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md">import/no-mutable-exports</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md">import/no-named-as-default</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md">import/no-named-as-default-member</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md">import/no-named-default</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md">import/no-relative-packages</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md">import/no-self-import</a></h4>
<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md">import/no-unresolved</a></h4>

```json
[{ "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md">import/no-useless-path-segments</a></h4>

```json
[{ "commonjs": true }]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md">import/no-webpack-loader-syntax</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/lines-around-directive">lines-around-directive</a></h4>

```json
[{ "after": "always", "before": "always" }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/lines-between-class-members">lines-between-class-members</a></h4>

```json
["always", { "exceptAfterSingleLine": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/max-classes-per-file">max-classes-per-file</a></h4>

```json
[1]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/new-cap">new-cap</a></h4>

```json
[
  {
    "capIsNew": false,
    "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    "newIsCap": true,
    "newIsCapExceptions": [],
    "properties": true
  }
]
```

<h4>🟠 <a href="https://eslint.org/docs/rules/no-alert">no-alert</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-array-constructor">no-array-constructor</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-async-promise-executor">no-async-promise-executor</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-await-in-loop">no-await-in-loop</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-bitwise">no-bitwise</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-buffer-constructor">no-buffer-constructor</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-caller">no-caller</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-case-declarations">no-case-declarations</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-class-assign">no-class-assign</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-compare-neg-zero">no-compare-neg-zero</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-cond-assign">no-cond-assign</a></h4>

```json
["except-parens"]
```

<h4>🟠 <a href="https://eslint.org/docs/rules/no-console">no-console</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-const-assign">no-const-assign</a></h4>
<h4>🟠 <a href="https://eslint.org/docs/rules/no-constant-condition">no-constant-condition</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-constructor-return">no-constructor-return</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-continue">no-continue</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-control-regex">no-control-regex</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-debugger">no-debugger</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-delete-var">no-delete-var</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-dupe-args">no-dupe-args</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-dupe-class-members">no-dupe-class-members</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-dupe-else-if">no-dupe-else-if</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-dupe-keys">no-dupe-keys</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-duplicate-case">no-duplicate-case</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-else-return">no-else-return</a></h4>

```json
[{ "allowElseIf": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-empty">no-empty</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-empty-character-class">no-empty-character-class</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-empty-function">no-empty-function</a></h4>

```json
[{ "allow": ["arrowFunctions", "functions", "methods"] }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-empty-pattern">no-empty-pattern</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-eval">no-eval</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-ex-assign">no-ex-assign</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-extend-native">no-extend-native</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-extra-bind">no-extra-bind</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-extra-boolean-cast">no-extra-boolean-cast</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-extra-label">no-extra-label</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-fallthrough">no-fallthrough</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-func-assign">no-func-assign</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-global-assign">no-global-assign</a></h4>

```json
[{ "exceptions": [] }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-implied-eval">no-implied-eval</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-import-assign">no-import-assign</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-inner-declarations">no-inner-declarations</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-invalid-regexp">no-invalid-regexp</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-irregular-whitespace">no-irregular-whitespace</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-iterator">no-iterator</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-label-var">no-label-var</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-labels">no-labels</a></h4>

```json
[{ "allowLoop": false, "allowSwitch": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-lone-blocks">no-lone-blocks</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-lonely-if">no-lonely-if</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-loop-func">no-loop-func</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-loss-of-precision">no-loss-of-precision</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-misleading-character-class">no-misleading-character-class</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-multi-assign">no-multi-assign</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-multi-str">no-multi-str</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new">no-new</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new-func">no-new-func</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new-object">no-new-object</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new-require">no-new-require</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new-symbol">no-new-symbol</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-new-wrappers">no-new-wrappers</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-nonoctal-decimal-escape">no-nonoctal-decimal-escape</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-obj-calls">no-obj-calls</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-octal">no-octal</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-octal-escape">no-octal-escape</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-param-reassign">no-param-reassign</a></h4>

```json
[
  {
    "ignorePropertyModificationsFor": [
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
      "staticContext"
    ],
    "props": true
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-path-concat">no-path-concat</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-plusplus">no-plusplus</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-promise-executor-return">no-promise-executor-return</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-proto">no-proto</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-prototype-builtins">no-prototype-builtins</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-redeclare">no-redeclare</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-regex-spaces">no-regex-spaces</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-restricted-exports">no-restricted-exports</a></h4>

```json
[{ "restrictedNamedExports": ["default", "then"] }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-restricted-globals">no-restricted-globals</a></h4>

```json
[
  { "name": "isFinite", "message": "Use Number.isFinite instead." },
  { "name": "isNaN", "message": "Use Number.isNaN instead." },
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
  "top"
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-restricted-properties">no-restricted-properties</a></h4>

```json
[
  {
    "message": "arguments.callee is deprecated.",
    "object": "arguments",
    "property": "callee"
  },
  {
    "message": "Please use Number.isFinite instead.",
    "object": "global",
    "property": "isFinite"
  },
  {
    "message": "Please use Number.isFinite instead.",
    "object": "self",
    "property": "isFinite"
  },
  {
    "message": "Please use Number.isFinite instead.",
    "object": "window",
    "property": "isFinite"
  },
  {
    "message": "Please use Number.isNaN instead.",
    "object": "global",
    "property": "isNaN"
  },
  {
    "message": "Please use Number.isNaN instead.",
    "object": "self",
    "property": "isNaN"
  },
  {
    "message": "Please use Number.isNaN instead.",
    "object": "window",
    "property": "isNaN"
  },
  {
    "message": "Please use Object.defineProperty instead.",
    "property": "__defineGetter__"
  },
  {
    "message": "Please use Object.defineProperty instead.",
    "property": "__defineSetter__"
  },
  {
    "message": "Use the exponentiation operator (**) instead.",
    "object": "Math",
    "property": "pow"
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-restricted-syntax">no-restricted-syntax</a></h4>

```json
[
  {
    "selector": "ForInStatement",
    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
  },
  {
    "selector": "ForOfStatement",
    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
  },
  {
    "selector": "LabeledStatement",
    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
  },
  {
    "selector": "WithStatement",
    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-return-assign">no-return-assign</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-return-await">no-return-await</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-script-url">no-script-url</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-self-assign">no-self-assign</a></h4>

```json
[{ "props": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-self-compare">no-self-compare</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-sequences">no-sequences</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-setter-return">no-setter-return</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-shadow">no-shadow</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-shadow-restricted-names">no-shadow-restricted-names</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-sparse-arrays">no-sparse-arrays</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-template-curly-in-string">no-template-curly-in-string</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-this-before-super">no-this-before-super</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-throw-literal">no-throw-literal</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-undef">no-undef</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-undef-init">no-undef-init</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-unneeded-ternary">no-unneeded-ternary</a></h4>

```json
[{ "defaultAssignment": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-unreachable">no-unreachable</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-unreachable-loop">no-unreachable-loop</a></h4>

```json
[{ "ignore": [] }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-finally">no-unsafe-finally</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-negation">no-unsafe-negation</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-unsafe-optional-chaining">no-unsafe-optional-chaining</a></h4>

```json
[{ "disallowArithmeticOperators": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-unused-expressions">no-unused-expressions</a></h4>

```json
[
  {
    "allowShortCircuit": true,
    "allowTaggedTemplates": true,
    "allowTernary": true,
    "enforceForJSX": false
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-unused-labels">no-unused-labels</a></h4>
<h4>🟠 <a href="https://eslint.org/docs/rules/no-unused-vars">no-unused-vars</a></h4>

```json
[
  {
    "args": "after-used",
    "argsIgnorePattern": "^_",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-backreference">no-useless-backreference</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-catch">no-useless-catch</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-computed-key">no-useless-computed-key</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-concat">no-useless-concat</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-constructor">no-useless-constructor</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-escape">no-useless-escape</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-rename">no-useless-rename</a></h4>

```json
[{ "ignoreDestructuring": false, "ignoreExport": false, "ignoreImport": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/no-useless-return">no-useless-return</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-var">no-var</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/no-with">no-with</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/object-shorthand">object-shorthand</a></h4>

```json
["always", { "avoidQuotes": true, "ignoreConstructors": false }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/one-var">one-var</a></h4>

```json
["never"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/operator-assignment">operator-assignment</a></h4>

```json
["always"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-arrow-callback">prefer-arrow-callback</a></h4>

```json
[{ "allowNamedFunctions": false, "allowUnboundThis": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-const">prefer-const</a></h4>

```json
[{ "destructuring": "any", "ignoreReadBeforeAssign": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-destructuring">prefer-destructuring</a></h4>

```json
[
  {
    "AssignmentExpression": { "array": true, "object": false },
    "VariableDeclarator": { "array": false, "object": true }
  },
  { "enforceForRenamedProperties": false }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-exponentiation-operator">prefer-exponentiation-operator</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-numeric-literals">prefer-numeric-literals</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-object-spread">prefer-object-spread</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-promise-reject-errors">prefer-promise-reject-errors</a></h4>

```json
[{ "allowEmptyReject": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-regex-literals">prefer-regex-literals</a></h4>

```json
[{ "disallowRedundantWrapping": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-rest-params">prefer-rest-params</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-spread">prefer-spread</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/prefer-template">prefer-template</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/radix">radix</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/require-yield">require-yield</a></h4>
<h4>🔴 <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">simple-import-sort/exports</a></h4>
<h4>🔴 <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">simple-import-sort/imports</a></h4>

```json
[
  {
    "groups": [
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
        "^\\..*(.(css|scss|sass|less))$"
      ]
    ]
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/spaced-comment">spaced-comment</a></h4>

```json
[
  "always",
  {
    "block": {
      "balanced": true,
      "exceptions": ["-", "+"],
      "markers": ["=", "!", ":", "::"]
    },
    "line": { "exceptions": ["-", "+"], "markers": ["=", "!", "/"] }
  }
]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/strict">strict</a></h4>

```json
["never"]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/symbol-description">symbol-description</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/use-isnan">use-isnan</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/valid-typeof">valid-typeof</a></h4>

```json
[{ "requireStringLiterals": true }]
```

<h4>🔴 <a href="https://eslint.org/docs/rules/vars-on-top">vars-on-top</a></h4>
<h4>🔴 <a href="https://eslint.org/docs/rules/yoda">yoda</a></h4>
<!-- END rules -->

## TypeScript

Here are the rules that override the basic rules when applied to a TypeScript file.

These rules are only applied on `.ts` and `.tsx` files

<!-- START rules-ts -->
<div align="center">

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 56    | 19       | 1          | 36          |

</div>

<h4>🔵 <a href="https://eslint.org/docs/rules/constructor-super">constructor-super</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/getter-return">getter-return</a></h4>

```json
[{ "allowImplicit": true }]
```

<h4>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md">import/named</a></h4>
<h4>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md">import/no-named-as-default-member</a></h4>
<h4>🔵 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md">import/no-unresolved</a></h4>

```json
[{ "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-const-assign">no-const-assign</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-dupe-args">no-dupe-args</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-dupe-keys">no-dupe-keys</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-func-assign">no-func-assign</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-import-assign">no-import-assign</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-new-symbol">no-new-symbol</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-obj-calls">no-obj-calls</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-setter-return">no-setter-return</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-this-before-super">no-this-before-super</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-undef">no-undef</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-unreachable">no-unreachable</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-unsafe-negation">no-unsafe-negation</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/valid-typeof">valid-typeof</a></h4>

```json
[{ "requireStringLiterals": true }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/camelcase">camelcase</a></h4>

```json
[
  {
    "ignoreDestructuring": false,
    "ignoreGlobals": false,
    "ignoreImports": false,
    "properties": "never"
  }
]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md">@typescript-eslint/naming-convention</a></h4>

```json
[
  {
    "selector": "variable",
    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow"
  },
  {
    "selector": "function",
    "format": ["camelCase", "PascalCase"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow"
  },
  {
    "selector": "typeLike",
    "format": ["PascalCase", "UPPER_CASE"],
    "leadingUnderscore": "allow",
    "trailingUnderscore": "allow"
  }
]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md">@typescript-eslint/consistent-type-exports</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md">@typescript-eslint/consistent-type-imports</a></h4>

```json
[{ "prefer": "type-imports" }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/default-param-last">default-param-last</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md">@typescript-eslint/default-param-last</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/dot-notation">dot-notation</a></h4>

```json
[
  {
    "allowKeywords": true,
    "allowPattern": "",
    "allowPrivateClassPropertyAccess": false,
    "allowProtectedClassPropertyAccess": false,
    "allowIndexSignaturePropertyAccess": false
  }
]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md">@typescript-eslint/dot-notation</a></h4>

```json
[
  {
    "allowKeywords": true,
    "allowPattern": "",
    "allowPrivateClassPropertyAccess": false,
    "allowProtectedClassPropertyAccess": false,
    "allowIndexSignaturePropertyAccess": false
  }
]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/lines-between-class-members">lines-between-class-members</a></h4>

```json
["always", { "exceptAfterSingleLine": false }]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md">@typescript-eslint/lines-between-class-members</a></h4>

```json
["always", { "exceptAfterSingleLine": false }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-array-constructor">no-array-constructor</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md">@typescript-eslint/no-array-constructor</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-dupe-class-members">no-dupe-class-members</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md">@typescript-eslint/no-dupe-class-members</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-empty-function">no-empty-function</a></h4>

```json
[{ "allow": ["arrowFunctions", "functions", "methods"] }]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md">@typescript-eslint/no-empty-function</a></h4>

```json
[{ "allow": ["arrowFunctions", "functions", "methods"] }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-implied-eval">no-implied-eval</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-new-func">no-new-func</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md">@typescript-eslint/no-implied-eval</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-loss-of-precision">no-loss-of-precision</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md">@typescript-eslint/no-loss-of-precision</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-loop-func">no-loop-func</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md">@typescript-eslint/no-loop-func</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-redeclare">no-redeclare</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md">@typescript-eslint/no-redeclare</a></h4>

```json
[{ "ignoreDeclarationMerge": true }]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-shadow">no-shadow</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md">@typescript-eslint/no-shadow</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-throw-literal">no-throw-literal</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md">@typescript-eslint/no-throw-literal</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-unused-expressions">no-unused-expressions</a></h4>

```json
[
  {
    "allowShortCircuit": true,
    "allowTaggedTemplates": true,
    "allowTernary": true,
    "enforceForJSX": false
  }
]
```

<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md">@typescript-eslint/no-unused-expressions</a></h4>

```json
[
  {
    "allowShortCircuit": true,
    "allowTaggedTemplates": true,
    "allowTernary": true,
    "enforceForJSX": false
  }
]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-unused-vars">no-unused-vars</a></h4>

```json
[
  {
    "args": "after-used",
    "argsIgnorePattern": "^_",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]
```

<h4>🟠 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md">@typescript-eslint/no-unused-vars</a></h4>

```json
[
  {
    "args": "after-used",
    "argsIgnorePattern": "^_",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]
```

<h4>🔵 <a href="https://eslint.org/docs/rules/no-useless-constructor">no-useless-constructor</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md">@typescript-eslint/no-useless-constructor</a></h4>
<h4>🔵 <a href="https://eslint.org/docs/rules/no-return-await">no-return-await</a></h4>
<h4>🔴 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md">@typescript-eslint/return-await</a></h4>

```json
["in-try-catch"]
```

<h4>🔴 <a href="https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md">import/no-extraneous-dependencies</a></h4>

```json
[
  {
    "devDependencies": [
      "test/**",
      "tests/**",
      "spec/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "test.{js,jsx,cjs,mjs}",
      "test.{ts,tsx,cts,mts}",
      "test-*.{js,jsx,cjs,mjs}",
      "test-*.{ts,tsx,cts,mts}",
      "**/*{.,_}{test,spec}.{js,jsx,cjs,mjs}",
      "**/*{.,_}{test,spec}.{ts,tsx,cts,mts}",
      "**/.eslintrc.{js,cjs,mjs}",
      "**/.eslintrc.{ts,cts,mts}",
      "**/astro.config.{js,cjs,mjs}",
      "**/astro.config.{ts,cts,mts}",
      "**/babel.config.{js,cjs,mjs}",
      "**/babel.config.{ts,cts,mts}",
      "**/contentlayer.config.{js,cjs,mjs}",
      "**/contentlayer.config.{ts,cts,mts}",
      "**/gatsby-config.{js,cjs,mjs}",
      "**/gatsby-config.{ts,cts,mts}",
      "**/Gruntfile{,.js,.cjs,.mjs}",
      "**/Gruntfile{,.ts,.cts,.mts}",
      "**/gulpfile.{js,cjs,mjs}",
      "**/gulpfile.{ts,cts,mts}",
      "**/gulpfile.*.{js,cjs,mjs}",
      "**/gulpfile.*.{ts,cts,mts}",
      "**/jest.config.{js,cjs,mjs}",
      "**/jest.config.{ts,cts,mts}",
      "**/jest.setup.{js,cjs,mjs}",
      "**/jest.setup.{ts,cts,mts}",
      "**/karma.conf.{js,cjs,mjs}",
      "**/karma.conf.{ts,cts,mts}",
      "**/next-sitemap.config.{js,cjs,mjs}",
      "**/next-sitemap.config.{ts,cts,mts}",
      "**/next.config.{js,cjs,mjs}",
      "**/next.config.{ts,cts,mts}",
      "**/postcss.config.{js,cjs,mjs}",
      "**/postcss.config.{ts,cts,mts}",
      "**/prettierrc.{js,cjs,mjs}",
      "**/prettierrc.{ts,cts,mts}",
      "**/protractor.conf.{js,cjs,mjs}",
      "**/protractor.conf.{ts,cts,mts}",
      "**/protractor.conf.*.{js,cjs,mjs}",
      "**/protractor.conf.*.{ts,cts,mts}",
      "**/remix.config.{js,cjs,mjs}",
      "**/remix.config.{ts,cts,mts}",
      "**/rollup.config.{js,cjs,mjs}",
      "**/rollup.config.{ts,cts,mts}",
      "**/rollup.config.*.{js,cjs,mjs}",
      "**/rollup.config.*.{ts,cts,mts}",
      "**/tailwind.config.{js,cjs,mjs}",
      "**/tailwind.config.{ts,cts,mts}",
      "**/vue.config.{js,cjs,mjs}",
      "**/vue.config.{ts,cts,mts}",
      "**/webpack.config.{js,cjs,mjs}",
      "**/webpack.config.{ts,cts,mts}",
      "**/webpack.config.*.{js,cjs,mjs}",
      "**/webpack.config.*.{ts,cts,mts}"
    ],
    "optionalDependencies": false
  }
]
```

<!-- END rules-ts -->
