const eslintTestConfigurations = require("../../../scripts/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/ava.js",
  // Configurations
  "../index.js",
]);
