import { type Linter } from "eslint";

const config = {
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  env: {
    "jest/globals": true,
  },
} satisfies Linter.Config;

export = config;
