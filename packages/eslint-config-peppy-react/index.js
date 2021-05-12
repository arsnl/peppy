module.exports = {
  extends: [
    "./rules/react",
    "./rules/react-hooks.js",
    "./rules/react-a11y",
    "eslint-config-prettier",
  ].map(require.resolve),
  rules: {},
};
