module.exports = {
  extends: ["./rules/base", "./rules/peppy", "./rules/prettier"].map(
    require.resolve
  ),
};
