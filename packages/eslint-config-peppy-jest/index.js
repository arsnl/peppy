module.exports = {
  extends: ["./rules/jest", "eslint-config-prettier"].map(require.resolve),
};
