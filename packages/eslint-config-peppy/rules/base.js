const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  reportUnusedDisableDirectives: true,
  plugins: ["simple-import-sort", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".ts", ".json"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
  rules: {
    // https://eslint.org/docs/rules/accessor-pairs
    "accessor-pairs": "off",
    // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": ["off", "consistent"],
    // https://eslint.org/docs/rules/array-bracket-spacing
    "array-bracket-spacing": ["error", "never"],
    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    // https://eslint.org/docs/rules/array-element-newline
    "array-element-newline": [
      "off",
      {
        minItems: 3,
        multiline: true,
      },
    ],
    // https://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    // https://eslint.org/docs/rules/arrow-parens
    "arrow-parens": ["error", "always"],
    // https://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    // https://eslint.org/docs/rules/block-scoped-var
    "block-scoped-var": "error",
    // https://eslint.org/docs/rules/block-spacing
    "block-spacing": ["error", "always"],
    // https://eslint.org/docs/rules/brace-style
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    // https://eslint.org/docs/rules/callback-return
    "callback-return": "off",
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      "error",
      {
        ignoreDestructuring: false,
        properties: "never",
      },
    ],
    // https://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": [
      "off",
      "never",
      {
        block: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
      },
    ],
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [],
      },
    ],
    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    // https://eslint.org/docs/rules/comma-spacing
    "comma-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    // https://eslint.org/docs/rules/comma-style
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          NewExpression: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
        },
      },
    ],
    // https://eslint.org/docs/rules/complexity
    complexity: ["off", 20],
    // https://eslint.org/docs/rules/computed-property-spacing
    "computed-property-spacing": ["error", "never"],
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "error",
    // https://eslint.org/docs/rules/consistent-this
    "consistent-this": "off",
    // https://eslint.org/docs/rules/constructor-super
    "constructor-super": "error",
    // https://eslint.org/docs/rules/curly
    curly: ["error", "multi-line"],
    // https://eslint.org/docs/rules/default-case
    "default-case": [
      "error",
      {
        commentPattern: "^no default$",
      },
    ],
    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": "error",
    // https://eslint.org/docs/rules/default-param-last
    "default-param-last": "error",
    // https://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],
    // https://eslint.org/docs/rules/dot-notation
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    // https://eslint.org/docs/rules/eol-last
    "eol-last": ["error", "always"],
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    // https://eslint.org/docs/rules/for-direction
    "for-direction": "error",
    // https://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": ["error", "never"],
    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": [
      "off",
      "always",
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    // https://eslint.org/docs/rules/func-names
    "func-names": "warn",
    // https://eslint.org/docs/rules/func-style
    "func-style": ["off", "expression"],
    // https://eslint.org/docs/rules/function-call-argument-newline
    "function-call-argument-newline": ["error", "consistent"],
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": ["error", "multiline-arguments"],
    // https://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    // https://eslint.org/docs/rules/getter-return
    "getter-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    // https://eslint.org/docs/rules/global-require
    "global-require": "error",
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    "grouped-accessor-pairs": "error",
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "error",
    // https://eslint.org/docs/rules/handle-callback-err
    "handle-callback-err": "off",
    // https://eslint.org/docs/rules/id-denylist
    "id-denylist": "off",
    // https://eslint.org/docs/rules/id-length
    "id-length": "off",
    // https://eslint.org/docs/rules/id-match
    "id-match": "off",
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["error", "beside"],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    "import/default": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
    "import/dynamic-import-chunkname": [
      "off",
      {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    "import/export": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    "import/exports-last": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    "import/first": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    "import/group-exports": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/imports-first.md
    "import/imports-first": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
    "import/max-dependencies": [
      "off",
      {
        max: 10,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    "import/named": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    "import/namespace": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    "import/newline-after-import": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    "import/no-absolute-path": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    "import/no-amd": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    "import/no-anonymous-default-export": [
      "off",
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    "import/no-cycle": [
      "error",
      {
        maxDepth: "∞",
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    "import/no-default-export": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
    "import/no-deprecated": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    "import/no-duplicates": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    "import/no-dynamic-require": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "spec/**", // mocha, rspec-like pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{js,jsx}", // repos with a single test file
          "test-*.{js,jsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{js,jsx}", // tests files
          "**/jest.config.js", // jest config
          "**/jest.setup.js", // jest setup
          "**/vue.config.js", // vue-cli config
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
          "**/rollup.config.js", // rollup config
          "**/rollup.config.*.js", // rollup config
          "**/gulpfile.js", // gulp config
          "**/gulpfile.*.js", // gulp config
          "**/Gruntfile{,.js}", // grunt config
          "**/protractor.conf.js", // protractor config
          "**/protractor.conf.*.js", // protractor config
          "**/karma.conf.js", // karma config
          "**/.eslintrc.js",
        ],
        optionalDependencies: false,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    "import/no-import-module-exports": [
      "error",
      {
        exceptions: [],
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
    "import/no-internal-modules": [
      "off",
      {
        allow: [],
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    "import/no-named-as-default": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    "import/no-named-as-default-member": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    "import/no-named-default": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
    "import/no-named-export": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    "import/no-namespace": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    "import/no-relative-packages": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
    "import/no-relative-parent-imports": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
    "import/no-restricted-paths": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    "import/no-self-import": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
    "import/no-unassigned-import": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true,
        commonjs: true,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
    "import/no-unused-modules": [
      "off",
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true,
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "error",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    "import/order": [
      "off",
      {
        groups: [["builtin", "external", "internal"]],
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "off",
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
    "import/unambiguous": "off",
    // https://eslint.org/docs/rules/indent
    indent: [
      "error",
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoreComments: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ImportDeclaration: 1,
        ObjectExpression: 1,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    // https://eslint.org/docs/rules/init-declarations
    "init-declarations": "off",
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["off", "prefer-double"],
    // https://eslint.org/docs/rules/key-spacing
    "key-spacing": [
      "error",
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    // https://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
        overrides: {
          case: {
            after: true,
          },
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
        },
      },
    ],
    // https://eslint.org/docs/rules/line-comment-position
    "line-comment-position": [
      "off",
      {
        applyDefaultPatterns: true,
        ignorePattern: "",
        position: "above",
      },
    ],
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["error", "unix"],
    // https://eslint.org/docs/rules/lines-around-comment
    "lines-around-comment": "off",
    // https://eslint.org/docs/rules/lines-around-directive
    "lines-around-directive": [
      "error",
      {
        after: "always",
        before: "always",
      },
    ],
    // https://eslint.org/docs/rules/lines-between-class-members
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: false,
      },
    ],
    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": ["error", 1],
    // https://eslint.org/docs/rules/max-depth
    "max-depth": ["off", 4],
    // https://eslint.org/docs/rules/max-len
    "max-len": [
      "error",
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    // https://eslint.org/docs/rules/max-lines
    "max-lines": [
      "off",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // https://eslint.org/docs/rules/max-lines-per-function
    "max-lines-per-function": [
      "off",
      {
        IIFEs: true,
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // https://eslint.org/docs/rules/max-nested-callbacks
    "max-nested-callbacks": "off",
    // https://eslint.org/docs/rules/max-params
    "max-params": ["off", 3],
    // https://eslint.org/docs/rules/max-statements
    "max-statements": ["off", 10],
    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": [
      "off",
      {
        max: 1,
      },
    ],
    // https://eslint.org/docs/rules/multiline-comment-style
    "multiline-comment-style": ["off", "starred-block"],
    // https://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": ["off", "never"],
    // https://eslint.org/docs/rules/new-cap
    "new-cap": [
      "error",
      {
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],
    // https://eslint.org/docs/rules/new-parens
    "new-parens": "error",
    // https://eslint.org/docs/rules/newline-after-var
    "newline-after-var": "off",
    // https://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",
    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 4,
      },
    ],
    // https://eslint.org/docs/rules/no-alert
    "no-alert": "warn",
    // https://eslint.org/docs/rules/no-array-constructor
    "no-array-constructor": "error",
    // https://eslint.org/docs/rules/no-async-promise-executor
    "no-async-promise-executor": "error",
    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "error",
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",
    // https://eslint.org/docs/rules/no-buffer-constructor
    "no-buffer-constructor": "error",
    // https://eslint.org/docs/rules/no-caller
    "no-caller": "error",
    // https://eslint.org/docs/rules/no-case-declarations
    "no-case-declarations": "error",
    // https://eslint.org/docs/rules/no-catch-shadow
    "no-catch-shadow": "off",
    // https://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "error",
    // https://eslint.org/docs/rules/no-compare-neg-zero
    "no-compare-neg-zero": "error",
    // https://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": ["error", "always"],
    // https://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],
    // https://eslint.org/docs/rules/no-console
    "no-console": "warn",
    // https://eslint.org/docs/rules/no-const-assign
    "no-const-assign": "error",
    // https://eslint.org/docs/rules/no-constant-binary-expression
    "no-constant-binary-expression": "off",
    // https://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": "warn",
    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "error",
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "error",
    // https://eslint.org/docs/rules/no-control-regex
    "no-control-regex": "error",
    // https://eslint.org/docs/rules/no-debugger
    "no-debugger": "error",
    // https://eslint.org/docs/rules/no-delete-var
    "no-delete-var": "error",
    // https://eslint.org/docs/rules/no-div-regex
    "no-div-regex": "off",
    // https://eslint.org/docs/rules/no-dupe-args
    "no-dupe-args": "error",
    // https://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "error",
    // https://eslint.org/docs/rules/no-dupe-else-if
    "no-dupe-else-if": "error",
    // https://eslint.org/docs/rules/no-dupe-keys
    "no-dupe-keys": "error",
    // https://eslint.org/docs/rules/no-duplicate-case
    "no-duplicate-case": "error",
    // https://eslint.org/docs/rules/no-duplicate-imports
    "no-duplicate-imports": "off",
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    // https://eslint.org/docs/rules/no-empty
    "no-empty": "error",
    // https://eslint.org/docs/rules/no-empty-character-class
    "no-empty-character-class": "error",
    // https://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",
    // https://eslint.org/docs/rules/no-eq-null
    "no-eq-null": "off",
    // https://eslint.org/docs/rules/no-eval
    "no-eval": "error",
    // https://eslint.org/docs/rules/no-ex-assign
    "no-ex-assign": "error",
    // https://eslint.org/docs/rules/no-extend-native
    "no-extend-native": "error",
    // https://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": "error",
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "error",
    // https://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",
    // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        enforceForArrowConditionals: false,
        ignoreJSX: "all",
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],
    // https://eslint.org/docs/rules/no-extra-semi
    "no-extra-semi": "error",
    // https://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": "error",
    // https://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": "error",
    // https://eslint.org/docs/rules/no-func-assign
    "no-func-assign": "error",
    // https://eslint.org/docs/rules/no-global-assign
    "no-global-assign": [
      "error",
      {
        exceptions: [],
      },
    ],
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
      "off",
      {
        allow: [],
        boolean: false,
        number: true,
        string: true,
      },
    ],
    // https://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "off",
    // https://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": "error",
    // https://eslint.org/docs/rules/no-import-assign
    "no-import-assign": "error",
    // https://eslint.org/docs/rules/no-inline-comments
    "no-inline-comments": "off",
    // https://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": "error",
    // https://eslint.org/docs/rules/no-invalid-regexp
    "no-invalid-regexp": "error",
    // https://eslint.org/docs/rules/no-invalid-this
    "no-invalid-this": "off",
    // https://eslint.org/docs/rules/no-irregular-whitespace
    "no-irregular-whitespace": "error",
    // https://eslint.org/docs/rules/no-iterator
    "no-iterator": "error",
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",
    // https://eslint.org/docs/rules/no-labels
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "error",
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",
    // https://eslint.org/docs/rules/no-loop-func
    "no-loop-func": "error",
    // https://eslint.org/docs/rules/no-loss-of-precision
    "no-loss-of-precision": "error",
    // https://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": [
      "off",
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [],
        ignoreArrayIndexes: true,
      },
    ],
    // https://eslint.org/docs/rules/no-misleading-character-class
    "no-misleading-character-class": "error",
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [
      "error",
      {
        allowSamePrecedence: false,
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
      },
    ],
    // https://eslint.org/docs/rules/no-mixed-requires
    "no-mixed-requires": ["off", false],
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": "error",
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["error"],
    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],
    // https://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "error",
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    // https://eslint.org/docs/rules/no-native-reassign
    "no-native-reassign": "off",
    // https://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",
    // https://eslint.org/docs/rules/no-negated-in-lhs
    "no-negated-in-lhs": "off",
    // https://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": "error",
    // https://eslint.org/docs/rules/no-new
    "no-new": "error",
    // https://eslint.org/docs/rules/no-new-func
    "no-new-func": "error",
    // https://eslint.org/docs/rules/no-new-object
    "no-new-object": "error",
    // https://eslint.org/docs/rules/no-new-require
    "no-new-require": "error",
    // https://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "error",
    // https://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": "error",
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    "no-nonoctal-decimal-escape": "error",
    // https://eslint.org/docs/rules/no-obj-calls
    "no-obj-calls": "error",
    // https://eslint.org/docs/rules/no-octal
    "no-octal": "error",
    // https://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": "error",
    // https://eslint.org/docs/rules/no-param-reassign
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "context", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext",
        ],
        props: true,
      },
    ],
    // https://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",
    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "error",
    // https://eslint.org/docs/rules/no-process-env
    "no-process-env": "off",
    // https://eslint.org/docs/rules/no-process-exit
    "no-process-exit": "off",
    // https://eslint.org/docs/rules/no-promise-executor-return
    "no-promise-executor-return": "error",
    // https://eslint.org/docs/rules/no-proto
    "no-proto": "error",
    // https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "error",
    // https://eslint.org/docs/rules/no-redeclare
    "no-redeclare": "error",
    // https://eslint.org/docs/rules/no-regex-spaces
    "no-regex-spaces": "error",
    // https://eslint.org/docs/rules/no-restricted-exports
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["default", "then"],
      },
    ],
    // https://eslint.org/docs/rules/no-restricted-globals
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
      },
      {
        name: "isNaN",
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
      },
    ].concat(confusingBrowserGlobals),
    // https://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": [
      "off",
      {
        paths: [],
        patterns: [],
      },
    ],
    // https://eslint.org/docs/rules/no-restricted-modules
    "no-restricted-modules": "off",
    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        message: "arguments.callee is deprecated",
        object: "arguments",
        property: "callee",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "global",
        property: "isFinite",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "self",
        property: "isFinite",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "window",
        property: "isFinite",
      },
      {
        message: "Please use Number.isNaN instead",
        object: "global",
        property: "isNaN",
      },
      {
        message: "Please use Number.isNaN instead",
        object: "self",
        property: "isNaN",
      },
      {
        message: "Please use Number.isNaN instead",
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
    ],
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        selector: "ForOfStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
    ],
    // https://eslint.org/docs/rules/no-return-assign
    "no-return-assign": ["error", "always"],
    // https://eslint.org/docs/rules/no-return-await
    "no-return-await": "error",
    // https://eslint.org/docs/rules/no-script-url
    "no-script-url": "error",
    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    // https://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "error",
    // https://eslint.org/docs/rules/no-sequences
    "no-sequences": "error",
    // https://eslint.org/docs/rules/no-setter-return
    "no-setter-return": "error",
    // https://eslint.org/docs/rules/no-shadow
    "no-shadow": "error",
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "error",
    // https://eslint.org/docs/rules/no-spaced-func
    "no-spaced-func": "off",
    // https://eslint.org/docs/rules/no-sparse-arrays
    "no-sparse-arrays": "error",
    // https://eslint.org/docs/rules/no-sync
    "no-sync": "off",
    // https://eslint.org/docs/rules/no-tabs
    "no-tabs": "error",
    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",
    // https://eslint.org/docs/rules/no-ternary
    "no-ternary": "off",
    // https://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "error",
    // https://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": "error",
    // https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": [
      "error",
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    // https://eslint.org/docs/rules/no-undef
    "no-undef": "error",
    // https://eslint.org/docs/rules/no-undef-init
    "no-undef-init": "error",
    // https://eslint.org/docs/rules/no-undefined
    "no-undefined": "off",
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": [
      "error",
      {
        allow: [],
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: true,
      },
    ],
    // https://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error",
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "off",
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    // https://eslint.org/docs/rules/no-unreachable
    "no-unreachable": "error",
    // https://eslint.org/docs/rules/no-unreachable-loop
    "no-unreachable-loop": [
      "error",
      {
        ignore: [],
      },
    ],
    // https://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "error",
    // https://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "error",
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true,
      },
    ],
    // https://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],
    // https://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "error",
    // https://eslint.org/docs/rules/no-unused-private-class-members
    "no-unused-private-class-members": "off",
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": [
      "error",
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    // https://eslint.org/docs/rules/no-useless-backreference
    "no-useless-backreference": "error",
    // https://eslint.org/docs/rules/no-useless-call
    "no-useless-call": "off",
    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "error",
    // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "error",
    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",
    // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "error",
    // https://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "error",
    // https://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "error",
    // https://eslint.org/docs/rules/no-var
    "no-var": "error",
    // https://eslint.org/docs/rules/no-void
    "no-void": "error",
    // https://eslint.org/docs/rules/no-warning-comments
    "no-warning-comments": [
      "off",
      {
        location: "start",
        terms: ["todo", "fixme", "xxx"],
      },
    ],
    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",
    // https://eslint.org/docs/rules/no-with
    "no-with": "error",
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": [
      "error",
      "beside",
      {
        overrides: {},
      },
    ],
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": [
      "error",
      {
        ExportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
      },
    ],
    // https://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": ["error", "always"],
    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    // https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    // https://eslint.org/docs/rules/one-var
    "one-var": ["error", "never"],
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": ["error", "always"],
    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["error", "always"],
    // https://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": [
      "error",
      "before",
      {
        overrides: {
          "=": "none",
        },
      },
    ],
    // https://eslint.org/docs/rules/padded-blocks
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "never",
        switches: "never",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",
    // https://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: true,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",
    // https://eslint.org/docs/rules/prefer-named-capture-group
    "prefer-named-capture-group": "off",
    // https://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-numeric-literals": "error",
    // https://eslint.org/docs/rules/prefer-object-has-own
    "prefer-object-has-own": "off",
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "error",
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    // https://eslint.org/docs/rules/prefer-reflect
    "prefer-reflect": "off",
    // https://eslint.org/docs/rules/prefer-regex-literals
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    // https://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": "error",
    // https://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error",
    // https://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",
    // https://eslint.org/docs/rules/quote-props
    "quote-props": [
      "error",
      "as-needed",
      {
        keywords: false,
        numbers: false,
        unnecessary: true,
      },
    ],
    // https://eslint.org/docs/rules/quotes
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    // https://eslint.org/docs/rules/radix
    radix: "error",
    // https://eslint.org/docs/rules/require-atomic-updates
    "require-atomic-updates": "off",
    // https://eslint.org/docs/rules/require-await
    "require-await": "off",
    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",
    // https://eslint.org/docs/rules/require-unicode-regexp
    "require-unicode-regexp": "off",
    // https://eslint.org/docs/rules/require-yield
    "require-yield": "error",
    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["error", "never"],
    // https://eslint.org/docs/rules/semi
    semi: ["error", "always"],
    // https://eslint.org/docs/rules/semi-spacing
    "semi-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    // https://eslint.org/docs/rules/semi-style
    "semi-style": ["error", "last"],
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    "simple-import-sort/exports": "error",
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^\\u0000", // Side effect.
            "^@?\\w", // Packages.
            "^", // Absolute.
            "^\\.", // Relative.
            "^@?\\w.*\\u0000$", // Type - Packages.
            "^[^.].*\\u0000$", // Type - Absolute.
            "^\\..*\\u0000$",
          ],
        ],
      },
    ],
    // https://eslint.org/docs/rules/sort-imports
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    // https://eslint.org/docs/rules/sort-keys
    "sort-keys": [
      "off",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    // https://eslint.org/docs/rules/sort-vars
    "sort-vars": "off",
    // https://eslint.org/docs/rules/space-before-blocks
    "space-before-blocks": "error",
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
    // https://eslint.org/docs/rules/space-in-parens
    "space-in-parens": ["error", "never"],
    // https://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": "error",
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": [
      "error",
      {
        nonwords: false,
        overrides: {},
        words: true,
      },
    ],
    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          balanced: true,
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
        },
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
      },
    ],
    // https://eslint.org/docs/rules/strict
    strict: ["error", "never"],
    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    // https://eslint.org/docs/rules/symbol-description
    "symbol-description": "error",
    // https://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": "error",
    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": ["error", "never"],
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["error", "never"],
    // https://eslint.org/docs/rules/use-isnan
    "use-isnan": "error",
    // https://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "off",
    // https://eslint.org/docs/rules/valid-typeof
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    // https://eslint.org/docs/rules/vars-on-top
    "vars-on-top": "error",
    // https://eslint.org/docs/rules/wrap-iife
    "wrap-iife": [
      "error",
      "outside",
      {
        functionPrototypeMethods: false,
      },
    ],
    // https://eslint.org/docs/rules/wrap-regex
    "wrap-regex": "off",
    // https://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": ["error", "after"],
    // https://eslint.org/docs/rules/yoda
    yoda: "error",
  },
};
