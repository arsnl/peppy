module.exports = {
  extends: ["./rules/typescript-react", "eslint-config-prettier"].map(
    require.resolve
  ),
};
