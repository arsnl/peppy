const { rules: baseRules, settings: baseSettings } = require("./base");

module.exports = {
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [
          ...baseSettings["import/resolver"].node.extensions,
          ".ts",
          ".tsx",
        ],
      },
    },
    "import/extensions": [...baseSettings["import/extensions"], ".ts", ".tsx"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: "module",
        jsx: true,
        project: "tsconfig.json",
      },
      rules: {
        "@typescript-eslint/dot-notation": baseRules["dot-notation"],
        "@typescript-eslint/lines-between-class-members":
          baseRules["lines-between-class-members"],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
        ],
        "@typescript-eslint/no-array-constructor":
          baseRules["no-array-constructor"],
        "@typescript-eslint/no-dupe-class-members":
          baseRules["no-dupe-class-members"],
        "@typescript-eslint/no-empty-function": baseRules["no-empty-function"],
        "@typescript-eslint/no-implied-eval": baseRules["no-implied-eval"],
        "@typescript-eslint/no-loop-func": baseRules["no-loop-func"],
        "@typescript-eslint/no-redeclare": baseRules["no-redeclare"],
        "@typescript-eslint/no-shadow": baseRules["no-shadow"],
        "@typescript-eslint/no-throw-literal": baseRules["no-throw-literal"],
        "@typescript-eslint/no-unused-expressions":
          baseRules["no-unused-expressions"],
        "@typescript-eslint/no-unused-vars": baseRules["no-unused-vars"],
        "@typescript-eslint/no-use-before-define":
          baseRules["no-use-before-define"],
        "@typescript-eslint/no-useless-constructor":
          baseRules["no-useless-constructor"],
        "@typescript-eslint/triple-slash-reference": [
          "error",
          { path: "never", types: "never", lib: "never" },
        ],

        // Extend rules
        "import/extensions": [
          baseRules["import/extensions"][0],
          baseRules["import/extensions"][1],
          {
            ...baseRules["import/extensions"][2],
            ts: "never",
            tsx: "never",
          },
        ],

        // TODO: find a solution for monorepo
        // "import/no-extraneous-dependencies": [
        //   baseRules["import/no-extraneous-dependencies"][0],
        //   {
        //     ...baseRules["import/no-extraneous-dependencies"][1],
        //     devDependencies: baseRules[
        //       "import/no-extraneous-dependencies"
        //     ][1].devDependencies.map((glob) =>
        //       glob.replace("js,jsx", "js,jsx,ts,tsx")
        //     ),
        //   },
        // ],

        // These rules should be disabled
        camelcase: "off",
        "constructor-super": "off",
        "dot-notation": "off",
        "getter-return": "off",
        "import/named": "off",
        "import/no-unresolved": "off",
        "lines-between-class-members": "off",
        "no-array-constructor": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-empty-function": "off",
        "no-func-assign": "off",
        "no-implied-eval": "off",
        "no-loop-func": "off",
        "no-new-func": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-shadow": "off",
        "no-this-before-super": "off",
        "no-throw-literal": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "valid-typeof": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
};
