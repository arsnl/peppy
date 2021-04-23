module.exports = {
  extends: [...["./rules/jest"].map(require.resolve), "prettier"],
  rules: {},
};
