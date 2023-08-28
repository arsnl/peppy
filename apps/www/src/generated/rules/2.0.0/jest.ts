// This file is generated automatically
// DO NOT EDIT IT MANUALLY
import { type Rules } from "@/types/eslint";

export const rules: Rules = {
  "jest/expect-expect": {
    description: "Enforce assertion to be made in a test body",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/expect-expect.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jest/no-alias-methods": {
    description: "Disallow alias methods",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-alias-methods.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jest/no-commented-out-tests": {
    description: "Disallow commented out tests",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-commented-out-tests.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jest/no-conditional-expect": {
    description: "Disallow calling `expect` conditionally",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-conditional-expect.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-deprecated-functions": {
    description: "Disallow use of deprecated functions",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-deprecated-functions.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-disabled-tests": {
    description: "Disallow disabled tests",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-disabled-tests.md",
    js: { entry: '["warn"]\n', level: "warn" },
    state: "added",
    ts: { entry: '["warn"]\n', level: "warn" },
    updates: ["2.0.0"],
  },
  "jest/no-done-callback": {
    description: "Disallow using a callback in asynchronous tests and hooks",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-done-callback.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-export": {
    description: "Disallow using `exports` in files containing tests",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-export.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-focused-tests": {
    description: "Disallow focused tests",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-focused-tests.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-identical-title": {
    description: "Disallow identical titles",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-identical-title.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-interpolation-in-snapshots": {
    description: "Disallow string interpolation inside snapshots",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-interpolation-in-snapshots.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-jasmine-globals": {
    description: "Disallow Jasmine globals",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-jasmine-globals.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-mocks-import": {
    description: "Disallow manually importing from `__mocks__`",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-mocks-import.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-standalone-expect": {
    description: "Disallow using `expect` outside of `it` or `test` blocks",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-standalone-expect.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/no-test-prefixes": {
    description: "Require using `.only` and `.skip` over `f` and `x`",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/no-test-prefixes.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/prefer-to-be": {
    description: "Suggest using `toBe()` for primitive literals",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/prefer-to-be.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/prefer-to-contain": {
    description: "Suggest using `toContain()`",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/prefer-to-contain.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/prefer-to-have-length": {
    description: "Suggest using `toHaveLength()`",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/prefer-to-have-length.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/valid-describe-callback": {
    description: "Enforce valid `describe()` callback",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/valid-describe-callback.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/valid-expect": {
    description: "Enforce valid `expect()` usage",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/valid-expect.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/valid-expect-in-promise": {
    description:
      "Require promises that have expectations in their chain to be valid",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/valid-expect-in-promise.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
  "jest/valid-title": {
    description: "Enforce valid titles",
    docsUrl:
      "https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules/valid-title.md",
    js: { entry: '["error"]\n', level: "error" },
    state: "added",
    ts: { entry: '["error"]\n', level: "error" },
    updates: ["2.0.0"],
  },
};
