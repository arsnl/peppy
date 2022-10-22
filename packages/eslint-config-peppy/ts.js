module.exports = {
  extends: ["./rules/base.js", "./rules/base-ts.js", "./rules/prettier.js"].map(
    require.resolve
  ),
};
