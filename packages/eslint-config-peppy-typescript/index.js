module.exports = {
  extends: ["./rules/typescript", "eslint-config-prettier"].map(
    require.resolve
  ),
};
