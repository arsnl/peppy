/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./configs/base.js", "./configs/prettier.js"].map(require.resolve),
};
