const keptPaths = [];
const sortedPaths = [];
const cwd = process.cwd().replace(/\\/g, "/");
const originalPaths = require.resolve.paths("eslint-plugin-import");

for (let i = originalPaths.length - 1; i >= 0; i -= 1) {
  const currentPath = originalPaths[i];

  if (currentPath.replace(/\\/g, "/").startsWith(cwd)) {
    sortedPaths.push(currentPath);
  } else {
    keptPaths.unshift(currentPath);
  }
}

// maintain order of node_modules outside of cw
sortedPaths.push(...keptPaths);

const hookPropertyMap = new Map(
  [
    ["eslint-plugin-import", "eslint-plugin-import"],
    ["eslint-plugin-react", "eslint-plugin-react"],
    ["eslint-plugin-jsx-a11y", "eslint-plugin-jsx-a11y"],
  ].map(([request, replacement]) => [
    request,
    require.resolve(replacement, { paths: sortedPaths }),
  ])
);

const mod = require("module");

const resolveFilename = mod._resolveFilename;
mod._resolveFilename = (request, parent, isMain, options) => {
  const hookResolved = hookPropertyMap.get(request);
  if (hookResolved) {
    // eslint-disable-next-line no-param-reassign
    request = hookResolved;
  }
  return resolveFilename.call(mod, request, parent, isMain, options);
};

require("@rushstack/eslint-patch/modern-module-resolution");

// TODO: check for usage of globals
const importAliases = "(@\\/|~[^/]*\\/)"; // support path aliases starting with @/ or ~.*/
const importStyleExts = "(css|scss|sass|less)";

const baseConfig = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    // TODO: validate the ecmaFeatures base config
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
    project: "./tsconfig.json",
  },
  plugins: ["import", "simple-import-sort"],
  reportUnusedDisableDirectives: true,
  rules: {
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
        checkForEach: false,
      },
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    "block-scoped-var": ["error"],
    camelcase: [
      "error",
      {
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: "never",
      },
    ],
    "class-methods-use-this": [
      "error",
      {
        enforceForClassFields: true,
        exceptMethods: [],
      },
    ],
    curly: ["error", "all"],
    "consistent-return": ["error"],
    "constructor-super": ["error"],
    "default-case": [
      "error",
      {
        commentPattern: "^no default$",
      },
    ],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
        allowPattern: "",
      },
    ],
    eqeqeq: ["error", "always"],
    "for-direction": ["error"],
    "func-names": ["warn"],
    "getter-return": [
      "error",
      {
        allowImplicit: true,
      },
    ],
    "global-require": ["error"],
    "grouped-accessor-pairs": ["error"],
    "guard-for-in": ["error"],
    "import/export": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "import/first": ["error"],
    "import/named": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-absolute-path": ["error"],
    "import/no-amd": ["error"],
    "import/no-cycle": [
      "error",
      {
        ignoreExternal: false,
        maxDepth: "∞",
      },
    ],
    "import/no-duplicates": ["error"],
    "import/no-dynamic-require": ["error"],
    "import/no-extraneous-dependencies": [
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
    ],
    "import/no-import-module-exports": [
      "error",
      {
        exceptions: [],
      },
    ],
    "import/no-mutable-exports": ["error"],
    "import/no-named-as-default": ["error"],
    "import/no-named-as-default-member": ["error"],
    "import/no-named-default": ["error"],
    "import/no-relative-packages": ["error"],
    "import/no-self-import": ["error"],
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true,
        caseSensitiveStrict: false,
        commonjs: true,
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true,
      },
    ],
    "import/no-webpack-loader-syntax": ["error"],
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
        properties: true,
      },
    ],
    "no-alert": ["warn"],
    "no-array-constructor": ["error"],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-bitwise": ["error"],
    "no-buffer-constructor": ["error"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error", "always"],
    "no-console": ["warn"],
    "no-const-assign": ["error"],
    "no-constant-condition": ["warn"],
    "no-constructor-return": ["error"],
    "no-continue": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-delete-var": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty": ["error"],
    "no-empty-character-class": ["error"],
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    "no-empty-pattern": ["error"],
    "no-eval": ["error"],
    "no-ex-assign": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-extra-label": ["error"],
    "no-fallthrough": ["error"],
    "no-func-assign": ["error"],
    "no-global-assign": [
      "error",
      {
        exceptions: [],
      },
    ],
    "no-implied-eval": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-loss-of-precision": ["error"],
    "no-misleading-character-class": ["error"],
    "no-multi-assign": ["error"],
    "no-multi-str": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-object": ["error"],
    "no-new-require": ["error"],
    "no-new-symbol": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-obj-calls": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
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
        props: true,
      },
    ],
    "no-path-concat": ["error"],
    "no-plusplus": ["error"],
    "no-promise-executor-return": ["error"],
    "no-proto": ["error"],
    "no-prototype-builtins": ["error"],
    "no-redeclare": ["error"],
    "no-regex-spaces": ["error"],
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
        message: "Use Number.isFinite instead.",
      },
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
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
    ],
    "no-restricted-properties": [
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
    ],
    "no-restricted-syntax": [
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
    ],
    "no-return-assign": ["error", "always"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-setter-return": ["error"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-this-before-super": ["error"],
    "no-throw-literal": ["error"],
    "no-undef": ["error"],
    "no-undef-init": ["error"],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable": ["error"],
    "no-unreachable-loop": [
      "error",
      {
        ignore: [],
      },
    ],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error"],
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    "no-unused-labels": ["error"],
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "no-useless-backreference": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "no-void": ["error"],
    "no-with": ["error"],
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
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
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
    "prefer-exponentiation-operator": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-object-spread": ["error"],
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    radix: ["error"],
    "require-yield": ["error"],
    "simple-import-sort/exports": ["error"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            // Packages
            `^\\u0000`, // Side effects
            `^react(/.*)?(?<!(.${importStyleExts}|\\u0000$))$`, // React
            `^(?!${importAliases})(@?\\w).*(?<!(.${importStyleExts}|\\u0000$))$`, // Packages
            `^${importAliases}.*(?<!(.${importStyleExts}|\\u0000$))$`, // Absolutes
            `^\\..*(?<!(.${importStyleExts}|\\u0000$))$`, // Relatives
            // Types
            `^(?!${importAliases})(@?\\w).*(\\u0000$)$`, // Packages
            `^${importAliases}.*(\\u0000$)$`, // Absolutes
            `^\\..*(\\u0000$)$`, // Relatives
            // Styles
            `^(?!${importAliases})(@?\\w).*(.${importStyleExts})$`, // Packages
            `^${importAliases}.*(.${importStyleExts})$`, // Absolutes
            `^\\..*(.${importStyleExts})$`,
          ],
        ],
      },
    ],
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
    "symbol-description": ["error"],
    "use-isnan": ["error"],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    "vars-on-top": ["error"],
    yoda: ["error"],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [
        ".ts",
        ".mts",
        ".cts",
        ".tsx",
        ".d.ts",
      ],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [
          ".mjs",
          ".cjs",
          ".js",
          ".jsx",
          ".mts",
          ".cts",
          ".ts",
          ".tsx",
          ".d.ts",
          ".json",
        ],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
    "import/extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".mts",
      ".cts",
      ".ts",
      ".tsx",
      ".d.ts",
    ],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
};

