const eslintTestConfigurations = require("../../../scripts/eslint-test-configurations");

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
  { filePath: "scripts/_x.ts" }
);
