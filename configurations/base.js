const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  reportUnusedDisableDirectives: true,
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".jsx", ".json"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
  plugins: [
    "promise",
    "import",
    "simple-import-sort",
    "fp",
    "regexp",
    "security",
    "unicorn",
  ],
  rules: {
    /**
     * eslint rules
     */
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    camelcase: "error",
    "class-methods-use-this": "error",
    "consistent-return": "error",
    "constructor-super": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "for-direction": "error",
    "func-names": "warn",
    "func-style": ["error", "expression"],
    "guard-for-in": "error",
    "lines-around-directive": [
      "error",
      {
        after: "always",
        before: "always",
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: false,
      },
    ],
    "max-classes-per-file": ["error", 1],
    "max-depth": ["error", 4],
    "max-nested-callbacks": ["error", 4],
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
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "warn",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": [
      "error",
      {
        exceptions: [],
      },
    ],
    "no-implicit-coercion": [
      "error",
      {
        allow: [],
        boolean: false,
        number: true,
        string: true,
      },
    ],
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
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
        ignorePropertyModificationsForRegex: ["^draft"],
        props: true,
      },
    ],
    "no-plusplus": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["default", "then"],
      },
    ],
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message: "Use Number.isFinite instead",
      },
      {
        name: "isNaN",
        message: "Use Number.isNaN instead",
      },
    ].concat(confusingBrowserGlobals),
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
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": [
      "error",
      {
        allow: [],
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: true,
      },
    ],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable": "error",
    "no-unreachable-loop": [
      "error",
      {
        ignore: [],
      },
    ],
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: false,
        allowTernary: true,
      },
    ],
    "no-unused-labels": "error",
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "no-use-before-define": [
      "error",
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    "no-useless-backreference": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: "multiline-block-like",
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
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
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    "require-yield": "error",
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
    strict: ["error", "never"],
    "symbol-description": "error",
    "use-isnan": "error",
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    "vars-on-top": "error",
    yoda: "error",

    "no-async-promise-executor": "error",

    "no-promise-executor-return": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    /**
     * promise rules
     */
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    /**
     * import rules
     */
    "import/export": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "import/first": "error",
    "import/named": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-cycle": "error",
    "import/no-default-export": "warn",
    "import/no-duplicates": "error",
    // TODO: find a solution for monorepo
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     devDependencies: [
    //       "test/**", // tape, common npm pattern
    //       "tests/**", // also common npm pattern
    //       "spec/**", // mocha, rspec-like pattern
    //       "**/__tests__/**", // jest pattern
    //       "**/__mocks__/**", // jest pattern
    //       "test.{js,jsx}", // repos with a single test file
    //       "test-*.{js,jsx}", // repos with multiple top-level test files
    //       "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
    //       "**/jest.config.js", // jest config
    //       "**/jest.setup.js", // jest setup
    //       "**/vue.config.js", // vue-cli config
    //       "**/webpack.config.js", // webpack config
    //       "**/webpack.config.*.js", // webpack config
    //       "**/rollup.config.js", // rollup config
    //       "**/rollup.config.*.js", // rollup config
    //       "**/gulpfile.js", // gulp config
    //       "**/gulpfile.*.js", // gulp config
    //       "**/Gruntfile{,.js}", // grunt config
    //       "**/protractor.conf.js", // protractor config
    //       "**/protractor.conf.*.js", // protractor config
    //       "**/karma.conf.js", // karma config
    //     ],
    //     optionalDependencies: false,
    //   },
    // ],
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true,
        commonjs: true,
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true,
      },
    ],
    "import/no-webpack-loader-syntax": "error",
    /**
     * simple-import-sort rules
     */
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^react", "^@?\\w", "^~", "^", "^\\."],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    /**
     * fp rules
     */
    "fp/no-arguments": "error",
    "fp/no-class": "error",
    "fp/no-get-set": "error",
    "fp/no-loops": "error",
    "fp/no-mutating-assign": "error",
    "fp/no-proxy": "error",
    "fp/no-this": "error",
    "fp/no-valueof-field": "error",
    /**
     * regexp rules
     */
    "regexp/match-any": "error",
    "regexp/no-assertion-capturing-group": "error",
    "regexp/no-dupe-characters-character-class": "error",
    "regexp/no-empty-group": "error",
    "regexp/no-empty-lookarounds-assertion": "error",
    "regexp/no-escape-backspace": "error",
    "regexp/no-invisible-character": "error",
    "regexp/no-octal": "error",
    "regexp/no-useless-exactly-quantifier": "error",
    "regexp/no-useless-two-nums-quantifier": "error",
    "regexp/prefer-d": "error",
    "regexp/prefer-plus-quantifier": "error",
    "regexp/prefer-question-quantifier": "error",
    "regexp/prefer-star-quantifier": "error",
    "regexp/prefer-t": "error",
    "regexp/prefer-w": "error",
    /**
     * security rules
     */
    "security/detect-buffer-noassert": "error",
    // TODO: Reactivate when the false positive will be fixed. Currently spawn return false positive
    // "security/detect-child-process": "error",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-new-buffer": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-regexp": "error",
    "security/detect-non-literal-require": "error",
    "security/detect-possible-timing-attacks": "error",
    "security/detect-pseudoRandomBytes": "error",
    "security/detect-unsafe-regex": "error",
    /**
     * unicorn rules
     */
    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/error-message": "error",
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-unused-properties": "warn",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/throw-new-error": "error",
  },
  overrides: [
    {
      // Disable the import/no-default-export rule for files we know that use default export
      // TODO: Check to add other knowns files that need default exports
      files: [
        "**/pages/**/*.*", // NextJS
        "**/rollup.config.js", // Rollup
        "**/rollup.config.*.js", // Rollup
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
