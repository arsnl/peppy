module.exports = {
  plugins: ["mocha"],
  env: {
    mocha: true,
  },
  rules: {
    "mocha/max-top-level-suites": [
      "error",
      {
        limit: 1,
      },
    ],
    "mocha/no-exclusive-tests": "error",
    "mocha/no-exports": "error",
    "mocha/no-hooks-for-single-case": "warn",
    "mocha/no-identical-title": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-return-from-async": "error",
    "mocha/no-setup-in-describe": "error",
    "mocha/no-top-level-hooks": "error",
  },
};
