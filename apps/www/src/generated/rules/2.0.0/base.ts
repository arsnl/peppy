// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "@typescript-eslint/consistent-type-exports": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/consistent-type-imports": {
    state: "added",
    ts: { entry: '["error", { "prefer": "type-imports" }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/default-param-last": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/dot-notation": {
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/lines-between-class-members": {
    state: "added",
    ts: {
      entry: '["error", "always", { "exceptAfterSingleLine": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/naming-convention": {
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "format": ["camelCase", "PascalCase", "UPPER_CASE"],\n    "leadingUnderscore": "allow",\n    "selector": "variable",\n    "trailingUnderscore": "allow"\n  },\n  {\n    "format": ["camelCase", "PascalCase"],\n    "leadingUnderscore": "allow",\n    "selector": "function",\n    "trailingUnderscore": "allow"\n  },\n  {\n    "format": ["PascalCase", "UPPER_CASE"],\n    "leadingUnderscore": "allow",\n    "selector": "typeLike",\n    "trailingUnderscore": "allow"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-array-constructor": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-dupe-class-members": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-empty-function": {
    state: "added",
    ts: {
      entry:
        '["error", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-implied-eval": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-loop-func": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-loss-of-precision": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-redeclare": {
    state: "added",
    ts: {
      entry: '["error", { "ignoreDeclarationMerge": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-shadow": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-throw-literal": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-unused-expressions": {
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-unused-vars": {
    state: "added",
    ts: {
      entry:
        '[\n  "warn",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "warn",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-useless-constructor": {
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/return-await": {
    state: "added",
    ts: { entry: '["error", "in-try-catch"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "array-callback-return": {
    js: {
      entry: '["error", { "allowImplicit": true, "checkForEach": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "allowImplicit": true, "checkForEach": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "arrow-body-style": {
    js: {
      entry:
        '["error", "as-needed", { "requireReturnForObjectLiteral": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["error", "as-needed", { "requireReturnForObjectLiteral": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "block-scoped-var": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  camelcase: {
    js: {
      entry:
        '[\n  "error",\n  {\n    "ignoreDestructuring": false,\n    "ignoreGlobals": false,\n    "ignoreImports": false,\n    "properties": "never"\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "ignoreDestructuring": false,\n    "ignoreGlobals": false,\n    "ignoreImports": false,\n    "properties": "never"\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "class-methods-use-this": {
    js: {
      entry:
        '["error", { "enforceForClassFields": true, "exceptMethods": [] }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["error", { "enforceForClassFields": true, "exceptMethods": [] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "consistent-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "constructor-super": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  curly: {
    js: { entry: '["error", "all"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "all"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "default-case": {
    js: {
      entry: '["error", { "commentPattern": "^no default$" }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "commentPattern": "^no default$" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "default-case-last": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "default-param-last": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "dot-notation": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  eqeqeq: {
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "for-direction": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "func-names": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "getter-return": {
    js: { entry: '["error", { "allowImplicit": true }]\n', level: "error" },
    state: "added",
    ts: { entry: '["off", { "allowImplicit": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "global-require": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "grouped-accessor-pairs": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "guard-for-in": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/export": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/extensions": {
    js: {
      entry:
        '["error", "ignorePackages", { "js": "never", "jsx": "never", "mjs": "never" }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  "ignorePackages",\n  {\n    "js": "never",\n    "jsx": "never",\n    "mjs": "never",\n    "ts": "never",\n    "tsx": "never"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "import/first": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/named": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "import/newline-after-import": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-absolute-path": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-amd": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-cycle": {
    js: {
      entry: '["error", { "ignoreExternal": false, "maxDepth": "∞" }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "ignoreExternal": false, "maxDepth": "∞" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "import/no-duplicates": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-dynamic-require": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-extraneous-dependencies": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "devDependencies": [\n      "test/**",\n      "tests/**",\n      "spec/**",\n      "**/__tests__/**",\n      "**/__mocks__/**",\n      "test.{js,jsx}",\n      "test-*.{js,jsx}",\n      "**/*{.,_}{test,spec}.{js,jsx}",\n      "**/jest.config.js",\n      "**/jest.setup.js",\n      "**/vue.config.js",\n      "**/webpack.config.js",\n      "**/webpack.config.*.js",\n      "**/rollup.config.js",\n      "**/rollup.config.*.js",\n      "**/gulpfile.js",\n      "**/gulpfile.*.js",\n      "**/Gruntfile{,.js}",\n      "**/protractor.conf.js",\n      "**/protractor.conf.*.js",\n      "**/karma.conf.js",\n      "**/.eslintrc.js"\n    ],\n    "optionalDependencies": false\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "devDependencies": [\n      "test/**",\n      "tests/**",\n      "spec/**",\n      "**/__tests__/**",\n      "**/__mocks__/**",\n      "test.{js,jsx}",\n      "test.{ts,tsx}",\n      "test-*.{js,jsx}",\n      "test-*.{ts,tsx}",\n      "**/*{.,_}{test,spec}.{js,jsx}",\n      "**/*{.,_}{test,spec}.{ts,tsx}",\n      "**/jest.config.js",\n      "**/jest.config.ts",\n      "**/jest.setup.js",\n      "**/jest.setup.ts",\n      "**/vue.config.js",\n      "**/vue.config.ts",\n      "**/webpack.config.js",\n      "**/webpack.config.ts",\n      "**/webpack.config.*.js",\n      "**/webpack.config.*.ts",\n      "**/rollup.config.js",\n      "**/rollup.config.ts",\n      "**/rollup.config.*.js",\n      "**/rollup.config.*.ts",\n      "**/gulpfile.js",\n      "**/gulpfile.ts",\n      "**/gulpfile.*.js",\n      "**/gulpfile.*.ts",\n      "**/Gruntfile{,.js}",\n      "**/Gruntfile{,.ts}",\n      "**/protractor.conf.js",\n      "**/protractor.conf.ts",\n      "**/protractor.conf.*.js",\n      "**/protractor.conf.*.ts",\n      "**/karma.conf.js",\n      "**/karma.conf.ts",\n      "**/.eslintrc.js",\n      "**/.eslintrc.ts"\n    ],\n    "optionalDependencies": false\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "import/no-import-module-exports": {
    js: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-mutable-exports": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-named-as-default": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-named-as-default-member": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "import/no-named-default": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-relative-packages": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-self-import": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-unresolved": {
    js: {
      entry:
        '[\n  "error",\n  { "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "off",\n  { "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "import/no-useless-path-segments": {
    js: { entry: '["error", { "commonjs": true }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "commonjs": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-webpack-loader-syntax": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "lines-around-directive": {
    js: {
      entry: '["error", { "after": "always", "before": "always" }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "after": "always", "before": "always" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "lines-between-class-members": {
    js: {
      entry: '["error", "always", { "exceptAfterSingleLine": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["off", "always", { "exceptAfterSingleLine": false }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "max-classes-per-file": {
    js: { entry: '["error", 1]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", 1]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "new-cap": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "capIsNew": false,\n    "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],\n    "newIsCap": true,\n    "newIsCapExceptions": [],\n    "properties": true\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "capIsNew": false,\n    "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],\n    "newIsCap": true,\n    "newIsCapExceptions": [],\n    "properties": true\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-alert": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-array-constructor": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-async-promise-executor": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-await-in-loop": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-bitwise": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-buffer-constructor": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-caller": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-case-declarations": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-class-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-compare-neg-zero": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-cond-assign": {
    js: { entry: '["error", "except-parens"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "except-parens"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-console": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-const-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-constant-condition": {
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-constructor-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-continue": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-control-regex": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-debugger": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-delete-var": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-dupe-args": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-dupe-class-members": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-dupe-else-if": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-dupe-keys": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-duplicate-case": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-else-return": {
    js: { entry: '["error", { "allowElseIf": false }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "allowElseIf": false }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty-character-class": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty-function": {
    js: {
      entry:
        '["error", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["off", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-empty-pattern": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-eval": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-ex-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extend-native": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-bind": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-boolean-cast": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-label": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-fallthrough": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-func-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-global-assign": {
    js: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-implied-eval": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-import-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-inner-declarations": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-invalid-regexp": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-irregular-whitespace": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-iterator": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-label-var": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-labels": {
    js: {
      entry: '["error", { "allowLoop": false, "allowSwitch": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "allowLoop": false, "allowSwitch": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-lone-blocks": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-lonely-if": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-loop-func": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-loss-of-precision": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-misleading-character-class": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-multi-assign": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-multi-str": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-func": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-new-object": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-require": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-symbol": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-new-wrappers": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-nonoctal-decimal-escape": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-obj-calls": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-octal": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-octal-escape": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-param-reassign": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "ignorePropertyModificationsFor": [\n      "acc",\n      "accumulator",\n      "e",\n      "ctx",\n      "context",\n      "req",\n      "request",\n      "res",\n      "response",\n      "$scope",\n      "staticContext"\n    ],\n    "props": true\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "ignorePropertyModificationsFor": [\n      "acc",\n      "accumulator",\n      "e",\n      "ctx",\n      "context",\n      "req",\n      "request",\n      "res",\n      "response",\n      "$scope",\n      "staticContext"\n    ],\n    "props": true\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-path-concat": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-plusplus": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-promise-executor-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-proto": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-prototype-builtins": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-redeclare": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-regex-spaces": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-restricted-exports": {
    js: {
      entry: '["error", { "restrictedNamedExports": ["default", "then"] }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "restrictedNamedExports": ["default", "then"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-globals": {
    js: {
      entry:
        '[\n  "error",\n  { "message": "Use Number.isFinite instead.", "name": "isFinite" },\n  { "message": "Use Number.isNaN instead.", "name": "isNaN" },\n  "addEventListener",\n  "blur",\n  "close",\n  "closed",\n  "confirm",\n  "defaultStatus",\n  "defaultstatus",\n  "event",\n  "external",\n  "find",\n  "focus",\n  "frameElement",\n  "frames",\n  "history",\n  "innerHeight",\n  "innerWidth",\n  "length",\n  "location",\n  "locationbar",\n  "menubar",\n  "moveBy",\n  "moveTo",\n  "name",\n  "onblur",\n  "onerror",\n  "onfocus",\n  "onload",\n  "onresize",\n  "onunload",\n  "open",\n  "opener",\n  "opera",\n  "outerHeight",\n  "outerWidth",\n  "pageXOffset",\n  "pageYOffset",\n  "parent",\n  "print",\n  "removeEventListener",\n  "resizeBy",\n  "resizeTo",\n  "screen",\n  "screenLeft",\n  "screenTop",\n  "screenX",\n  "screenY",\n  "scroll",\n  "scrollbars",\n  "scrollBy",\n  "scrollTo",\n  "scrollX",\n  "scrollY",\n  "self",\n  "status",\n  "statusbar",\n  "stop",\n  "toolbar",\n  "top"\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  { "message": "Use Number.isFinite instead.", "name": "isFinite" },\n  { "message": "Use Number.isNaN instead.", "name": "isNaN" },\n  "addEventListener",\n  "blur",\n  "close",\n  "closed",\n  "confirm",\n  "defaultStatus",\n  "defaultstatus",\n  "event",\n  "external",\n  "find",\n  "focus",\n  "frameElement",\n  "frames",\n  "history",\n  "innerHeight",\n  "innerWidth",\n  "length",\n  "location",\n  "locationbar",\n  "menubar",\n  "moveBy",\n  "moveTo",\n  "name",\n  "onblur",\n  "onerror",\n  "onfocus",\n  "onload",\n  "onresize",\n  "onunload",\n  "open",\n  "opener",\n  "opera",\n  "outerHeight",\n  "outerWidth",\n  "pageXOffset",\n  "pageYOffset",\n  "parent",\n  "print",\n  "removeEventListener",\n  "resizeBy",\n  "resizeTo",\n  "screen",\n  "screenLeft",\n  "screenTop",\n  "screenX",\n  "screenY",\n  "scroll",\n  "scrollbars",\n  "scrollBy",\n  "scrollTo",\n  "scrollX",\n  "scrollY",\n  "self",\n  "status",\n  "statusbar",\n  "stop",\n  "toolbar",\n  "top"\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-properties": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "message": "arguments.callee is deprecated.",\n    "object": "arguments",\n    "property": "callee"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "global",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "self",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "window",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "global",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "self",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "window",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineGetter__"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineSetter__"\n  },\n  {\n    "message": "Use the exponentiation operator (**) instead.",\n    "object": "Math",\n    "property": "pow"\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "message": "arguments.callee is deprecated.",\n    "object": "arguments",\n    "property": "callee"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "global",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "self",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "window",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "global",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "self",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "window",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineGetter__"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineSetter__"\n  },\n  {\n    "message": "Use the exponentiation operator (**) instead.",\n    "object": "Math",\n    "property": "pow"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-syntax": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",\n    "selector": "ForInStatement"\n  },\n  {\n    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",\n    "selector": "ForOfStatement"\n  },\n  {\n    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",\n    "selector": "LabeledStatement"\n  },\n  {\n    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",\n    "selector": "WithStatement"\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",\n    "selector": "ForInStatement"\n  },\n  {\n    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",\n    "selector": "ForOfStatement"\n  },\n  {\n    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",\n    "selector": "LabeledStatement"\n  },\n  {\n    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",\n    "selector": "WithStatement"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-return-assign": {
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-return-await": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-script-url": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-self-assign": {
    js: { entry: '["error", { "props": true }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "props": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-self-compare": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-sequences": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-setter-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-shadow": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-shadow-restricted-names": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-sparse-arrays": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-template-curly-in-string": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-this-before-super": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-throw-literal": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-undef": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-undef-init": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unneeded-ternary": {
    js: {
      entry: '["error", { "defaultAssignment": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "defaultAssignment": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-unreachable": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-unreachable-loop": {
    js: { entry: '["error", { "ignore": [] }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "ignore": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unsafe-finally": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unsafe-negation": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-unsafe-optional-chaining": {
    js: {
      entry: '["error", { "disallowArithmeticOperators": true }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "disallowArithmeticOperators": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-unused-expressions": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-unused-labels": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unused-vars": {
    js: {
      entry:
        '[\n  "warn",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "warn",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-useless-backreference": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-catch": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-computed-key": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-concat": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-constructor": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-useless-escape": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-rename": {
    js: {
      entry:
        '[\n  "error",\n  { "ignoreDestructuring": false, "ignoreExport": false, "ignoreImport": false }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  { "ignoreDestructuring": false, "ignoreExport": false, "ignoreImport": false }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-useless-return": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-var": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-void": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-with": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "object-shorthand": {
    js: {
      entry:
        '["error", "always", { "avoidQuotes": true, "ignoreConstructors": false }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["error", "always", { "avoidQuotes": true, "ignoreConstructors": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "one-var": {
    js: { entry: '["error", "never"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "never"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "operator-assignment": {
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-arrow-callback": {
    js: {
      entry:
        '["error", { "allowNamedFunctions": false, "allowUnboundThis": true }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["error", { "allowNamedFunctions": false, "allowUnboundThis": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-const": {
    js: {
      entry:
        '["error", { "destructuring": "any", "ignoreReadBeforeAssign": true }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '["error", { "destructuring": "any", "ignoreReadBeforeAssign": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-destructuring": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "AssignmentExpression": { "array": true, "object": false },\n    "VariableDeclarator": { "array": false, "object": true }\n  },\n  { "enforceForRenamedProperties": false }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "AssignmentExpression": { "array": true, "object": false },\n    "VariableDeclarator": { "array": false, "object": true }\n  },\n  { "enforceForRenamedProperties": false }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-exponentiation-operator": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-numeric-literals": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-object-spread": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-promise-reject-errors": {
    js: { entry: '["error", { "allowEmptyReject": true }]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", { "allowEmptyReject": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-regex-literals": {
    js: {
      entry: '["error", { "disallowRedundantWrapping": true }]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry: '["error", { "disallowRedundantWrapping": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-rest-params": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-spread": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-template": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  radix: {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "require-yield": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "simple-import-sort/exports": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "simple-import-sort/imports": {
    js: {
      entry:
        '[\n  "error",\n  {\n    "groups": [\n      [\n        "^\\\\u0000",\n        "^react(/.*)?(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^\\\\..*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(\\\\u0000$)$",\n        "^(@\\\\/|~[^/]*\\\\/).*(\\\\u0000$)$",\n        "^\\\\..*(\\\\u0000$)$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(.(css|scss|sass|less))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(.(css|scss|sass|less))$",\n        "^\\\\..*(.(css|scss|sass|less))$"\n      ]\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "groups": [\n      [\n        "^\\\\u0000",\n        "^react(/.*)?(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^\\\\..*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(\\\\u0000$)$",\n        "^(@\\\\/|~[^/]*\\\\/).*(\\\\u0000$)$",\n        "^\\\\..*(\\\\u0000$)$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(.(css|scss|sass|less))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(.(css|scss|sass|less))$",\n        "^\\\\..*(.(css|scss|sass|less))$"\n      ]\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "spaced-comment": {
    js: {
      entry:
        '[\n  "error",\n  "always",\n  {\n    "block": {\n      "balanced": true,\n      "exceptions": ["-", "+"],\n      "markers": ["=", "!", ":", "::"]\n    },\n    "line": { "exceptions": ["-", "+"], "markers": ["=", "!", "/"] }\n  }\n]\n',
      level: "error",
    },
    state: "added",
    ts: {
      entry:
        '[\n  "error",\n  "always",\n  {\n    "block": {\n      "balanced": true,\n      "exceptions": ["-", "+"],\n      "markers": ["=", "!", ":", "::"]\n    },\n    "line": { "exceptions": ["-", "+"], "markers": ["=", "!", "/"] }\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  strict: {
    js: { entry: '["error", "never"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error", "never"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "symbol-description": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "use-isnan": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "valid-typeof": {
    js: {
      entry: '["error", { "requireStringLiterals": true }]\n',
      level: "error",
    },
    state: "added",
    ts: { entry: '["off", { "requireStringLiterals": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "vars-on-top": {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  yoda: {
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
};
