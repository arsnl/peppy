module.exports = {
  extends: [...["./rules/ramda"].map(require.resolve), "prettier"],
  rules: {},
};
