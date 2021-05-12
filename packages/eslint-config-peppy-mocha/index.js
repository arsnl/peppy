module.exports = {
  extends: ["./rules/mocha", "eslint-config-prettier"].map(require.resolve),
};
