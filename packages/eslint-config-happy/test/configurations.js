const eslintTestConfigurations = require("../../../utils/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/best-practices.js",
  "../rules/errors.js",
  "../rules/es6.js",
  "../rules/fp.js",
  "../rules/imports.js",
  "../rules/node.js",
  "../rules/promise.js",
  "../rules/regexp.js",
  "../rules/security.js",
  "../rules/simple-import-sort.js",
  "../rules/strict.js",
  "../rules/style.js",
  "../rules/unicorn.js",
  "../rules/variables.js",
  // Configurations
  "../index.js",
]);
