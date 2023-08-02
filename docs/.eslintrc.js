/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["peppy", "peppy/next", "peppy/tailwindcss"],
  root: true,
  parserOptions: { tsconfigRootDir: __dirname, project: "./tsconfig.json" },
};