module.exports = {
  ...baseConfig,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "constructor-super": ["off"],
        "getter-return": ["off"],
        "import/named": ["off"],
        "import/no-named-as-default-member": ["off"],
        "import/no-unresolved": ["off"],
        "no-const-assign": ["off"],
        "no-dupe-args": ["off"],
        "no-dupe-keys": ["off"],
        "no-func-assign": ["off"],
        "no-import-assign": ["off"],
        "no-new-symbol": ["off"],
        "no-obj-calls": ["off"],
        "no-setter-return": ["off"],
        "no-this-before-super": ["off"],
        "no-undef": ["off"],
        "no-unreachable": ["off"],
        "no-unsafe-negation": ["off"],
        "valid-typeof": ["off"],
        camelcase: ["off"],
        "@typescript-eslint/naming-convention": [
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
        ],
        "@typescript-eslint/consistent-type-exports": ["error"],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],
        "default-param-last": ["off"],
        "@typescript-eslint/default-param-last":
          baseConfig.rules["default-param-last"],
        "dot-notation": ["off"],
        "@typescript-eslint/dot-notation": baseConfig.rules["dot-notation"],
        "lines-between-class-members": ["off"],
        "@typescript-eslint/lines-between-class-members":
          baseConfig.rules["lines-between-class-members"],
        "no-array-constructor": ["off"],
        "@typescript-eslint/no-array-constructor":
          baseConfig.rules["no-array-constructor"],
        "no-dupe-class-members": ["off"],
        "@typescript-eslint/no-dupe-class-members":
          baseConfig.rules["no-dupe-class-members"],
        "no-empty-function": ["off"],
        "@typescript-eslint/no-empty-function":
          baseConfig.rules["no-empty-function"],
        "no-implied-eval": ["off"],
        "no-new-func": ["off"],
        "@typescript-eslint/no-implied-eval":
          baseConfig.rules["no-implied-eval"],
        "no-loss-of-precision": ["off"],
        "@typescript-eslint/no-loss-of-precision":
          baseConfig.rules["no-loss-of-precision"],
        "no-loop-func": ["off"],
        "@typescript-eslint/no-loop-func": baseConfig.rules["no-loop-func"],
        "no-redeclare": ["off"],
        "@typescript-eslint/no-redeclare": [
          baseConfig.rules["no-redeclare"][0],
          { ignoreDeclarationMerge: true },
        ],
        "no-shadow": ["off"],
        "@typescript-eslint/no-shadow": baseConfig.rules["no-shadow"],
        "no-throw-literal": ["off"],
        "@typescript-eslint/no-throw-literal":
          baseConfig.rules["no-throw-literal"],
        "no-unused-expressions": ["off"],
        "@typescript-eslint/no-unused-expressions":
          baseConfig.rules["no-unused-expressions"],
        "no-unused-vars": ["off"],
        "@typescript-eslint/no-unused-vars": baseConfig.rules["no-unused-vars"],
        "no-useless-constructor": ["off"],
        "@typescript-eslint/no-useless-constructor":
          baseConfig.rules["no-useless-constructor"],
        "no-return-await": ["off"],
        "@typescript-eslint/return-await": [
          baseConfig.rules["no-return-await"][0],
          "in-try-catch",
        ],
        "import/extensions": [
          baseConfig.rules["import/extensions"][0],
          baseConfig.rules["import/extensions"][1],
          {
            ...baseConfig.rules["import/extensions"][2],
            ts: "never",
            tsx: "never",
          },
        ],
        "import/no-extraneous-dependencies": [
          baseConfig.rules["import/no-extraneous-dependencies"][0],
          {
            ...baseConfig.rules["import/no-extraneous-dependencies"][1],
            devDependencies: baseConfig.rules[
              "import/no-extraneous-dependencies"
            ][1].devDependencies.reduce((result, devDep) => {
              const toAppend = [devDep];
              const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, "ts$1");
              if (devDepWithTs !== devDep) {
                toAppend.push(devDepWithTs);
              }
              return [...result, ...toAppend];
            }, []),
          },
        ],
      },
    },
  ],
};
