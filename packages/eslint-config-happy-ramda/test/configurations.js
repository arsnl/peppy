const eslintTestConfigurations = require("../../../utils/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/ramda.js",
  // Configurations
  "../index.js",
]);
