module.exports = {
  extends: [...["./rules/ava"].map(require.resolve), "prettier"],
  rules: {},
};
