module.exports = {
  extends: ["./rules/base.js", "./rules/prettier.js"].map(require.resolve),
};
