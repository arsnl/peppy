const { rules } = require("eslint-config-prettier");

/**
 * Remove the special rules used in Peppy
 * curly is removed from the disabled rules since Peppy use the "all" options. See https://github.com/prettier/eslint-config-prettier#curly for more details
 */
const { curly, ...rulesToKeep } = rules;

/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    ...rulesToKeep,
  },
};
