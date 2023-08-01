import type { Config } from "jest";

const config: Config = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".*\\.test\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleNameMapper: {
    "^@tests/(.*)$": "<rootDir>/tests/$1",
  },
};

export default config;
