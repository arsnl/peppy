/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["peppy", "peppy/next", "peppy/tailwindcss"],
  parserOptions: { tsconfigRootDir: __dirname, project: "./tsconfig.json" },
};
