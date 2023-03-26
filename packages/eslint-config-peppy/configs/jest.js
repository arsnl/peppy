/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  env: {
    "jest/globals": true,
  },
  /*
  rules: {
    "jest/no-alias-methods": ["warn"],
    "jest/prefer-to-be": ["error"],
    "jest/prefer-to-contain": ["error"],
    "jest/prefer-to-have-length": ["error"],
    "jest/expect-expect": ["warn"],
    "jest/no-commented-out-tests": ["warn"],
    "jest/no-conditional-expect": ["error"],
    "jest/no-deprecated-functions": ["error"],
    "jest/no-disabled-tests": ["warn"],
    "jest/no-done-callback": ["error"],
    "jest/no-export": ["error"],
    "jest/no-focused-tests": ["error"],
    "jest/no-identical-title": ["error"],
    "jest/no-interpolation-in-snapshots": ["error"],
    "jest/no-jasmine-globals": ["error"],
    "jest/no-mocks-import": ["error"],
    "jest/no-standalone-expect": ["error"],
    "jest/no-test-prefixes": ["error"],
    "jest/valid-describe-callback": ["error"],
    "jest/valid-expect-in-promise": ["error"],
    "jest/valid-expect": ["error"],
    "jest/valid-title": ["error"],
  },
  */
};
