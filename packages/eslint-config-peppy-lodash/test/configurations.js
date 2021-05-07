const eslintTestConfigurations = require("../../../dev/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/lodash.js",
  // Configurations
  "../index.js",
]);
