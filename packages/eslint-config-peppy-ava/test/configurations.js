const eslintTestConfigurations = require("../../../dev/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/ava.js",
  // Configurations
  "../index.js",
]);
