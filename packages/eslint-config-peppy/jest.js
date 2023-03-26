/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./configs/jest.js", "./configs/prettier.js"].map(require.resolve),
};
