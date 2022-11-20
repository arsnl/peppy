<div align="center"><img src="./media/readme-banner.png" width="600" role="presentation" /></div>
<h3 align="center">Brilliant ESLint configurations<br/> for happier developers</h3>

<p align="center">
    <a href="https://www.npmjs.org/package/eslint-config-peppy"><img src="https://img.shields.io/npm/v/eslint-config-peppy.svg" alt="npm version" /></a>
    <a href="https://github.com/arsnl/peppy/actions?query=workflow%3Atest+branch%main"><img src="https://github.com/arsnl/peppy/workflows/test/badge.svg?branch=main" alt="npm test workflow status" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
</p>

A brilliant collection of ESLint configurations that enforces strict, readable and modern code with developers happiness in mind.

## Highlights

- Play well with [Prettier](#prettier-support) and [TypeScript](#typescript-support).
- Batteries included configurations with a very small footprint.
- Saves you time, energy and make you happier!

## Quick Start

The easiest way to install Peppy is with the interactive install.

```
npx peppy install
```

## Manual Installation

If you want to install Peppy manually, follow these steps.

#### 1. Install dependencies:

```
npm install --save-dev eslint-config-peppy prettier eslint
```

#### 2. Set ESLint

If you don't already have one, create an ESLint configuration file (eg: `.eslintrc.js`) in the root of your project. Then, add configurations to the "extends" array in your ESLint configuration file.

```js
module.exports = {
  extends: ["peppy"],
};
```

> Depending of your project, you can add more [configurations](#peppy-eslint-configurations) to the "extends" array.

#### 3. Add scripts

Add those scripts to your package.json to lint, format and fix your project.

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --check --loglevel warn .",
  "fix": "prettier --write --loglevel warn . && npm run lint -- --fix"
},
```

Now you can manually lint your code by running `npm run lint`, check the format it with `npm run format` and fix all auto-fixable issues with `npm run fix`. You probably want your editor to do this though.

#### 4. Set VS Code

- Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VS Code extensions.

- At the root of your project, create a folder named `.vscode` and put a `settings.json` file inside of it then put the settings below inside of this file.

<!-- START snippet-vscode-settings -->

```json
{
  // Format a file on save.
  "editor.formatOnSave": true,
  // Defines a default formatter which takes precedence over all other formatter settings.
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Code action kinds to be run on save.
  "editor.codeActionsOnSave": {
    // Controls whether auto fix action should be run on file save.
    "source.fixAll": true
  },
  // Controls auto save of editors that have unsaved changes.
  //  - onFocusChange: An editor with changes is automatically saved when the editor loses focus.
  "files.autoSave": "onFocusChange",
  // Always show the ESlint status bar item.
  "eslint.alwaysShowStatus": true
}
```

<!-- END snippet-vscode-settings -->

- To help other developers working on your project to install the correct VS Code extensions, you can also add an `extensions.json` file inside of the `.vscode` folder and put the settings below inside of this file.

<!-- START snippet-vscode-extensions -->

```json
{
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
    // VS Code ESLint extension
    "dbaeumer.vscode-eslint",
    // Prettier Formatter for Visual Studio Code
    "esbenp.prettier-vscode"
  ]
}
```

<!-- END snippet-vscode-extensions -->

## Peppy ESLint configurations

The following ESLint configurations are part of Peppy:

| Configuration  | Description                                                                                                                                                                                                                                                                               | Extends rule sets     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| peppy          | <p>The Peppy code style.</p><p>Must always be put at first.</p></p>                                                                                                                                                                                                                       | peppy, prettier       |
| peppy/react    | <p>Additional configuration for projects that use [React](https://reactjs.org/).</p>                                                                                                                                                                                                      | react, prettier       |
| peppy/next     | <p>Additional configuration for projects that use [NextJS](https://nextjs.org/).</p><p>No need to add the peppy/react configuration since this configuration already extend the react rules set.</p>                                                                                      | react, next, prettier |
| peppy/jest     | <p>Additional configuration for projects that use [Jest](https://jestjs.io/).</p>                                                                                                                                                                                                         | jest, prettier        |
| peppy/prettier | <p>Turns off all rules that might conflict with [Prettier](https://prettier.io/).</p><p>To add at the end of your ESLint extends if you add another ESLint configuration not provided by Peppy and want to make sure you don't introduce rules conflicting with Prettier by doing so.</p> | prettier              |

## Rules sets

### Peppy

<!-- START base-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 179   | 174      | 5          | 0           |

<details id="details-base-rules">
<summary>Check the rules details</summary>

#### 🔴 [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```js
["error", { allowImplicit: true, checkForEach: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)

```js
["error", "as-needed", { requireReturnForObjectLiteral: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```js
["error", { enforceForClassFields: true, exceptMethods: [] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`curly`](https://eslint.org/docs/rules/curly)

```js
["error", "all"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`consistent-return`](https://eslint.org/docs/rules/consistent-return)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`default-case`](https://eslint.org/docs/rules/default-case)

```js
["error", { commentPattern: "^no default$" }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`default-case-last`](https://eslint.org/docs/rules/default-case-last)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)

```js
["error", "always"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`for-direction`](https://eslint.org/docs/rules/for-direction)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🟠 [`func-names`](https://eslint.org/docs/rules/func-names)

```js
["warn"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`getter-return`](https://eslint.org/docs/rules/getter-return)

```js
["error", { allowImplicit: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`global-require`](https://eslint.org/docs/rules/global-require)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

```js
["error", "ignorePackages", { js: "never", jsx: "never", mjs: "never" }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)

```js
["error", { ignoreExternal: false, maxDepth: "∞" }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-import-module-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)

```js
["error", { exceptions: [] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-relative-packages`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

```js
["error", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)

```js
["error", { commonjs: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)

```js
["error", { after: "always", before: "always" }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)

```js
["error", "always", { exceptAfterSingleLine: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)

```js
["error", 1];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🟠 [`no-alert`](https://eslint.org/docs/rules/no-alert)

```js
["warn"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-caller`](https://eslint.org/docs/rules/no-caller)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)

```js
["error", "except-parens"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🟠 [`no-console`](https://eslint.org/docs/rules/no-console)

```js
["warn"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🟠 [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)

```js
["warn"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-continue`](https://eslint.org/docs/rules/no-continue)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-debugger`](https://eslint.org/docs/rules/no-debugger)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```js
["error", { allowElseIf: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-empty`](https://eslint.org/docs/rules/no-empty)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-eval`](https://eslint.org/docs/rules/no-eval)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)

```js
["error", { exceptions: [] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-iterator`](https://eslint.org/docs/rules/no-iterator)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-label-var`](https://eslint.org/docs/rules/no-label-var)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-labels`](https://eslint.org/docs/rules/no-labels)

```js
["error", { allowLoop: false, allowSwitch: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new`](https://eslint.org/docs/rules/no-new)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new-object`](https://eslint.org/docs/rules/no-new-object)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new-require`](https://eslint.org/docs/rules/no-new-require)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-octal`](https://eslint.org/docs/rules/no-octal)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-promise-executor-return`](https://eslint.org/docs/rules/no-promise-executor-return)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-proto`](https://eslint.org/docs/rules/no-proto)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-restricted-exports`](https://eslint.org/docs/rules/no-restricted-exports)

```js
["error", { restrictedNamedExports: ["default", "then"] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)

```js
["error", "always"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-return-await`](https://eslint.org/docs/rules/no-return-await)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-script-url`](https://eslint.org/docs/rules/no-script-url)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)

```js
["error", { props: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-sequences`](https://eslint.org/docs/rules/no-sequences)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-shadow`](https://eslint.org/docs/rules/no-shadow)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-undef`](https://eslint.org/docs/rules/no-undef)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)

```js
["error", { defaultAssignment: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unreachable-loop`](https://eslint.org/docs/rules/no-unreachable-loop)

```js
["error", { ignore: [] }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining)

```js
["error", { disallowArithmeticOperators: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-catch`](https://eslint.org/docs/rules/no-useless-catch)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)

```js
[
  "error",
  { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-var`](https://eslint.org/docs/rules/no-var)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-void`](https://eslint.org/docs/rules/no-void)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`no-with`](https://eslint.org/docs/rules/no-with)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)

```js
["error", "always", { avoidQuotes: true, ignoreConstructors: false }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`one-var`](https://eslint.org/docs/rules/one-var)

```js
["error", "never"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)

```js
["error", "always"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)

```js
["error", { allowNamedFunctions: false, allowUnboundThis: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```js
["error", { destructuring: "any", ignoreReadBeforeAssign: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)

```js
["error", { allowEmptyReject: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-regex-literals`](https://eslint.org/docs/rules/prefer-regex-literals)

```js
["error", { disallowRedundantWrapping: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`prefer-template`](https://eslint.org/docs/rules/prefer-template)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`radix`](https://eslint.org/docs/rules/radix)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`require-yield`](https://eslint.org/docs/rules/require-yield)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`simple-import-sort/exports`](https://github.com/lydell/eslint-plugin-simple-import-sort)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`strict`](https://eslint.org/docs/rules/strict)

```js
["error", "never"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`symbol-description`](https://eslint.org/docs/rules/symbol-description)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`use-isnan`](https://eslint.org/docs/rules/use-isnan)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)

```js
["error", { requireStringLiterals: true }];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

#### 🔴 [`yoda`](https://eslint.org/docs/rules/yoda)

```js
["error"];
```

<div align="right"><a href="#details-base-rules">⬆️</a></div>

</details>
<!-- END base-rules -->

### Peppy with TypeScript

<!-- START base-typescript-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 56    | 19       | 1          | 36          |

<details id="details-base-typescript-rules">
<summary>Check the rules details</summary>

#### 🔵 [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`getter-return`](https://eslint.org/docs/rules/getter-return)

```js
["off", { allowImplicit: true }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

```js
["off", { caseSensitive: true, caseSensitiveStrict: false, commonjs: true }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-undef`](https://eslint.org/docs/rules/no-undef)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)

```js
["off", { requireStringLiterals: true }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/consistent-type-exports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/consistent-type-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md)

```js
["error", { prefer: "type-imports" }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/default-param-last`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)

```js
["off", "always", { exceptAfterSingleLine: false }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/lines-between-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)

```js
["error", "always", { exceptAfterSingleLine: false }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-array-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-dupe-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)

```js
["off", { allow: ["arrowFunctions", "functions", "methods"] }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-empty-function`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)

```js
["error", { allow: ["arrowFunctions", "functions", "methods"] }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-implied-eval`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-loss-of-precision`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-loop-func`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-redeclare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)

```js
["error", { ignoreDeclarationMerge: true }];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-shadow`](https://eslint.org/docs/rules/no-shadow)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-shadow`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-throw-literal`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/no-useless-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)

```js
["error"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔵 [`no-return-await`](https://eslint.org/docs/rules/no-return-await)

```js
["off"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

#### 🔴 [`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)

```js
["error", "in-try-catch"];
```

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

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

<div align="right"><a href="#details-base-typescript-rules">⬆️</a></div>

</details>
<!-- END base-typescript-rules -->

### React

<!-- START react-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 117   | 87       | 5          | 25          |

<details id="details-react-rules">
<summary>Check the rules details</summary>

#### 🔴 [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```js
[
  "error",
  {
    enforceForClassFields: true,
    exceptMethods: [
      "render",
      "getInitialState",
      "getDefaultProps",
      "getChildContext",
      "componentWillMount",
      "UNSAFE_componentWillMount",
      "componentDidMount",
      "componentWillReceiveProps",
      "UNSAFE_componentWillReceiveProps",
      "shouldComponentUpdate",
      "componentWillUpdate",
      "UNSAFE_componentWillUpdate",
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidCatch",
      "getSnapshotBeforeUpdate",
    ],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```js
[
  "error",
  {
    area: [],
    elements: ["img", "object", "area", 'input[type="image"]'],
    img: [],
    'input[type="image"]': [],
    object: [],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)

```js
["error", { components: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

```js
[
  "error",
  {
    aspects: ["noHref", "invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["to"],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

```js
["error", { ignoreNonDOM: false }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`jsx-a11y/autocomplete-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md)

```js
["off", { inputComponents: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/control-has-associated-label`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md)

```js
[
  "error",
  {
    controlComponents: [],
    depth: 5,
    ignoreElements: [
      "audio",
      "canvas",
      "embed",
      "input",
      "textarea",
      "tr",
      "video",
    ],
    ignoreRoles: [
      "grid",
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "row",
      "tablist",
      "toolbar",
      "tree",
      "treegrid",
    ],
    labelAttributes: ["label"],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)

```js
["error", { components: [""] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/label-has-associated-control`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)

```js
[
  "error",
  {
    assert: "both",
    controlComponents: [],
    depth: 25,
    labelAttributes: [],
    labelComponents: [],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)

```js
[
  "off",
  {
    allowChildren: false,
    components: [],
    required: { every: ["nesting", "id"] },
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md)

```js
["error", { audio: [], track: [], video: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)

```js
["error", { ignoreNonDOM: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)

```js
["error", { elements: ["marquee", "blink"] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md)

```js
["error", { tr: ["none", "presentation"] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)

```js
[
  "error",
  {
    handlers: [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)

```js
[
  "error",
  {
    li: ["menuitem", "option", "row", "tab", "treeitem"],
    ol: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
    table: ["grid"],
    td: ["gridcell"],
    ul: [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid",
    ],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)

```js
["error", { roles: ["tabpanel"], tags: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)

```js
[
  "error",
  {
    handlers: [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp",
    ],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react-hooks/exhaustive-deps`](https://reactjs.org/docs/hooks-rules.html)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react-hooks/rules-of-hooks`](https://reactjs.org/docs/hooks-rules.html)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)

```js
[
  "off",
  {
    message: "",
    propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
    rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)

```js
["error", { button: true, reset: false, submit: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)

```js
["error", { allowRequiredDefaults: false }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

```js
["error", "always"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)

```js
["off", { ignoreTranspilerName: false }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)

```js
["off", { forbid: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)

```js
["off", { forbid: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)

```js
["off", { forbid: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🟠 [`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)

```js
["warn", { allowInPropTypes: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

```js
[
  "error",
  {
    checkChildContextTypes: true,
    checkContextTypes: true,
    forbid: ["any", "array", "object"],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/function-component-definition`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)

```js
[
  "error",
  { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```js
["error", "never", { always: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)

```js
["error", { children: "never", props: "never" }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

```js
["error", { extensions: [".jsx", ".tsx"] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-fragments`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)

```js
["error", "syntax"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

```js
["off", { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

```js
[
  "error",
  {
    allowArrowFunctions: true,
    allowBind: false,
    allowFunctions: false,
    ignoreDOMComponents: true,
    ignoreRefs: true,
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-constructed-context-values`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

```js
["error", { ignoreCase: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)

```js
["off", { noStrings: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-script-url`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)

```js
["error", [{ name: "Link", props: ["to"] }]];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

```js
["error", { enforceDynamicLinks: "always", forms: false, links: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-no-useless-fragment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```js
["error", { allowAllCaps: true, ignore: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md)

```js
["off", { ignoreCase: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)

```js
[
  "off",
  {
    callbacksLast: false,
    ignoreCase: true,
    noSortAlphabetically: false,
    reservedFirst: true,
    shorthandFirst: false,
    shorthandLast: false,
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-adjacent-inline-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-arrow-function-lifecycle`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🟠 [`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)

```js
["warn"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-invalid-html-attribute`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-namespace`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

```js
["error", { ignore: ["css"] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-unstable-nested-components`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🟠 [`react/no-unused-class-component-methods`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)

```js
["warn"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🟠 [`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)

```js
["warn", { customValidators: [], skipShapeProps: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🟠 [`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)

```js
["warn"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

```js
["error", "always"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/prefer-exact-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/prefer-read-only-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md)

```js
["off"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

```js
["error", { ignorePureComponents: true }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

```js
["error", { customValidators: [], ignore: [], skipUndeclared: false }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md)

```js
["off", { allowDecorators: [] }];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

```js
[
  "error",
  {
    groups: {
      lifecycle: [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "getInitialState",
        "state",
        "getChildContext",
        "getDerivedStateFromProps",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "getSnapshotBeforeUpdate",
        "componentDidUpdate",
        "componentDidCatch",
        "componentWillUnmount",
      ],
      rendering: ["/^render.+$/", "render"],
    },
    order: [
      "static-variables",
      "static-methods",
      "instance-variables",
      "lifecycle",
      "/^handle.+$/",
      "/^on.+$/",
      "getters",
      "setters",
      "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
      "instance-methods",
      "everything-else",
      "rendering",
    ],
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔵 [`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)

```js
[
  "off",
  {
    callbacksLast: false,
    ignoreCase: true,
    requiredFirst: false,
    sortShapeProp: true,
  },
];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/state-in-constructor`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md)

```js
["error", "always"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/static-property-placement`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)

```js
["error", "property assignment"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

#### 🔴 [`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)

```js
["error"];
```

<div align="right"><a href="#details-react-rules">⬆️</a></div>

</details>
<!-- END react-rules -->

### React with TypeScript

<!-- START react-typescript-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 1     | 0        | 0          | 1           |

<details id="details-react-typescript-rules">
<summary>Check the rules details</summary>

#### 🔵 [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

```js
["off", { customValidators: [], ignore: [], skipUndeclared: false }];
```

<div align="right"><a href="#details-react-typescript-rules">⬆️</a></div>

</details>
<!-- END react-typescript-rules -->

### Next

<!-- START next-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 24    | 11       | 12         | 1           |

<details id="details-next-rules">
<summary>Check the rules details</summary>

#### 🔴 [`@next/next/no-html-link-for-pages`](https://nextjs.org/docs/messages/no-html-link-for-pages)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-sync-scripts`](https://nextjs.org/docs/messages/no-sync-scripts)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/google-font-display`](https://nextjs.org/docs/messages/google-font-display)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/google-font-preconnect`](https://nextjs.org/docs/messages/google-font-preconnect)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/next-script-for-ga`](https://nextjs.org/docs/messages/next-script-for-ga)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-before-interactive-script-outside-document`](https://nextjs.org/docs/messages/no-before-interactive-script-outside-document)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-css-tags`](https://nextjs.org/docs/messages/no-css-tags)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-head-element`](https://nextjs.org/docs/messages/no-head-element)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-img-element`](https://nextjs.org/docs/messages/no-img-element)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-page-custom-font`](https://nextjs.org/docs/messages/no-page-custom-font)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-styled-jsx-in-document`](https://nextjs.org/docs/messages/no-styled-jsx-in-document)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-title-in-document-head`](https://nextjs.org/docs/messages/no-title-in-document-head)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-typos`](https://nextjs.org/docs/messages/no-typos)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🟠 [`@next/next/no-unwanted-polyfillio`](https://nextjs.org/docs/messages/no-unwanted-polyfillio)

```js
["warn"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/inline-script-id`](https://nextjs.org/docs/messages/inline-script-id)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-assign-module-variable`](https://nextjs.org/docs/messages/no-assign-module-variable)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-document-import-in-page`](https://nextjs.org/docs/messages/no-document-import-in-page)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-duplicate-head`](https://nextjs.org/docs/messages/no-duplicate-head)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-head-import-in-document`](https://nextjs.org/docs/messages/no-head-import-in-document)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`@next/next/no-script-component-in-head`](https://nextjs.org/docs/messages/no-script-component-in-head)

```js
["error"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

```js
[
  "error",
  {
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
    aspects: ["invalidHref", "preferButton"],
  },
];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```js
[
  "error",
  {
    area: [],
    elements: ["img", "object", "area", 'input[type="image"]'],
    img: ["Image"],
    'input[type="image"]': [],
    object: [],
  },
];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔴 [`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

```js
["error", { ignore: ["css", "jsx", "global"] }];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

#### 🔵 [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

```js
["off"];
```

<div align="right"><a href="#details-next-rules">⬆️</a></div>

</details>
<!-- END next-rules -->

### Jest

<!-- START jest-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 22    | 18       | 4          | 0           |

<details id="details-jest-rules">
<summary>Check the rules details</summary>

#### 🟠 [`jest/no-alias-methods`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md)

```js
["warn"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/prefer-to-be`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/prefer-to-contain`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/prefer-to-have-length`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🟠 [`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)

```js
["warn"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🟠 [`jest/no-commented-out-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md)

```js
["warn"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-conditional-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-deprecated-functions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🟠 [`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md)

```js
["warn"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-done-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-export`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-interpolation-in-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-jasmine-globals`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-mocks-import`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-standalone-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/no-test-prefixes`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/valid-describe-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe-callback.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/valid-expect-in-promise`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

#### 🔴 [`jest/valid-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md)

```js
["error"];
```

<div align="right"><a href="#details-jest-rules">⬆️</a></div>

</details>
<!-- END jest-rules -->

### Prettier

<!-- START prettier-rules -->

| Total | Error 🔴 | Warning 🟠 | Disabled 🔵 |
| ----- | -------- | ---------- | ----------- |
| 171   | 0        | 0          | 171         |

<details id="details-prettier-rules">
<summary>Check the rules details</summary>

#### 🔵 [`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`max-len`](https://eslint.org/docs/rules/max-len)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-tabs`](https://eslint.org/docs/rules/no-tabs)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`quotes`](https://eslint.org/docs/rules/quotes)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/quotes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`babel/quotes`](https://github.com/babel/eslint-plugin-babel)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-self-closing`](https://eslint.vuejs.org/rules/html-self-closing)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/max-len`](https://eslint.vuejs.org/rules/max-len)

```js
[0];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`block-spacing`](https://eslint.org/docs/rules/block-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`brace-style`](https://eslint.org/docs/rules/brace-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`comma-style`](https://eslint.org/docs/rules/comma-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`dot-location`](https://eslint.org/docs/rules/dot-location)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`eol-last`](https://eslint.org/docs/rules/eol-last)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`function-call-argument-newline`](https://eslint.org/docs/rules/function-call-argument-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`generator-star`](https://eslint.org/docs/rules/generator-star)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`indent`](https://eslint.org/docs/rules/indent)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`key-spacing`](https://eslint.org/docs/rules/key-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`new-parens`](https://eslint.org/docs/rules/new-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-arrow-condition`](https://eslint.org/docs/rules/no-arrow-condition)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-comma-dangle`](https://eslint.org/docs/rules/no-comma-dangle)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-reserved-keys`](https://eslint.org/docs/rules/no-reserved-keys)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-space-before-semi`](https://eslint.org/docs/rules/no-space-before-semi)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-wrap-func`](https://eslint.org/docs/rules/no-wrap-func)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`quote-props`](https://eslint.org/docs/rules/quote-props)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`semi`](https://eslint.org/docs/rules/semi)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`semi-style`](https://eslint.org/docs/rules/semi-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-after-function-name`](https://eslint.org/docs/rules/space-after-function-name)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-after-keywords`](https://eslint.org/docs/rules/space-after-keywords)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-before-function-parentheses`](https://eslint.org/docs/rules/space-before-function-parentheses)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-before-keywords`](https://eslint.org/docs/rules/space-before-keywords)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-in-brackets`](https://eslint.org/docs/rules/space-in-brackets)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-return-throw-case`](https://eslint.org/docs/rules/space-return-throw-case)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`space-unary-word-ops`](https://eslint.org/docs/rules/space-unary-word-ops)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`wrap-regex`](https://eslint.org/docs/rules/wrap-regex)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@babel/object-curly-spacing`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@babel/semi`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/brace-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/comma-dangle`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/comma-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/func-call-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/indent`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/keyword-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/member-delimiter-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/no-extra-parens`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/no-extra-semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/object-curly-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/space-before-blocks`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-blocks.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/space-before-function-paren`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/space-infix-ops`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`@typescript-eslint/type-annotation-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`babel/object-curly-spacing`](https://github.com/babel/eslint-plugin-babel)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`babel/semi`](https://github.com/babel/eslint-plugin-babel)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/boolean-style`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-boolean-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/delimiter-dangle`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-delimiter-dangle)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/generic-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-generic-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/object-type-curly-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-curly-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/object-type-delimiter`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-delimiter)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/quotes`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-quotes)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/semi`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-semi)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/space-after-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-after-type-colon)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/space-before-generic-bracket`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-generic-bracket)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/space-before-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-type-colon)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`flowtype/union-intersection-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-union-intersection-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-curly-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`standard/array-bracket-even-spacing`](https://github.com/standard/eslint-plugin-standard)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`standard/computed-property-even-spacing`](https://github.com/standard/eslint-plugin-standard)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`standard/object-curly-even-spacing`](https://github.com/standard/eslint-plugin-standard)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`unicorn/empty-brace-spaces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`unicorn/no-nested-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/array-bracket-newline`](https://eslint.vuejs.org/rules/array-bracket-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/array-bracket-spacing`](https://eslint.vuejs.org/rules/array-bracket-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/arrow-spacing`](https://eslint.vuejs.org/rules/arrow-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/block-spacing`](https://eslint.vuejs.org/rules/block-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/block-tag-newline`](https://eslint.vuejs.org/rules/block-tag-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/brace-style`](https://eslint.vuejs.org/rules/brace-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/comma-dangle`](https://eslint.vuejs.org/rules/comma-dangle)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/comma-spacing`](https://eslint.vuejs.org/rules/comma-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/comma-style`](https://eslint.vuejs.org/rules/comma-style)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/dot-location`](https://eslint.vuejs.org/rules/dot-location)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/func-call-spacing`](https://eslint.vuejs.org/rules/func-call-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-closing-bracket-newline`](https://eslint.vuejs.org/rules/html-closing-bracket-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-closing-bracket-spacing`](https://eslint.vuejs.org/rules/html-closing-bracket-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-end-tags`](https://eslint.vuejs.org/rules/html-end-tags)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-indent`](https://eslint.vuejs.org/rules/html-indent)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/html-quotes`](https://eslint.vuejs.org/rules/html-quotes)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/key-spacing`](https://eslint.vuejs.org/rules/key-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/keyword-spacing`](https://eslint.vuejs.org/rules/keyword-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/max-attributes-per-line`](https://eslint.vuejs.org/rules/max-attributes-per-line)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/multiline-html-element-content-newline`](https://eslint.vuejs.org/rules/multiline-html-element-content-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/mustache-interpolation-spacing`](https://eslint.vuejs.org/rules/mustache-interpolation-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/no-extra-parens`](https://eslint.vuejs.org/rules/no-extra-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/no-multi-spaces`](https://eslint.vuejs.org/rules/no-multi-spaces)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/no-spaces-around-equal-signs-in-attribute`](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/object-curly-newline`](https://eslint.vuejs.org/rules/object-curly-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/object-curly-spacing`](https://eslint.vuejs.org/rules/object-curly-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/object-property-newline`](https://eslint.vuejs.org/rules/object-property-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/operator-linebreak`](https://eslint.vuejs.org/rules/operator-linebreak)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/quote-props`](https://eslint.vuejs.org/rules/quote-props)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/script-indent`](https://eslint.vuejs.org/rules/script-indent)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/singleline-html-element-content-newline`](https://eslint.vuejs.org/rules/singleline-html-element-content-newline)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/space-in-parens`](https://eslint.vuejs.org/rules/space-in-parens)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/space-infix-ops`](https://eslint.vuejs.org/rules/space-infix-ops)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/space-unary-ops`](https://eslint.vuejs.org/rules/space-unary-ops)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`vue/template-curly-spacing`](https://eslint.vuejs.org/rules/template-curly-spacing)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`indent-legacy`](https://eslint.org/docs/rules/indent-legacy)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`no-spaced-func`](https://eslint.org/docs/rules/no-spaced-func)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

#### 🔵 [`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)

```js
["off"];
```

<div align="right"><a href="#details-prettier-rules">⬆️</a></div>

</details>
<!-- END prettier-rules -->

## Prettier support

Prettier is very efficiant for formatting a lot of different files formats while ESLint is efficiant to validate the code-quality and catching bugs on JavaScript and TypeScript files only.

It's a good practice to let Prettier handle formatting and ESLint handle the non-formatting issues.

Peppy apply this practice.

Contrary to other ESLint configuration, Peppy do not contain any rule that overwrite the Prettier rules and don't do any formating that is already supported by Prettier.

That mean that you can run Prettier with IDE extensions, on your terminal, on CI runners, on pre-commit hook, anywhere, without having to worry about possible confict with ESLint. Like it's supposed to be.

However, the tradeoff of this approach is that you have to run Prettier and ESLint to get your JavaScript and TypeScript files fully formatted and linted. But, that's not a big tradeoff since you still have to run Prettier to format all the other files supported by it.

## TypeScript support

Peppy support TypeScript out of the box without having to install any other ESLint plugin, configuration nor selecting special TypeScript configuration in the extends property.

However, to help typescript-eslint to find your project TypeScript configuration, you may have to specify your `project` and `tsconfigRootDir` in the `parserOptions` property of your ESLint project configuration file.

```js
module.exports = {
  extends: ["peppy"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
```

## Versioning policy

This project apply the [Semantic Versioning](https://semver.org/) convention. All breaking changes will bump the major version. Every new rule addition will be recognized as a breaking changes. Therefore, every new rule addition will increase the major version.

Also, all packages use the same version. That mean, if one package change, all the packages version will be changed for the new one. By doing that we make sure there's no cross version issues.

## Contributing

Please read our [contribution guide](/CONTRIBUTING.md) for details on our [code of conduct](/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## License

Distributed under the MIT License. See the [license](/LICENSE) for more information.
