/* eslint-disable import/no-extraneous-dependencies */
import { ESLint, type Linter } from "eslint";
import stringify from "fast-json-stable-stringify";

export const getESLintRuleLevel = (
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
  const level = getESLintRuleLevel(ruleEntry);
  const [, ...options] = Array.isArray(ruleEntry) ? ruleEntry : [];

  return [level, ...options];
};

export const getESLintConfig = async ({
  configName,
  ts = false,
}: {
  configName: string;
  ts?: boolean;
}) => {
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
