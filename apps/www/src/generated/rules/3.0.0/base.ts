// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "@typescript-eslint/consistent-type-exports": {
    description: "Enforces consistent usage of type exports",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/consistent-type-imports": {
    description: "Enforces consistent usage of type imports",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md",
    state: "unchanged",
    ts: { entry: '["error", { "prefer": "type-imports" }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/default-param-last": {
    description: "Enforce default parameters to be last",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/default-param-last.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/dot-notation": {
    description: "Enforce dot notation whenever possible",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/dot-notation.md",
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/lines-between-class-members": {
    description: "Require or disallow an empty line between class members",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/lines-between-class-members.md",
    state: "unchanged",
    ts: {
      entry: '["error", "always", { "exceptAfterSingleLine": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/naming-convention": {
    description: "Enforces naming conventions for everything across a codebase",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/naming-convention.md",
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "format": ["camelCase", "PascalCase", "UPPER_CASE"],\n    "leadingUnderscore": "allow",\n    "selector": "variable",\n    "trailingUnderscore": "allow"\n  },\n  {\n    "format": ["camelCase", "PascalCase"],\n    "leadingUnderscore": "allow",\n    "selector": "function",\n    "trailingUnderscore": "allow"\n  },\n  {\n    "format": ["PascalCase", "UPPER_CASE"],\n    "leadingUnderscore": "allow",\n    "selector": "typeLike",\n    "trailingUnderscore": "allow"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-array-constructor": {
    description: "Disallow `Array` constructors",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-array-constructor.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-dupe-class-members": {
    description: "Disallow duplicate class members",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-dupe-class-members.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-empty-function": {
    description: "Disallow empty functions",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-empty-function.md",
    state: "unchanged",
    ts: {
      entry:
        '["error", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-implied-eval": {
    description: "Disallow the use of `eval()`",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-implied-eval.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-loop-func": {
    description:
      "Disallow function declarations that contain unsafe references inside loop statements",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-loop-func.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-loss-of-precision": {
    description: "Disallow Number Literals That Lose Precision",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-loss-of-precision.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-redeclare": {
    description: "Disallow variable redeclaration",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-redeclare.md",
    state: "unchanged",
    ts: {
      entry: '["error", { "ignoreDeclarationMerge": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-shadow": {
    description:
      "Disallow variable declarations from shadowing variables declared in the outer scope",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-shadow.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-throw-literal": {
    description: "Disallow throwing literals as exceptions",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-throw-literal.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-unused-expressions": {
    description: "Disallow unused expressions",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-unused-expressions.md",
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-unused-vars": {
    description: "Disallow unused variables",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-unused-vars.md",
    state: "unchanged",
    ts: {
      entry:
        '[\n  "warn",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "warn",
    },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/no-useless-constructor": {
    description: "Disallow unnecessary constructors",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/no-useless-constructor.md",
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "@typescript-eslint/return-await": {
    description: "Disallow unnecessary `return await`",
    docsUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules/return-await.md",
    state: "unchanged",
    ts: { entry: '["error", "in-try-catch"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "array-callback-return": {
    description: "Enforce `return` statements in callbacks of array methods",
    docsUrl: "https://eslint.org/docs/rules/array-callback-return",
    js: {
      entry: '["error", { "allowImplicit": true, "checkForEach": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "allowImplicit": true, "checkForEach": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "arrow-body-style": {
    description: "Require braces in arrow function body",
    docsUrl: "https://eslint.org/docs/rules/arrow-body-style",
    js: {
      entry:
        '["error", "as-needed", { "requireReturnForObjectLiteral": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", "as-needed", { "requireReturnForObjectLiteral": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "block-scoped-var": {
    description:
      "Enforce the use of variables within the scope they are defined",
    docsUrl: "https://eslint.org/docs/rules/block-scoped-var",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  camelcase: {
    description: "Enforce camelCase naming convention",
    docsUrl: "https://eslint.org/docs/rules/camelcase",
    js: {
      entry:
        '[\n  "error",\n  {\n    "ignoreDestructuring": false,\n    "ignoreGlobals": false,\n    "ignoreImports": false,\n    "properties": "never"\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "ignoreDestructuring": false,\n    "ignoreGlobals": false,\n    "ignoreImports": false,\n    "properties": "never"\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "class-methods-use-this": {
    description: "Enforce that class methods utilize `this`",
    docsUrl: "https://eslint.org/docs/rules/class-methods-use-this",
    js: {
      entry:
        '["error", { "enforceForClassFields": true, "exceptMethods": [] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", { "enforceForClassFields": true, "exceptMethods": [] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "consistent-return": {
    description:
      "Require `return` statements to either always or never specify values",
    docsUrl: "https://eslint.org/docs/rules/consistent-return",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "constructor-super": {
    description: "Require `super()` calls in constructors",
    docsUrl: "https://eslint.org/docs/rules/constructor-super",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  curly: {
    description: "Enforce consistent brace style for all control statements",
    docsUrl: "https://eslint.org/docs/rules/curly",
    js: { entry: '["error", "all"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "all"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "default-case": {
    description: "Require `default` cases in `switch` statements",
    docsUrl: "https://eslint.org/docs/rules/default-case",
    js: {
      entry: '["error", { "commentPattern": "^no default$" }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "commentPattern": "^no default$" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "default-case-last": {
    description: "Enforce default parameters to be last",
    docsUrl: "https://eslint.org/docs/rules/default-case-last",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "default-param-last": {
    description: "Enforce default parameters to be last",
    docsUrl: "https://eslint.org/docs/rules/default-param-last",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "dot-notation": {
    description: "Enforce dot notation whenever possible",
    docsUrl: "https://eslint.org/docs/rules/dot-notation",
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "allowIndexSignaturePropertyAccess": false,\n    "allowKeywords": true,\n    "allowPattern": "",\n    "allowPrivateClassPropertyAccess": false,\n    "allowProtectedClassPropertyAccess": false\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  eqeqeq: {
    description: "Require the use of `===` and `!==`",
    docsUrl: "https://eslint.org/docs/rules/eqeqeq",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "for-direction": {
    description:
      'Enforce "for" loop update clause moving the counter in the right direction',
    docsUrl: "https://eslint.org/docs/rules/for-direction",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "func-names": {
    description: "Require or disallow named `function` expressions",
    docsUrl: "https://eslint.org/docs/rules/func-names",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "getter-return": {
    description: "Enforce `return` statements in getters",
    docsUrl: "https://eslint.org/docs/rules/getter-return",
    js: { entry: '["error", { "allowImplicit": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off", { "allowImplicit": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "global-require": {
    description:
      "Require `require()` calls to be placed at top-level module scope",
    docsUrl: "https://eslint.org/docs/rules/global-require",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "grouped-accessor-pairs": {
    description:
      "Require grouped accessor pairs in object literals and classes",
    docsUrl: "https://eslint.org/docs/rules/grouped-accessor-pairs",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "guard-for-in": {
    description: "Require `for-in` loops to include an `if` statement",
    docsUrl: "https://eslint.org/docs/rules/guard-for-in",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/export": {
    description: "Forbid any invalid exports, i.e. re-export of the same name",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/export.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/extensions": {
    description:
      "Ensure consistent use of file extension within the import path",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/extensions.md",
    js: {
      entry:
        '[\n  "error",\n  "ignorePackages",\n  { "cjs": "never", "js": "never", "jsx": "never", "mjs": "never" }\n]\n',
      level: "error",
    },
    state: "changed",
    ts: {
      entry:
        '[\n  "error",\n  "ignorePackages",\n  {\n    "cjs": "never",\n    "js": "never",\n    "jsx": "never",\n    "mjs": "never",\n    "ts": "never",\n    "tsx": "never"\n  }\n]\n',
      level: "error",
    },
    updates: ["3.0.0", "2.0.0"],
  },
  "import/first": {
    description: "Ensure all imports appear before other statements",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/first.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/named": {
    description:
      "\tEnsure named imports correspond to a named export in the remote file",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/named.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "import/newline-after-import": {
    description: "Enforce a newline after import statements",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/newline-after-import.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-absolute-path": {
    description: "Forbid import of modules using absolute paths",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-absolute-path.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-amd": {
    description: "Forbid AMD `require` and `define` calls",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-amd.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-cycle": {
    description:
      "Forbid a module from importing a module with a dependency path back to itself",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-cycle.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowUnsafeDynamicCyclicDependency": false,\n    "ignoreExternal": false,\n    "maxDepth": "∞"\n  }\n]\n',
      level: "error",
    },
    state: "changed",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "allowUnsafeDynamicCyclicDependency": false,\n    "ignoreExternal": false,\n    "maxDepth": "∞"\n  }\n]\n',
      level: "error",
    },
    updates: ["3.0.0", "2.0.0"],
  },
  "import/no-duplicates": {
    description: "Forbid repeated import of the same module in multiple places",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-duplicates.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-dynamic-require": {
    description: "Forbid `require()` calls with expressions",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-dynamic-require.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-extraneous-dependencies": {
    description: "Forbid the use of extraneous packages",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-extraneous-dependencies.md",
    js: {
      entry:
        '[\n  "error",\n  {\n    "devDependencies": [\n      "test/**",\n      "tests/**",\n      "spec/**",\n      "**/__tests__/**",\n      "**/__mocks__/**",\n      "test.{js,jsx,cjs,mjs}",\n      "test-*.{js,jsx,cjs,mjs}",\n      "**/*{.,_}{test,spec}.{js,jsx,cjs,mjs}",\n      "**/.eslintrc.{js,cjs,mjs}",\n      "**/astro.config.{js,cjs,mjs}",\n      "**/babel.config.{js,cjs,mjs}",\n      "**/contentlayer.config.{js,cjs,mjs}",\n      "**/gatsby-config.{js,cjs,mjs}",\n      "**/Gruntfile{,.js,.cjs,.mjs}",\n      "**/gulpfile.{js,cjs,mjs}",\n      "**/gulpfile.*.{js,cjs,mjs}",\n      "**/jest.config.{js,cjs,mjs}",\n      "**/jest.setup.{js,cjs,mjs}",\n      "**/karma.conf.{js,cjs,mjs}",\n      "**/next-sitemap.config.{js,cjs,mjs}",\n      "**/next.config.{js,cjs,mjs}",\n      "**/postcss.config.{js,cjs,mjs}",\n      "**/prettierrc.{js,cjs,mjs}",\n      "**/protractor.conf.{js,cjs,mjs}",\n      "**/protractor.conf.*.{js,cjs,mjs}",\n      "**/remix.config.{js,cjs,mjs}",\n      "**/rollup.config.{js,cjs,mjs}",\n      "**/rollup.config.*.{js,cjs,mjs}",\n      "**/tailwind.config.{js,cjs,mjs}",\n      "**/vue.config.{js,cjs,mjs}",\n      "**/webpack.config.{js,cjs,mjs}",\n      "**/webpack.config.*.{js,cjs,mjs}"\n    ],\n    "optionalDependencies": false\n  }\n]\n',
      level: "error",
    },
    state: "changed",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "devDependencies": [\n      "test/**",\n      "tests/**",\n      "spec/**",\n      "**/__tests__/**",\n      "**/__mocks__/**",\n      "test.{js,jsx,cjs,mjs}",\n      "test.{ts,tsx,cts,mts}",\n      "test-*.{js,jsx,cjs,mjs}",\n      "test-*.{ts,tsx,cts,mts}",\n      "**/*{.,_}{test,spec}.{js,jsx,cjs,mjs}",\n      "**/*{.,_}{test,spec}.{ts,tsx,cts,mts}",\n      "**/.eslintrc.{js,cjs,mjs}",\n      "**/.eslintrc.{ts,cts,mts}",\n      "**/astro.config.{js,cjs,mjs}",\n      "**/astro.config.{ts,cts,mts}",\n      "**/babel.config.{js,cjs,mjs}",\n      "**/babel.config.{ts,cts,mts}",\n      "**/contentlayer.config.{js,cjs,mjs}",\n      "**/contentlayer.config.{ts,cts,mts}",\n      "**/gatsby-config.{js,cjs,mjs}",\n      "**/gatsby-config.{ts,cts,mts}",\n      "**/Gruntfile{,.js,.cjs,.mjs}",\n      "**/Gruntfile{,.ts,.cts,.mts}",\n      "**/gulpfile.{js,cjs,mjs}",\n      "**/gulpfile.{ts,cts,mts}",\n      "**/gulpfile.*.{js,cjs,mjs}",\n      "**/gulpfile.*.{ts,cts,mts}",\n      "**/jest.config.{js,cjs,mjs}",\n      "**/jest.config.{ts,cts,mts}",\n      "**/jest.setup.{js,cjs,mjs}",\n      "**/jest.setup.{ts,cts,mts}",\n      "**/karma.conf.{js,cjs,mjs}",\n      "**/karma.conf.{ts,cts,mts}",\n      "**/next-sitemap.config.{js,cjs,mjs}",\n      "**/next-sitemap.config.{ts,cts,mts}",\n      "**/next.config.{js,cjs,mjs}",\n      "**/next.config.{ts,cts,mts}",\n      "**/postcss.config.{js,cjs,mjs}",\n      "**/postcss.config.{ts,cts,mts}",\n      "**/prettierrc.{js,cjs,mjs}",\n      "**/prettierrc.{ts,cts,mts}",\n      "**/protractor.conf.{js,cjs,mjs}",\n      "**/protractor.conf.{ts,cts,mts}",\n      "**/protractor.conf.*.{js,cjs,mjs}",\n      "**/protractor.conf.*.{ts,cts,mts}",\n      "**/remix.config.{js,cjs,mjs}",\n      "**/remix.config.{ts,cts,mts}",\n      "**/rollup.config.{js,cjs,mjs}",\n      "**/rollup.config.{ts,cts,mts}",\n      "**/rollup.config.*.{js,cjs,mjs}",\n      "**/rollup.config.*.{ts,cts,mts}",\n      "**/tailwind.config.{js,cjs,mjs}",\n      "**/tailwind.config.{ts,cts,mts}",\n      "**/vue.config.{js,cjs,mjs}",\n      "**/vue.config.{ts,cts,mts}",\n      "**/webpack.config.{js,cjs,mjs}",\n      "**/webpack.config.{ts,cts,mts}",\n      "**/webpack.config.*.{js,cjs,mjs}",\n      "**/webpack.config.*.{ts,cts,mts}"\n    ],\n    "optionalDependencies": false\n  }\n]\n',
      level: "error",
    },
    updates: ["3.0.0", "2.0.0"],
  },
  "import/no-import-module-exports": {
    description: "Forbid import statements with CommonJS module.exports",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-import-module-exports.md",
    js: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-mutable-exports": {
    description: "Forbid the use of mutable exports with `var` or `let`",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-mutable-exports.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-named-as-default": {
    description: "Forbid use of exported name as identifier of default export",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-named-as-default-member": {
    description: "Forbid use of exported name as property of default export",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default-member.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "import/no-named-default": {
    description: "Forbid named default exports",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-default.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-relative-packages": {
    description: "Forbid importing packages through relative paths",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-relative-packages.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-self-import": {
    description: "Forbid a module from importing itself",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-self-import.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-unresolved": {
    description: "Ensure imports point to a file/module that can be resolved",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-unresolved.md",
    js: {
      entry:
        '[\n  "error",\n  { "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  { "caseSensitive": true, "caseSensitiveStrict": false, "commonjs": true }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "import/no-useless-path-segments": {
    description:
      "Forbid unnecessary path segments in import and require statements",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-useless-path-segments.md",
    js: { entry: '["error", { "commonjs": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "commonjs": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "import/no-webpack-loader-syntax": {
    description: "Forbid webpack loader syntax in imports",
    docsUrl:
      "https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-webpack-loader-syntax.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "lines-around-directive": {
    description: "Require or disallow newlines around directives",
    docsUrl: "https://eslint.org/docs/rules/lines-around-directive",
    js: {
      entry: '["error", { "after": "always", "before": "always" }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "after": "always", "before": "always" }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "lines-between-class-members": {
    description: "Require or disallow an empty line between class members",
    docsUrl: "https://eslint.org/docs/rules/lines-between-class-members",
    js: {
      entry: '["error", "always", { "exceptAfterSingleLine": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["off", "always", { "exceptAfterSingleLine": false }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "max-classes-per-file": {
    description: "Enforce a maximum number of classes per file",
    docsUrl: "https://eslint.org/docs/rules/max-classes-per-file",
    js: { entry: '["error", 1]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", 1]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "new-cap": {
    description: "Require constructor names to begin with a capital letter",
    docsUrl: "https://eslint.org/docs/rules/new-cap",
    js: {
      entry:
        '[\n  "error",\n  {\n    "capIsNew": false,\n    "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],\n    "newIsCap": true,\n    "newIsCapExceptions": [],\n    "properties": true\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "capIsNew": false,\n    "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],\n    "newIsCap": true,\n    "newIsCapExceptions": [],\n    "properties": true\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-alert": {
    description: "Disallow the use of `alert`, `confirm`, and `prompt`",
    docsUrl: "https://eslint.org/docs/rules/no-alert",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-array-constructor": {
    description: "Disallow `Array` constructors",
    docsUrl: "https://eslint.org/docs/rules/no-array-constructor",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-async-promise-executor": {
    description: "Disallow using an async function as a Promise executor",
    docsUrl: "https://eslint.org/docs/rules/no-async-promise-executor",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-await-in-loop": {
    description: "Disallow `await` inside of loops",
    docsUrl: "https://eslint.org/docs/rules/no-await-in-loop",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-bitwise": {
    description: "Disallow bitwise operators",
    docsUrl: "https://eslint.org/docs/rules/no-bitwise",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-buffer-constructor": {
    description: "Disallow use of the `Buffer()` constructor",
    docsUrl: "https://eslint.org/docs/rules/no-buffer-constructor",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-caller": {
    description: "Disallow the use of `arguments.caller` or `arguments.callee`",
    docsUrl: "https://eslint.org/docs/rules/no-caller",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-case-declarations": {
    description: "Disallow lexical declarations in case clauses",
    docsUrl: "https://eslint.org/docs/rules/no-case-declarations",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-class-assign": {
    description: "Disallow reassigning class members",
    docsUrl: "https://eslint.org/docs/rules/no-class-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-compare-neg-zero": {
    description: "Disallow comparing against -0",
    docsUrl: "https://eslint.org/docs/rules/no-compare-neg-zero",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-cond-assign": {
    description: "Disallow assignment operators in conditional expressions",
    docsUrl: "https://eslint.org/docs/rules/no-cond-assign",
    js: { entry: '["error", "except-parens"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "except-parens"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-console": {
    description: "Disallow the use of `console`",
    docsUrl: "https://eslint.org/docs/rules/no-console",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-const-assign": {
    description: "Disallow reassigning `const` variables",
    docsUrl: "https://eslint.org/docs/rules/no-const-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-constant-condition": {
    description: "Disallow constant expressions in conditions",
    docsUrl: "https://eslint.org/docs/rules/no-constant-condition",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "unchanged",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "no-constructor-return": {
    description: "Disallow returning value in constructor",
    docsUrl: "https://eslint.org/docs/rules/no-constructor-return",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-continue": {
    description: "Disallow `continue` statements",
    docsUrl: "https://eslint.org/docs/rules/no-continue",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-control-regex": {
    description: "Disallow control characters in regular expressions",
    docsUrl: "https://eslint.org/docs/rules/no-control-regex",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-debugger": {
    description: "Disallow the use of `debugger`",
    docsUrl: "https://eslint.org/docs/rules/no-debugger",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-delete-var": {
    description: "Disallow deleting variables",
    docsUrl: "https://eslint.org/docs/rules/no-delete-var",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-dupe-args": {
    description: "Disallow duplicate arguments in `function` definitions",
    docsUrl: "https://eslint.org/docs/rules/no-dupe-args",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-dupe-class-members": {
    description: "Disallow duplicate class members",
    docsUrl: "https://eslint.org/docs/rules/no-dupe-class-members",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-dupe-else-if": {
    description: "Disallow duplicate conditions in `if-else-if` chains",
    docsUrl: "https://eslint.org/docs/rules/no-dupe-else-if",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-dupe-keys": {
    description: "Disallow duplicate keys in object literals",
    docsUrl: "https://eslint.org/docs/rules/no-dupe-keys",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-duplicate-case": {
    description: "Disallow duplicate case labels",
    docsUrl: "https://eslint.org/docs/rules/no-duplicate-case",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-else-return": {
    description:
      "Disallow `else` blocks after `return` statements in `if` statements",
    docsUrl: "https://eslint.org/docs/rules/no-else-return",
    js: { entry: '["error", { "allowElseIf": false }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "allowElseIf": false }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty": {
    description: "Disallow empty block statements",
    docsUrl: "https://eslint.org/docs/rules/no-empty",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty-character-class": {
    description: "Disallow empty character classes in regular expressions",
    docsUrl: "https://eslint.org/docs/rules/no-empty-character-class",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-empty-function": {
    description: "Disallow empty functions",
    docsUrl: "https://eslint.org/docs/rules/no-empty-function",
    js: {
      entry:
        '["error", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["off", { "allow": ["arrowFunctions", "functions", "methods"] }]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-empty-pattern": {
    description: "Disallow empty destructuring patterns",
    docsUrl: "https://eslint.org/docs/rules/no-empty-pattern",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-eval": {
    description: "Disallow the use of `eval()`",
    docsUrl: "https://eslint.org/docs/rules/no-eval",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-ex-assign": {
    description: "Disallow reassigning exceptions in `catch` clauses",
    docsUrl: "https://eslint.org/docs/rules/no-ex-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extend-native": {
    description: "Disallow extending native types",
    docsUrl: "https://eslint.org/docs/rules/no-extend-native",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-bind": {
    description: "Disallow unnecessary calls to `.bind()`",
    docsUrl: "https://eslint.org/docs/rules/no-extra-bind",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-boolean-cast": {
    description: "Disallow unnecessary boolean casts",
    docsUrl: "https://eslint.org/docs/rules/no-extra-boolean-cast",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-extra-label": {
    description: "Disallow unnecessary labels",
    docsUrl: "https://eslint.org/docs/rules/no-extra-label",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-fallthrough": {
    description: "Disallow fallthrough of `case` statements",
    docsUrl: "https://eslint.org/docs/rules/no-fallthrough",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-func-assign": {
    description: "Disallow reassigning `function` declarations",
    docsUrl: "https://eslint.org/docs/rules/no-func-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-global-assign": {
    description:
      "Disallow assignments to native objects or read-only global variables",
    docsUrl: "https://eslint.org/docs/rules/no-global-assign",
    js: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "exceptions": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-implied-eval": {
    description: "Disallow the use of `eval()`-like methods",
    docsUrl: "https://eslint.org/docs/rules/no-implied-eval",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-import-assign": {
    description: "Disallow assigning to imported bindings",
    docsUrl: "https://eslint.org/docs/rules/no-import-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-inner-declarations": {
    description:
      "Disallow variable or `function` declarations in nested blocks",
    docsUrl: "https://eslint.org/docs/rules/no-inner-declarations",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-invalid-regexp": {
    description:
      "Disallow invalid regular expression strings in `RegExp` constructors",
    docsUrl: "https://eslint.org/docs/rules/no-invalid-regexp",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-irregular-whitespace": {
    description: "Disallow irregular whitespace",
    docsUrl: "https://eslint.org/docs/rules/no-irregular-whitespace",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-iterator": {
    description: "Disallow the use of the `__iterator__` property",
    docsUrl: "https://eslint.org/docs/rules/no-iterator",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-label-var": {
    description: "Disallow labels that share a name with a variable",
    docsUrl: "https://eslint.org/docs/rules/no-label-var",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-labels": {
    description: "Disallow labeled statements",
    docsUrl: "https://eslint.org/docs/rules/no-labels",
    js: {
      entry: '["error", { "allowLoop": false, "allowSwitch": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "allowLoop": false, "allowSwitch": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-lone-blocks": {
    description: "Disallow unnecessary nested blocks",
    docsUrl: "https://eslint.org/docs/rules/no-lone-blocks",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-lonely-if": {
    description:
      "Disallow `if` statements as the only statement in `else` blocks",
    docsUrl: "https://eslint.org/docs/rules/no-lonely-if",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-loop-func": {
    description:
      "Disallow function declarations that contain unsafe references inside loop statements",
    docsUrl: "https://eslint.org/docs/rules/no-loop-func",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-loss-of-precision": {
    description: "Disallow Number Literals That Lose Precision",
    docsUrl: "https://eslint.org/docs/rules/no-loss-of-precision",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-misleading-character-class": {
    description:
      "Disallow characters which are made with multiple code points in character class syntax",
    docsUrl: "https://eslint.org/docs/rules/no-misleading-character-class",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-multi-assign": {
    description: "Disallow use of chained assignment expressions",
    docsUrl: "https://eslint.org/docs/rules/no-multi-assign",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-multi-str": {
    description: "Disallow multiline strings",
    docsUrl: "https://eslint.org/docs/rules/no-multi-str",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new": {
    description:
      "Disallow `new` operators outside of assignments or comparisons",
    docsUrl: "https://eslint.org/docs/rules/no-new",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-func": {
    description: "Disallow `new` operators with the `Function` object",
    docsUrl: "https://eslint.org/docs/rules/no-new-func",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-new-object": {
    description: "Disallow `Object` constructors",
    docsUrl: "https://eslint.org/docs/rules/no-new-object",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-require": {
    description: "Disallow `new` operators with calls to `require`",
    docsUrl: "https://eslint.org/docs/rules/no-new-require",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-new-symbol": {
    description: "Disallow `new` operators with the `Symbol` object",
    docsUrl: "https://eslint.org/docs/rules/no-new-symbol",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-new-wrappers": {
    description:
      "Disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
    docsUrl: "https://eslint.org/docs/rules/no-new-wrappers",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-nonoctal-decimal-escape": {
    description: "Disallow `\\8` and `\\9` escape sequences in string literals",
    docsUrl: "https://eslint.org/docs/rules/no-nonoctal-decimal-escape",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-obj-calls": {
    description: "Disallow calling global object properties as functions",
    docsUrl: "https://eslint.org/docs/rules/no-obj-calls",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-octal": {
    description: "Disallow octal literals",
    docsUrl: "https://eslint.org/docs/rules/no-octal",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-octal-escape": {
    description: "Disallow octal escape sequences in string literals",
    docsUrl: "https://eslint.org/docs/rules/no-octal-escape",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-param-reassign": {
    description: "Disallow reassigning `function` parameters",
    docsUrl: "https://eslint.org/docs/rules/no-param-reassign",
    js: {
      entry:
        '[\n  "error",\n  {\n    "ignorePropertyModificationsFor": [\n      "acc",\n      "accumulator",\n      "e",\n      "ctx",\n      "context",\n      "req",\n      "request",\n      "res",\n      "response",\n      "$scope",\n      "staticContext"\n    ],\n    "props": true\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "ignorePropertyModificationsFor": [\n      "acc",\n      "accumulator",\n      "e",\n      "ctx",\n      "context",\n      "req",\n      "request",\n      "res",\n      "response",\n      "$scope",\n      "staticContext"\n    ],\n    "props": true\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-path-concat": {
    description:
      "Disallow string concatenation with `__dirname` and `__filename`",
    docsUrl: "https://eslint.org/docs/rules/no-path-concat",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-plusplus": {
    description: "Disallow the unary operators `++` and `--`",
    docsUrl: "https://eslint.org/docs/rules/no-plusplus",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-promise-executor-return": {
    description: "Disallow returning values from Promise executor functions",
    docsUrl: "https://eslint.org/docs/rules/no-promise-executor-return",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-proto": {
    description: "Disallow the use of the `__proto__` property",
    docsUrl: "https://eslint.org/docs/rules/no-proto",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-prototype-builtins": {
    description:
      "Disallow calling some `Object.prototype` methods directly on objects",
    docsUrl: "https://eslint.org/docs/rules/no-prototype-builtins",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-redeclare": {
    description: "Disallow variable redeclaration",
    docsUrl: "https://eslint.org/docs/rules/no-redeclare",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-regex-spaces": {
    description: "Disallow multiple spaces in regular expressions",
    docsUrl: "https://eslint.org/docs/rules/no-regex-spaces",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-restricted-exports": {
    description: "Disallow specified names in exports",
    docsUrl: "https://eslint.org/docs/rules/no-restricted-exports",
    js: {
      entry: '["error", { "restrictedNamedExports": ["default", "then"] }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "restrictedNamedExports": ["default", "then"] }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-globals": {
    description: "Disallow specified global variables",
    docsUrl: "https://eslint.org/docs/rules/no-restricted-globals",
    js: {
      entry:
        '[\n  "error",\n  { "message": "Use Number.isFinite instead.", "name": "isFinite" },\n  { "message": "Use Number.isNaN instead.", "name": "isNaN" },\n  "addEventListener",\n  "blur",\n  "close",\n  "closed",\n  "confirm",\n  "defaultStatus",\n  "defaultstatus",\n  "event",\n  "external",\n  "find",\n  "focus",\n  "frameElement",\n  "frames",\n  "history",\n  "innerHeight",\n  "innerWidth",\n  "length",\n  "location",\n  "locationbar",\n  "menubar",\n  "moveBy",\n  "moveTo",\n  "name",\n  "onblur",\n  "onerror",\n  "onfocus",\n  "onload",\n  "onresize",\n  "onunload",\n  "open",\n  "opener",\n  "opera",\n  "outerHeight",\n  "outerWidth",\n  "pageXOffset",\n  "pageYOffset",\n  "parent",\n  "print",\n  "removeEventListener",\n  "resizeBy",\n  "resizeTo",\n  "screen",\n  "screenLeft",\n  "screenTop",\n  "screenX",\n  "screenY",\n  "scroll",\n  "scrollbars",\n  "scrollBy",\n  "scrollTo",\n  "scrollX",\n  "scrollY",\n  "self",\n  "status",\n  "statusbar",\n  "stop",\n  "toolbar",\n  "top"\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  { "message": "Use Number.isFinite instead.", "name": "isFinite" },\n  { "message": "Use Number.isNaN instead.", "name": "isNaN" },\n  "addEventListener",\n  "blur",\n  "close",\n  "closed",\n  "confirm",\n  "defaultStatus",\n  "defaultstatus",\n  "event",\n  "external",\n  "find",\n  "focus",\n  "frameElement",\n  "frames",\n  "history",\n  "innerHeight",\n  "innerWidth",\n  "length",\n  "location",\n  "locationbar",\n  "menubar",\n  "moveBy",\n  "moveTo",\n  "name",\n  "onblur",\n  "onerror",\n  "onfocus",\n  "onload",\n  "onresize",\n  "onunload",\n  "open",\n  "opener",\n  "opera",\n  "outerHeight",\n  "outerWidth",\n  "pageXOffset",\n  "pageYOffset",\n  "parent",\n  "print",\n  "removeEventListener",\n  "resizeBy",\n  "resizeTo",\n  "screen",\n  "screenLeft",\n  "screenTop",\n  "screenX",\n  "screenY",\n  "scroll",\n  "scrollbars",\n  "scrollBy",\n  "scrollTo",\n  "scrollX",\n  "scrollY",\n  "self",\n  "status",\n  "statusbar",\n  "stop",\n  "toolbar",\n  "top"\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-properties": {
    description: "Disallow certain properties on certain objects",
    docsUrl: "https://eslint.org/docs/rules/no-restricted-properties",
    js: {
      entry:
        '[\n  "error",\n  {\n    "message": "arguments.callee is deprecated.",\n    "object": "arguments",\n    "property": "callee"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "global",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "self",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "window",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "global",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "self",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "window",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineGetter__"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineSetter__"\n  },\n  {\n    "message": "Use the exponentiation operator (**) instead.",\n    "object": "Math",\n    "property": "pow"\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "message": "arguments.callee is deprecated.",\n    "object": "arguments",\n    "property": "callee"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "global",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "self",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isFinite instead.",\n    "object": "window",\n    "property": "isFinite"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "global",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "self",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Number.isNaN instead.",\n    "object": "window",\n    "property": "isNaN"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineGetter__"\n  },\n  {\n    "message": "Please use Object.defineProperty instead.",\n    "property": "__defineSetter__"\n  },\n  {\n    "message": "Use the exponentiation operator (**) instead.",\n    "object": "Math",\n    "property": "pow"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-restricted-syntax": {
    description: "Disallow specified syntax",
    docsUrl: "https://eslint.org/docs/rules/no-restricted-syntax",
    js: {
      entry:
        '[\n  "error",\n  {\n    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",\n    "selector": "ForInStatement"\n  },\n  {\n    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",\n    "selector": "ForOfStatement"\n  },\n  {\n    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",\n    "selector": "LabeledStatement"\n  },\n  {\n    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",\n    "selector": "WithStatement"\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",\n    "selector": "ForInStatement"\n  },\n  {\n    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",\n    "selector": "ForOfStatement"\n  },\n  {\n    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",\n    "selector": "LabeledStatement"\n  },\n  {\n    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",\n    "selector": "WithStatement"\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-return-assign": {
    description: "Disallow assignment operators in `return` statements",
    docsUrl: "https://eslint.org/docs/rules/no-return-assign",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-return-await": {
    description: "Disallow unnecessary `return await`",
    docsUrl: "https://eslint.org/docs/rules/no-return-await",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-script-url": {
    description: "Disallow `javascript:` urls",
    docsUrl: "https://eslint.org/docs/rules/no-script-url",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-self-assign": {
    description: "Disallow assignments where both sides are exactly the same",
    docsUrl: "https://eslint.org/docs/rules/no-self-assign",
    js: { entry: '["error", { "props": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "props": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-self-compare": {
    description: "Disallow comparisons where both sides are exactly the same",
    docsUrl: "https://eslint.org/docs/rules/no-self-compare",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-sequences": {
    description: "Disallow comma operators",
    docsUrl: "https://eslint.org/docs/rules/no-sequences",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-setter-return": {
    description: "Disallow returning values from setters",
    docsUrl: "https://eslint.org/docs/rules/no-setter-return",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-shadow": {
    description:
      "Disallow variable declarations from shadowing variables declared in the outer scope",
    docsUrl: "https://eslint.org/docs/rules/no-shadow",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-shadow-restricted-names": {
    description: "Disallow identifiers from shadowing restricted names",
    docsUrl: "https://eslint.org/docs/rules/no-shadow-restricted-names",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-sparse-arrays": {
    description: "Disallow sparse arrays",
    docsUrl: "https://eslint.org/docs/rules/no-sparse-arrays",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-template-curly-in-string": {
    description:
      "Disallow template literal placeholder syntax in regular strings",
    docsUrl: "https://eslint.org/docs/rules/no-template-curly-in-string",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-this-before-super": {
    description:
      "Disallow `this`/`super` before calling `super()` in constructors",
    docsUrl: "https://eslint.org/docs/rules/no-this-before-super",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-throw-literal": {
    description: "Disallow throwing literals as exceptions",
    docsUrl: "https://eslint.org/docs/rules/no-throw-literal",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-undef": {
    description: "Disallow the use of undeclared variables",
    docsUrl: "https://eslint.org/docs/rules/no-undef",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-undef-init": {
    description: "Disallow initializing variables to `undefined`",
    docsUrl: "https://eslint.org/docs/rules/no-undef-init",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unneeded-ternary": {
    description: "Disallow ternary operators when simpler alternatives exist",
    docsUrl: "https://eslint.org/docs/rules/no-unneeded-ternary",
    js: {
      entry: '["error", { "defaultAssignment": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "defaultAssignment": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-unreachable": {
    description:
      "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
    docsUrl: "https://eslint.org/docs/rules/no-unreachable",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-unreachable-loop": {
    description: "Disallow loops with a body that allows only one iteration",
    docsUrl: "https://eslint.org/docs/rules/no-unreachable-loop",
    js: { entry: '["error", { "ignore": [] }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "ignore": [] }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unsafe-finally": {
    description: "Disallow control flow statements in `finally` blocks",
    docsUrl: "https://eslint.org/docs/rules/no-unsafe-finally",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unsafe-negation": {
    description: "Disallow negating the left operand of relational operators",
    docsUrl: "https://eslint.org/docs/rules/no-unsafe-negation",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-unsafe-optional-chaining": {
    description:
      "Disallow use of optional chaining in contexts where the `undefined` value is not allowed",
    docsUrl: "https://eslint.org/docs/rules/no-unsafe-optional-chaining",
    js: {
      entry: '["error", { "disallowArithmeticOperators": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "disallowArithmeticOperators": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-unused-expressions": {
    description: "Disallow unused expressions",
    docsUrl: "https://eslint.org/docs/rules/no-unused-expressions",
    js: {
      entry:
        '[\n  "error",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "allowShortCircuit": true,\n    "allowTaggedTemplates": true,\n    "allowTernary": true,\n    "enforceForJSX": false\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-unused-labels": {
    description: "Disallow unused labels",
    docsUrl: "https://eslint.org/docs/rules/no-unused-labels",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-unused-vars": {
    description: "Disallow unused variables",
    docsUrl: "https://eslint.org/docs/rules/no-unused-vars",
    js: {
      entry:
        '[\n  "warn",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "warn",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "off",\n  {\n    "args": "after-used",\n    "argsIgnorePattern": "^_",\n    "ignoreRestSiblings": true,\n    "vars": "all"\n  }\n]\n',
      level: "off",
    },
    updates: ["2.0.0"],
  },
  "no-useless-backreference": {
    description: "Disallow useless backreferences in regular expressions",
    docsUrl: "https://eslint.org/docs/rules/no-useless-backreference",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-catch": {
    description: "Disallow unnecessary `catch` clauses",
    docsUrl: "https://eslint.org/docs/rules/no-useless-catch",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-computed-key": {
    description:
      "Disallow unnecessary computed property keys in object literals",
    docsUrl: "https://eslint.org/docs/rules/no-useless-computed-key",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-concat": {
    description:
      "Disallow unnecessary concatenation of literals or template literals",
    docsUrl: "https://eslint.org/docs/rules/no-useless-concat",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-constructor": {
    description: "Disallow unnecessary constructors",
    docsUrl: "https://eslint.org/docs/rules/no-useless-constructor",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["off"]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "no-useless-escape": {
    description: "Disallow unnecessary escape characters",
    docsUrl: "https://eslint.org/docs/rules/no-useless-escape",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-useless-rename": {
    description:
      "Disallow renaming import, export, and destructured assignments to the same name",
    docsUrl: "https://eslint.org/docs/rules/no-useless-rename",
    js: {
      entry:
        '[\n  "error",\n  { "ignoreDestructuring": false, "ignoreExport": false, "ignoreImport": false }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  { "ignoreDestructuring": false, "ignoreExport": false, "ignoreImport": false }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "no-useless-return": {
    description: "Disallow redundant return statements",
    docsUrl: "https://eslint.org/docs/rules/no-useless-return",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-var": {
    description: "Require `let` or `const` instead of `var`",
    docsUrl: "https://eslint.org/docs/rules/no-var",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-void": {
    description: "Disallow void operators",
    docsUrl: "https://eslint.org/docs/rules/no-void",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "no-with": {
    description: "Disallow `with` statements",
    docsUrl: "https://eslint.org/docs/rules/no-with",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "object-shorthand": {
    description:
      "Require or disallow method and property shorthand syntax for object literals",
    docsUrl: "https://eslint.org/docs/rules/object-shorthand",
    js: {
      entry:
        '["error", "always", { "avoidQuotes": true, "ignoreConstructors": false }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", "always", { "avoidQuotes": true, "ignoreConstructors": false }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "one-var": {
    description:
      "Enforce variables to be declared either together or separately in functions",
    docsUrl: "https://eslint.org/docs/rules/one-var",
    js: { entry: '["error", "never"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "never"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "operator-assignment": {
    description:
      "Require or disallow assignment operator shorthand where possible",
    docsUrl: "https://eslint.org/docs/rules/operator-assignment",
    js: { entry: '["error", "always"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "always"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-arrow-callback": {
    description: "Require using arrow functions for callbacks",
    docsUrl: "https://eslint.org/docs/rules/prefer-arrow-callback",
    js: {
      entry:
        '["error", { "allowNamedFunctions": false, "allowUnboundThis": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", { "allowNamedFunctions": false, "allowUnboundThis": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-const": {
    description:
      "Require `const` declarations for variables that are never reassigned after declared",
    docsUrl: "https://eslint.org/docs/rules/prefer-const",
    js: {
      entry:
        '["error", { "destructuring": "any", "ignoreReadBeforeAssign": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '["error", { "destructuring": "any", "ignoreReadBeforeAssign": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-destructuring": {
    description: "Require destructuring from arrays and/or objects",
    docsUrl: "https://eslint.org/docs/rules/prefer-destructuring",
    js: {
      entry:
        '[\n  "error",\n  {\n    "AssignmentExpression": { "array": true, "object": false },\n    "VariableDeclarator": { "array": false, "object": true }\n  },\n  { "enforceForRenamedProperties": false }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "AssignmentExpression": { "array": true, "object": false },\n    "VariableDeclarator": { "array": false, "object": true }\n  },\n  { "enforceForRenamedProperties": false }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-exponentiation-operator": {
    description: "Disallow the use of `Math.pow` in favor of the `**` operator",
    docsUrl: "https://eslint.org/docs/rules/prefer-exponentiation-operator",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-numeric-literals": {
    description:
      "Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals",
    docsUrl: "https://eslint.org/docs/rules/prefer-numeric-literals",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-object-spread": {
    description:
      "Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead",
    docsUrl: "https://eslint.org/docs/rules/prefer-object-spread",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-promise-reject-errors": {
    description: "Require using Error objects as Promise rejection reasons",
    docsUrl: "https://eslint.org/docs/rules/prefer-promise-reject-errors",
    js: { entry: '["error", { "allowEmptyReject": true }]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", { "allowEmptyReject": true }]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-regex-literals": {
    description:
      "Disallow use of the `RegExp` constructor in favor of regular expression literals",
    docsUrl: "https://eslint.org/docs/rules/prefer-regex-literals",
    js: {
      entry: '["error", { "disallowRedundantWrapping": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry: '["error", { "disallowRedundantWrapping": true }]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "prefer-rest-params": {
    description: "Require rest parameters instead of `arguments`",
    docsUrl: "https://eslint.org/docs/rules/prefer-rest-params",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-spread": {
    description: "Require spread operators instead of `.apply()`",
    docsUrl: "https://eslint.org/docs/rules/prefer-spread",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "prefer-template": {
    description: "Require template literals instead of string concatenation",
    docsUrl: "https://eslint.org/docs/rules/prefer-template",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  radix: {
    description:
      "Enforce the consistent use of the radix argument when using `parseInt()`",
    docsUrl: "https://eslint.org/docs/rules/radix",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "require-yield": {
    description: "Require generator functions to contain `yield`",
    docsUrl: "https://eslint.org/docs/rules/require-yield",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "simple-import-sort/exports": {
    description: "Enforce sorting of the exports",
    docsUrl: "https://github.com/lydell/eslint-plugin-simple-import-sort",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "simple-import-sort/imports": {
    description: "Enforce sorting of the imports",
    docsUrl: "https://github.com/lydell/eslint-plugin-simple-import-sort",
    js: {
      entry:
        '[\n  "error",\n  {\n    "groups": [\n      [\n        "^\\\\u0000",\n        "^react(/.*)?(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^\\\\..*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(\\\\u0000$)$",\n        "^(@\\\\/|~[^/]*\\\\/).*(\\\\u0000$)$",\n        "^\\\\..*(\\\\u0000$)$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(.(css|scss|sass|less))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(.(css|scss|sass|less))$",\n        "^\\\\..*(.(css|scss|sass|less))$"\n      ]\n    ]\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  {\n    "groups": [\n      [\n        "^\\\\u0000",\n        "^react(/.*)?(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^\\\\..*(?<!(.(css|scss|sass|less)|\\\\u0000$))$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(\\\\u0000$)$",\n        "^(@\\\\/|~[^/]*\\\\/).*(\\\\u0000$)$",\n        "^\\\\..*(\\\\u0000$)$",\n        "^(?!(@\\\\/|~[^/]*\\\\/))(@?\\\\w).*(.(css|scss|sass|less))$",\n        "^(@\\\\/|~[^/]*\\\\/).*(.(css|scss|sass|less))$",\n        "^\\\\..*(.(css|scss|sass|less))$"\n      ]\n    ]\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  "spaced-comment": {
    description:
      "Enforce consistent spacing after the `//` or `/*` in a comment",
    docsUrl: "https://eslint.org/docs/rules/spaced-comment",
    js: {
      entry:
        '[\n  "error",\n  "always",\n  {\n    "block": {\n      "balanced": true,\n      "exceptions": ["-", "+"],\n      "markers": ["=", "!", ":", "::"]\n    },\n    "line": { "exceptions": ["-", "+"], "markers": ["=", "!", "/"] }\n  }\n]\n',
      level: "error",
    },
    state: "unchanged",
    ts: {
      entry:
        '[\n  "error",\n  "always",\n  {\n    "block": {\n      "balanced": true,\n      "exceptions": ["-", "+"],\n      "markers": ["=", "!", ":", "::"]\n    },\n    "line": { "exceptions": ["-", "+"], "markers": ["=", "!", "/"] }\n  }\n]\n',
      level: "error",
    },
    updates: ["2.0.0"],
  },
  strict: {
    description: "Require or disallow strict mode directives",
    docsUrl: "https://eslint.org/docs/rules/strict",
    js: { entry: '["error", "never"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error", "never"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "symbol-description": {
    description: "Require symbol descriptions",
    docsUrl: "https://eslint.org/docs/rules/symbol-description",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "use-isnan": {
    description: "Require calls to `isNaN()` when checking for `NaN`",
    docsUrl: "https://eslint.org/docs/rules/use-isnan",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "valid-typeof": {
    description: "Enforce comparing `typeof` expressions against valid strings",
    docsUrl: "https://eslint.org/docs/rules/valid-typeof",
    js: {
      entry: '["error", { "requireStringLiterals": true }]\n',
      level: "error",
    },
    state: "unchanged",
    ts: { entry: '["off", { "requireStringLiterals": true }]\n', level: "off" },
    updates: ["2.0.0"],
  },
  "vars-on-top": {
    description:
      "Require `var` declarations be placed at the top of their containing scope",
    docsUrl: "https://eslint.org/docs/rules/vars-on-top",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  yoda: {
    description: 'Require or disallow "Yoda" conditions',
    docsUrl: "https://eslint.org/docs/rules/yoda",
    js: { entry: '["error"]\n', level: "error" },
    state: "unchanged",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
};
