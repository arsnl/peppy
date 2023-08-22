/* eslint-disable import/no-extraneous-dependencies */
import { ESLint, type Linter } from "eslint";
import stringify from "fast-json-stable-stringify";
import { eslintConfigNamesConfig } from "@/config/eslint";
import { type ESLintConfigName } from "@/types/eslint";

export const getESLintRuleDocsUrl = (ruleName: string) =>
  !ruleName.includes("/")
    ? `https://eslint.org/docs/rules/${ruleName}`
    : ruleName.startsWith("fp/")
    ? `https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/${ruleName.replace(
        /^fp\//u,
        "",
      )}.md`
    : ruleName.startsWith("ava/")
    ? `https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/${ruleName.replace(
        /^ava\//u,
        "",
      )}.md`
    : ruleName.startsWith("canonical/")
    ? `https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-${ruleName.replace(
        /^canonical\//u,
        "",
      )}`
    : ruleName.startsWith("eslint-comments/")
    ? `https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/${ruleName.replace(
        /^eslint-comments\//u,
        "",
      )}.md`
    : ruleName.startsWith("unicorn/")
    ? `https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${ruleName.replace(
        /^unicorn\//u,
        "",
      )}.md`
    : ruleName.startsWith("flowtype/")
    ? `https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-${ruleName.replace(
        /^flowtype\//u,
        "",
      )}`
    : ruleName.startsWith("jsdoc/")
    ? `https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-${ruleName.replace(
        /^jsdoc\//u,
        "",
      )}`
    : ruleName.startsWith("import/")
    ? `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${ruleName.replace(
        /^import\//u,
        "",
      )}.md`
    : ruleName.startsWith("react/")
    ? `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${ruleName.replace(
        /^react\//u,
        "",
      )}.md`
    : ruleName.startsWith("promise/")
    ? `https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/${ruleName.replace(
        /^promise\//u,
        "",
      )}.md`
    : ruleName.startsWith("lodash/")
    ? `https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/${ruleName.replace(
        /^lodash\//u,
        "",
      )}.md`
    : ruleName.startsWith("mocha/")
    ? `https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/${ruleName.replace(
        /^mocha\//u,
        "",
      )}.md`
    : ruleName.startsWith("node/")
    ? `https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/${ruleName.replace(
        /^node\//u,
        "",
      )}.md`
    : ruleName.startsWith("jsx-a11y/")
    ? `https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/${ruleName.replace(
        /^jsx-a11y\//u,
        "",
      )}.md`
    : ruleName.startsWith("jest/")
    ? `https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/${ruleName.replace(
        /^jest\//u,
        "",
      )}.md`
    : ruleName.startsWith("jsonc/")
    ? `https://ota-meshi.github.io/eslint-plugin-jsonc/rules/${ruleName.replace(
        /^jsonc\//u,
        "",
      )}.html`
    : ruleName.startsWith("@typescript-eslint/")
    ? `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${ruleName.replace(
        /^@typescript-eslint\//u,
        "",
      )}.md`
    : ruleName.startsWith("yml/")
    ? `https://ota-meshi.github.io/eslint-plugin-yml/rules/${ruleName.replace(
        /^yml\//u,
        "",
      )}.html`
    : ruleName.startsWith("simple-import-sort/")
    ? `https://github.com/lydell/eslint-plugin-simple-import-sort`
    : ruleName.startsWith("@next/next/")
    ? `https://nextjs.org/docs/messages/${ruleName.replace(
        /^@next\/next\//u,
        "",
      )}`
    : ruleName.startsWith("babel/")
    ? `https://github.com/babel/eslint-plugin-babel`
    : ruleName.startsWith("@babel/")
    ? `https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin`
    : ruleName.startsWith("vue/")
    ? `https://eslint.vuejs.org/rules/${ruleName.replace(/^vue\//u, "")}`
    : ruleName.startsWith("standard/")
    ? `https://github.com/standard/eslint-plugin-standard`
    : ruleName.startsWith("react-hooks/")
    ? `https://reactjs.org/docs/hooks-rules.html`
    : ruleName.startsWith("tailwindcss/")
    ? `https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/HEAD/docs/rules/${ruleName.replace(
        /^tailwindcss\//u,
        "",
      )}.md`
    : "";

export const getESLintStringSeverity = (
  ruleEntry: Linter.RuleEntry,
): Linter.StringSeverity => {
  const levels = ["off", "warn", "error"] satisfies Linter.StringSeverity[];
  const ruleLevel =
    typeof ruleEntry === "number"
      ? levels[ruleEntry]
      : typeof ruleEntry?.[0] === "number"
      ? levels[ruleEntry[0]]
      : (ruleEntry?.[0] as Linter.StringSeverity);

  if (!levels.includes(ruleLevel)) {
    throw new Error(
      `Rule \`${stringify(ruleEntry)}\` have unexpected severity`,
    );
  }

  return ruleLevel;
};

export const getESLintRuleStringSeverityAndOptions = (
  ruleEntry: Linter.RuleEntry,
): [Linter.StringSeverity, ...any] => {
  const level = getESLintStringSeverity(ruleEntry);
  const [_level, ...options] = Array.isArray(ruleEntry) ? ruleEntry : [];

  return [level, ...options];
};

export type GetESLintConfigProps = {
  configName: ESLintConfigName;
  ts?: boolean;
};

export const getESLintConfig = async ({
  configName,
  ts = false,
}: GetESLintConfigProps) => {
  const engine = new ESLint({
    baseConfig: {
      extends: [`peppy/configs/${configName}`],
    },
    useEslintrc: false,
  });

  const eslintConfig: Linter.Config = ts
    ? await engine.calculateConfigForFile("file.ts")
    : await engine.calculateConfigForFile("file.js");

  const rules = eslintConfig?.rules || {};
  const sanitizedRules = Object.entries(rules).reduce<
    Record<string, Linter.RuleLevelAndOptions>
  >(
    (acc, [rule, ruleEntry]) =>
      ruleEntry
        ? {
            ...acc,
            [rule]: getESLintRuleStringSeverityAndOptions(ruleEntry),
          }
        : { ...acc },
    {},
  );

  return { ...eslintConfig, rules: sanitizedRules };
};

export const getESLintConfigs = async () => {
  const configsProps = eslintConfigNamesConfig.reduce<GetESLintConfigProps[]>(
    (acc, configName) => [
      ...acc,
      { configName, ts: false },
      { configName, ts: true },
    ],
    [],
  );

  const promises = configsProps.map(async (configProps) => {
    const config = await getESLintConfig(configProps);
    return { ...configProps, config };
  });

  const eslintConfigs = await Promise.all(promises);

  return eslintConfigs;
};
