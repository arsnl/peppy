module.exports = {
  plugins: ["jest"],
  env: {
    jest: true,
  },
  rules: {
    "jest/no-alias-methods": "error",
    "jest/no-conditional-expect": "error",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-done-callback": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-interpolation-in-snapshots": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-truthy-falsy": "error",
    "jest/prefer-expect-assertions": [
      "error",
      {
        onlyFunctionsWithAsyncKeyword: true,
      },
    ],
    "jest/prefer-spy-on": "error",
    "jest/prefer-to-contain": "error",
    "jest/valid-expect": "error",
    "jest/valid-title": "error",
  },
};
