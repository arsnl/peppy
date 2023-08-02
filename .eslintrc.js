/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["peppy", "peppy/jest"],
  parserOptions: { tsconfigRootDir: __dirname, project: "./tsconfig.json" },
};
