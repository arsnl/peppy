/* eslint-disable ava/no-ignored-test-files */

const test = require("ava");
const path = require("path");
const { ESLint } = require("eslint");

module.exports = function eslintTestConfigurations(
  directory,
  configs,
  lintTextOptions = {}
) {
  return configs.forEach((config) => {
    const configPath = path.join(directory, config);

    const eslint = new ESLint({
      useEslintrc: false,
      ignore: false,
      overrideConfigFile: configPath,
    });

    test(`configuration file "${config}" is valid`, async (t) => {
      const results = await eslint.lintText("", lintTextOptions);

      t.deepEqual(results[0].messages, []);
    });
  });
};
