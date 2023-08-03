import { type Linter } from "eslint";

const config = {
  extends: ["./configs/react.js", "./configs/prettier.js"].map((configPath) =>
    require.resolve(configPath),
  ),
} satisfies Linter.Config;

export = config;
