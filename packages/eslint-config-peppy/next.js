/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./configs/react.js",
    "./configs/next.js",
    "./configs/prettier.js",
  ].map(require.resolve),
};
