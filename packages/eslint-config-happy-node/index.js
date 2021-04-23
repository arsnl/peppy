module.exports = {
  extends: [...["./rules/node"].map(require.resolve), "prettier"],
  rules: {},
};
