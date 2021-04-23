const eslintTestConfigurations = require("../../../utils/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/lodash.js",
  // Configurations
  "../index.js",
]);
