const eslintTestConfigurations = require("../../../dev/eslint-test-configurations");

eslintTestConfigurations(
  __dirname,
  [
    // Rules
    "../rules/typescript.js",
    "../rules/typescript-react.js",
    // Configurations
    "../index.js",
    "../react.js",
  ],
  { filePath: "dev/_x.ts" }
);
