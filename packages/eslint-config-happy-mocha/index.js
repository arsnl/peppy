module.exports = {
  extends: [...["./rules/mocha"].map(require.resolve), "prettier"],
  rules: {},
};
