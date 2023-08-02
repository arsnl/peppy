/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["peppy"],
  parserOptions: { tsconfigRootDir: __dirname, project: "./tsconfig.json" },
};
