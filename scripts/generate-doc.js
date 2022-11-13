/* eslint-disable import/no-extraneous-dependencies */
const { ESLint } = require("eslint");
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const readmeFilePath = path.join(__dirname, "../README.md");
const SEVERITY_ICONS = {
  ERROR: "🔴",
  WARN: "🟠",
  OFF: "🔵",
};

const getRuleLink = (ruleName) => {
  const link = !ruleName.includes("/")
    ? `https://eslint.org/docs/rules/${ruleName}`
    : ruleName.startsWith("fp/")
    ? `https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/${ruleName.replace(
        /^fp\//u,
        ""
      )}.md`
    : ruleName.startsWith("ava/")
    ? `https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/${ruleName.replace(
        /^ava\//u,
        ""
      )}.md`
    : ruleName.startsWith("canonical/")
    ? `https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-${ruleName.replace(
        /^canonical\//u,
        ""
      )}`
    : ruleName.startsWith("eslint-comments/")
    ? `https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/${ruleName.replace(
        /^eslint-comments\//u,
        ""
      )}.md`
    : ruleName.startsWith("unicorn/")
    ? `https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${ruleName.replace(
        /^unicorn\//u,
        ""
      )}.md`
    : ruleName.startsWith("flowtype/")
    ? `https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-${ruleName.replace(
        /^flowtype\//u,
        ""
      )}`
    : ruleName.startsWith("jsdoc/")
    ? `https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-${ruleName.replace(
        /^jsdoc\//u,
        ""
      )}`
    : ruleName.startsWith("import/")
    ? `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${ruleName.replace(
        /^import\//u,
        ""
      )}.md`
    : ruleName.startsWith("react/")
    ? `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${ruleName.replace(
        /^react\//u,
        ""
      )}.md`
    : ruleName.startsWith("promise/")
    ? `https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/${ruleName.replace(
        /^promise\//u,
        ""
      )}.md`
    : ruleName.startsWith("lodash/")
    ? `https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/${ruleName.replace(
        /^lodash\//u,
        ""
      )}.md`
    : ruleName.startsWith("mocha/")
    ? `https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/${ruleName.replace(
        /^mocha\//u,
        ""
      )}.md`
    : ruleName.startsWith("node/")
    ? `https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/${ruleName.replace(
        /^node\//u,
        ""
      )}.md`
    : ruleName.startsWith("jsx-a11y/")
    ? `https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/${ruleName.replace(
        /^jsx-a11y\//u,
        ""
      )}.md`
    : ruleName.startsWith("jest/")
    ? `https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/${ruleName.replace(
        /^jest\//u,
        ""
      )}.md`
    : ruleName.startsWith("jsonc/")
    ? `https://ota-meshi.github.io/eslint-plugin-jsonc/rules/${ruleName.replace(
        /^jsonc\//u,
        ""
      )}.html`
    : ruleName.startsWith("@typescript-eslint/")
    ? `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${ruleName.replace(
        /^@typescript-eslint\//u,
        ""
      )}.md`
    : ruleName.startsWith("yml/")
    ? `https://ota-meshi.github.io/eslint-plugin-yml/rules/${ruleName.replace(
        /^yml\//u,
        ""
      )}.html`
    : ruleName.startsWith("simple-import-sort/")
    ? `https://github.com/lydell/eslint-plugin-simple-import-sort`
    : ruleName.startsWith("@next/next/")
    ? `https://nextjs.org/docs/messages/${ruleName.replace(
        /^@next\/next\//u,
        ""
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
    : "";

  return link ? `[\`${ruleName}\`](${link})` : `\`${ruleName}\``;
};

const generateRuleDocumentation = async ({
  eslintConfig,
  injectTag,
  file = "file.js",
}) => {
  const engine = new ESLint({
    baseConfig: eslintConfig,
    useEslintrc: false,
  });

  const { rules } = await engine.calculateConfigForFile(file);

  const {
    rulesMarkdown,
    rulesCount,
    rulesErrorCount,
    rulesWarnCount,
    rulesOffCount,
  } = Object.keys(rules).reduce(
    (acc, ruleName) => {
      const severity =
        rules[ruleName][0] === 0 || rules[ruleName][0] === "off"
          ? "off"
          : rules[ruleName][0] === 1 || rules[ruleName][0] === "warn"
          ? "warn"
          : "error";

      const severityIcon =
        severity === "off"
          ? SEVERITY_ICONS.OFF
          : severity === "warn"
          ? SEVERITY_ICONS.WARN
          : SEVERITY_ICONS.ERROR;

      return {
        ...acc,
        rulesMarkdown: [
          acc.rulesMarkdown,
          `#### ${severityIcon} ${getRuleLink(ruleName)}`,
          "",
          "```js",
          JSON.stringify(rules[ruleName]),
          "```",
          "",
          `<div align="right"><a href="#details-${injectTag}">⬆️</a></div>`,
          "",
        ].join("\n"),
        rulesCount: acc.rulesCount + 1,
        rulesErrorCount: acc.rulesErrorCount + (severity === "error" ? 1 : 0),
        rulesWarnCount: acc.rulesWarnCount + (severity === "warn" ? 1 : 0),
        rulesOffCount: acc.rulesOffCount + (severity === "off" ? 1 : 0),
      };
    },
    {
      rulesMarkdown: "",
      rulesCount: 0,
      rulesErrorCount: 0,
      rulesWarnCount: 0,
      rulesOffCount: 0,
    }
  );

  const readme = fs.readFileSync(readmeFilePath, {
    encoding: "utf8",
  });

  const regexp = new RegExp(
    `<!-- START ${injectTag} -->(.|\n)*<!-- END ${injectTag} -->`,
    "gm"
  );

  const readMeWithEdits = prettier.format(
    readme.replace(
      regexp,
      [
        `<!-- START ${injectTag} -->`,
        `| Total | Error ${SEVERITY_ICONS.ERROR} | Warning ${SEVERITY_ICONS.WARN} | Disabled ${SEVERITY_ICONS.OFF} |`,
        "| --- | --- | --- | --- |",
        `| ${rulesCount} | ${rulesErrorCount} | ${rulesWarnCount} | ${rulesOffCount} |`,
        "",
        `<details id="details-${injectTag}">`,
        "<summary>Check the rules details</summary>",
        "",
        rulesMarkdown,
        "</details>",
        `<!-- END ${injectTag} -->`,
      ].join("\n")
    ),
    { parser: "markdown" }
  );

  fs.writeFileSync(readmeFilePath, readMeWithEdits, {
    encoding: "utf8",
  });
};

(async () => {
  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/base"],
    },
    injectTag: "base-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/base"],
    },
    file: "file.ts",
    injectTag: "base-typescript-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/react"],
    },
    injectTag: "react-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/react"],
    },
    file: "file.ts",
    injectTag: "react-typescript-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/next"],
    },
    injectTag: "next-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/jest"],
    },
    injectTag: "jest-rules",
  });

  await generateRuleDocumentation({
    eslintConfig: {
      extends: ["peppy/configs/prettier"],
    },
    injectTag: "prettier-rules",
  });
})();
