/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  env: {
    "jest/globals": true,
  },
};
