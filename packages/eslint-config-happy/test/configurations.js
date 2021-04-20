const test = require("ava");
const path = require("path");
const { ESLint } = require("eslint");

const configurationFiles = [
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
];

configurationFiles.forEach((configurationFile) => {
  const configPath = path.join(__dirname, configurationFile);

  const eslint = new ESLint({
    useEslintrc: false,
    ignore: false,
    overrideConfigFile: configPath,
  });

  test(`configuration file "${configurationFile}" is valid`, async (t) => {
    const results = await eslint.lintText("");

    t.deepEqual(results[0].messages, []);
  });
});
