const test = require("ava");
const path = require("path");
const { ESLint } = require("eslint");

const configurationFiles = [
  // Configurations
  "./configurations/ava.js",
  "./configurations/base.js",
  "./configurations/cypress.js",
  "./configurations/jest.js",
  "./configurations/lodash.js",
  "./configurations/mocha.js",
  "./configurations/node.js",
  "./configurations/ramda.js",
  "./configurations/react.js",
  "./configurations/typescript.js",
  // Configurations with extends
  "./ava.js",
  "./index.js",
  "./cypress.js",
  "./jest.js",
  "./lodash.js",
  "./mocha.js",
  "./node.js",
  "./ramda.js",
  "./react.js",
  "./typescript.js",
];

configurationFiles.forEach((configurationFile) => {
  const configPath = path.join(__dirname, "../", configurationFile);

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
