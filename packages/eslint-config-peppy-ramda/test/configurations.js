const eslintTestConfigurations = require("../../../scripts/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/ramda.js",
  // Configurations
  "../index.js",
]);
