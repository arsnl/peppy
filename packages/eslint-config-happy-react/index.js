module.exports = {
  extends: [
    ...["./rules/react", "./rules/react-hooks.js", "./rules/react-a11y"].map(
      require.resolve
    ),
    "prettier",
  ],
  rules: {},
};
