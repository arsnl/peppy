export const ESLINT_CONFIGURATIONS = {
  "eslint-config-peppy": { title: "peppy" },
  "eslint-config-peppy-ava": { title: "peppy-ava" },
  "eslint-config-peppy-cypress": { title: "peppy-cypress" },
  "eslint-config-peppy-jest": { title: "peppy-jest" },
  "eslint-config-peppy-lodash": { title: "peppy-lodash" },
  "eslint-config-peppy-mocha": { title: "peppy-mocha" },
  "eslint-config-peppy-node": { title: "peppy-node" },
  "eslint-config-peppy-ramda": { title: "peppy-ramda" },
  "eslint-config-peppy-react": { title: "peppy-react" },
  "eslint-config-peppy-typescript": { title: "peppy-typescript" },
};
export const ESLINT_CONFIGURATION_FILES = [
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.json",
];

export const RECOMMENDED_SCRIPTS = {
  lint: "eslint .",
  format: "prettier --write --loglevel warn .",
  fix: "npm run lint -- --fix && npm run format",
};

export const RECOMMENDED_FILES = [
  ".vscode/extensions.json",
  ".vscode/settings.json",
  ".editorconfig",
  ".eslintignore",
  ".prettierignore",
];
