module.exports = {
  extends: ["./rules/node", "eslint-config-prettier"].map(require.resolve),
};
