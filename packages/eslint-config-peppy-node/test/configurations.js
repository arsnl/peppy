const eslintTestConfigurations = require("../../../dev/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/node.js",
  // Configurations
  "../index.js",
]);
