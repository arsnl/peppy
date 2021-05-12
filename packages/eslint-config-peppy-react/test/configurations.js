const eslintTestConfigurations = require("../../../scripts/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/react-a11y.js",
  "../rules/react-hooks.js",
  "../rules/react.js",
  // Configurations
  "../index.js",
]);
