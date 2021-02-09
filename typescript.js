module.exports = {
  extends: [
    require.resolve("./configurations/typescript"),
    "prettier",
    "prettier/unicorn",
    "prettier/@typescript-eslint",
  ],
};
