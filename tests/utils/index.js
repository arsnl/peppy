/* eslint-disable jest/no-export */
const spawn = require("cross-spawn");
const {
  rules: prettierRules,
} = require("eslint-config-peppy/configs/prettier");
const { ESLint } = require("eslint");

const getConflictingPrettierRules = async ({ cwd, file = "file.js" }) => {
  const { stdout } = await spawn("npx", ["eslint", "--print-config", file], {
    cwd,
    shell: true,
  });

  stdout.setEncoding("utf8");
  let config = "";

  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of stdout) {
    config += chunk;
  }

  const { rules: configRules } = JSON.parse(config);

  const conflictingRules = Object.keys(prettierRules).reduce(
    (acc, prettierRuleName) => {
      const prettierRuleValue = Array.isArray(prettierRules[prettierRuleName])
        ? prettierRules[prettierRuleName][0]
        : prettierRules[prettierRuleName];
      const prettierRuleValueStandardized =
        typeof prettierRuleValue === "string"
          ? prettierRuleValue
          : prettierRuleValue === 0
          ? "off"
          : prettierRuleValue === 1
          ? "warn"
          : "error";

      return configRules?.[prettierRuleName]?.[0] &&
        configRules?.[prettierRuleName]?.[0] !== prettierRuleValueStandardized
        ? [...acc, prettierRuleName]
        : acc;
    },
    []
  );

  return conflictingRules;
};

const validateESLintConfig = async ({ cwd }) => {
  describe("Validate ESLint configuration", () => {
    it(`Can load the eslint configuration without errors`, async () => {
      const eslint = new ESLint({
        useEslintrc: true,
        ignore: false,
        cwd,
      });
      const [result] = await eslint.lintText("", {});

      expect(result?.messages?.length).toBe(0);
    });

    it(`Can run eslint without errors`, () => {
      const result = spawn.sync("npm", ["run", "lint"], {
        cwd,
        stdio: "ignore",
      });

      expect(result.status).toBe(0);
    });

    it(`Does not contain any rule in conflict with Prettier`, async () => {
      const conflictingRules = await getConflictingPrettierRules({
        file: "file.js",
        cwd,
      });

      expect(conflictingRules).toStrictEqual([]);
    });

    it(`Does not contain any TypeScript rule in conflict with Prettier`, async () => {
      const conflictingRules = await getConflictingPrettierRules({
        file: "file.ts",
        cwd,
      });

      expect(conflictingRules).toStrictEqual([]);
    });
  });
};

module.exports = { validateESLintConfig };
