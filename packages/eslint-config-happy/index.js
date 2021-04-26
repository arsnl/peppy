module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/simple-import-sort",
    "./rules/strict",
    "./rules/promise",
    "./rules/fp",
    "./rules/regexp",
    "./rules/security",
    "./rules/unicorn",
    "eslint-config-prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  reportUnusedDisableDirectives: true,
};
