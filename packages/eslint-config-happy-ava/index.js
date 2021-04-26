module.exports = {
  extends: ["./rules/ava", "eslint-config-prettier"].map(require.resolve),
};
