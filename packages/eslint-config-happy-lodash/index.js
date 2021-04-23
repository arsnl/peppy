module.exports = {
  extends: [...["./rules/lodash"].map(require.resolve), "prettier"],
  rules: {},
};
