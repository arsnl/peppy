import { type Linter } from "eslint";
import { rules } from "eslint-config-prettier";
/**
 * Remove the special rules used in Peppy
 * curly is removed from the disabled rules since Peppy use the "all" options. See https://github.com/prettier/eslint-config-prettier#curly for more details
 */
const { curly, ...rulesToKeep } = rules;

const config = {
  rules: {
    ...rulesToKeep,
  },
} satisfies Linter.Config;

export = config;
