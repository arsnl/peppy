/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./configs/tailwindcss.js", "./configs/prettier.js"].map(
    require.resolve,
  ),
};
