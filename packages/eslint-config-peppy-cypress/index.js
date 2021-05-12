module.exports = {
  extends: ["./rules/cypress", "eslint-config-prettier"].map(require.resolve),
};
