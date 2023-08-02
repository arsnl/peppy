/* eslint-disable jest/no-export */
import spawn from "cross-spawn";
import { ESLint, type Linter } from "eslint";
import { rules as prettierRules } from "eslint-config-peppy/configs/prettier";
import path from "node:path";

export const getEslintConfig = async ({
  cwd,
  file = "file.js",
}: {
  cwd: string;
  file?: string;
}) => {
  const { stdout } = await spawn("npx", ["eslint", "--print-config", file], {
    cwd,
    shell: true,
  });

  if (!stdout) {
    throw new Error("stdout is null");
  }

  stdout.setEncoding("utf8");
  let config = "";

  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of stdout) {
    config += chunk;
  }

  return JSON.parse(config);
};

export const validateESLintConfig = async ({ cwd }: { cwd: string }) => {
  const _getConflictingPrettierRules = async ({
    file = "file.js",
  }: {
    file?: string;
  }) => {
    const { rules: configRules } = await getEslintConfig({ cwd, file });

    const conflictingRules = Object.keys(prettierRules).reduce<string[]>(
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
      [],
    );

    return conflictingRules;
  };

  describe("Validate ESLint configuration", () => {
    it(`Can load the eslint configuration without errors`, async () => {
      const eslint = new ESLint({
        useEslintrc: true,
        ignore: false,
        cwd,
      });
      const [result] = await eslint.lintText("", {
        filePath: path.join(__dirname, "_x.ts"),
      });

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
      const conflictingRules = await _getConflictingPrettierRules({
        file: "file.js",
      });

      expect(conflictingRules).toStrictEqual([]);
    });

    it(`Does not contain any TypeScript rule in conflict with Prettier`, async () => {
      const conflictingRules = await _getConflictingPrettierRules({
        file: "file.ts",
      });

      expect(conflictingRules).toStrictEqual([]);
    });
  });
};

export type ValidTestCase = string;

export type InvalidTestCase = { code: string; errors: string[] };

export const validateESLintRule = async ({
  ruleName,
  cwd,
  file = "file.js",
  valid,
  invalid,
}: {
  ruleName: string;
  cwd: string;
  file?: string;
  valid: ValidTestCase[];
  invalid: InvalidTestCase[];
}) => {
  let eslint: ESLint;

  const _getEslint = async () => {
    if (eslint) {
      return eslint;
    }
    const eslintConfig = await getEslintConfig({ cwd, file });

    const baseConfig = { ...eslintConfig };
    baseConfig.rules = {};
    baseConfig.rules[ruleName] = [...eslintConfig.rules[ruleName]];

    eslint = new ESLint({
      baseConfig,
      useEslintrc: false,
      ignore: false,
      cwd,
    });

    return eslint;
  };

  const _getReport = async (text: string) => {
    await _getEslint();
    const report = await eslint.lintText(text, {
      filePath: path.join(__dirname, "_x.ts"),
    });

    return report;
  };

  const _compareErrorMessageToExpected = (
    result?: Linter.LintMessage,
    expected?: string,
  ) => {
    expect(typeof expected).toBe("string");
    expect(result?.fatal).toBeFalsy();
    expect(result?.message).toStrictEqual(expected);
  };

  const _compareErrorMessagesToExpected = (
    result: Linter.LintMessage[],
    expected: InvalidTestCase["errors"],
  ) => {
    expect(result).toHaveLength(expected.length);

    const sortedExpected = expected.sort();
    const sortedResult = result.sort((a, b) =>
      a.message < b.message ? -1 : a.message > b.message ? 1 : 0,
    );
    sortedResult.forEach((result, index) =>
      _compareErrorMessageToExpected(result, sortedExpected[index]),
    );
  };

  const _testValidTemplate = async (testCase: ValidTestCase) => {
    const report = await _getReport(testCase);
    const errorMessages = report.reduce<string[]>((acc, result) => {
      const messages = result.messages.map(({ message }) => message);
      return [...acc, ...messages];
    }, []);

    expect(errorMessages).toStrictEqual([]);
  };

  const _testInvalidTemplate = async (testCase: InvalidTestCase) => {
    const report = await _getReport(testCase.code);

    report.forEach((result) => {
      _compareErrorMessagesToExpected(result.messages, testCase.errors);
    });
  };

  describe(`Test rule "${ruleName}"`, () => {
    describe("Should be valid", () => {
      valid.forEach((testCase) => {
        // eslint-disable-next-line jest/expect-expect
        it(`${testCase}`, async () => {
          await _testValidTemplate(testCase);
        });
      });
    });

    describe("Should be invalid", () => {
      invalid.forEach((testCase) => {
        // eslint-disable-next-line jest/no-standalone-expect
        expect(typeof testCase.code).toBe("string");

        // eslint-disable-next-line jest/expect-expect
        it(`${testCase.code}`, async () => {
          await _testInvalidTemplate(testCase);
        });
      });
    });
  });
};
