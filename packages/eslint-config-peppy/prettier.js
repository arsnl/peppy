/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./configs/prettier.js"].map(require.resolve),
};
