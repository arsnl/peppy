const eslintTestConfigurations = require("../../../utils/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/mocha.js",
  // Configurations
  "../index.js",
]);
