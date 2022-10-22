const { rules } = require("./base");

module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  rules: {
    camelcase: "off",
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
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],

    // Rules mirroring
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": rules["default-param-last"],
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": rules["dot-notation"],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members":
      rules["lines-between-class-members"],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": rules["no-array-constructor"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": rules["no-dupe-class-members"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": rules["no-empty-function"],
    "no-implied-eval": "off",
    "no-new-func": "off",
    "@typescript-eslint/no-implied-eval": rules["no-implied-eval"],
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": rules["no-loss-of-precision"],
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": rules["no-loop-func"],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": rules["no-redeclare"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": rules["no-shadow"],
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": rules["no-throw-literal"],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": rules["no-unused-expressions"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": rules["no-unused-vars"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor":
      rules["no-useless-constructor"],
    "no-return-await": "off",
    "@typescript-eslint/return-await": [
      rules["no-return-await"],
      "in-try-catch",
    ],
    "import/extensions": [
      rules["import/extensions"][0],
      rules["import/extensions"][1],
      {
        ...rules["import/extensions"][2],
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      rules["import/no-extraneous-dependencies"][0],
      {
        ...rules["import/no-extraneous-dependencies"][1],
        devDependencies: rules[
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
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
      },
    },
  ],
};
