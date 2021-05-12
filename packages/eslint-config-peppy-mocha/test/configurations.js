const eslintTestConfigurations = require("../../../scripts/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/mocha.js",
  // Configurations
  "../index.js",
]);
