export const eslintPluginsConfig: Record<
  string,
  {
    docsUrlTemplate: string;
    pluginName: string | null;
    pluginUrl: string | null;
  }
> = {
  "@babel": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "@babel/eslint-plugin",
    pluginUrl:
      "https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin",
  },
  "@next/next": {
    docsUrlTemplate: "https://nextjs.org/docs/messages/{noPrefixRuleKey}",
    pluginName: "@next/eslint-plugin-next",
    pluginUrl:
      "https://nextjs.org/docs/app/building-your-application/configuring/eslint",
  },
  "@typescript-eslint": {
    docsUrlTemplate: "{pluginUrl}/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "@typescript-eslint/eslint-plugin",
    pluginUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin",
  },
  ava: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-ava",
    pluginUrl: "https://github.com/avajs/eslint-plugin-ava",
  },
  babel: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-babel",
    pluginUrl: "https://github.com/babel/eslint-plugin-babel",
  },
  canonical: {
    docsUrlTemplate:
      "{pluginUrl}#eslint-plugin-canonical-rules-{noPrefixRuleKey}",
    pluginName: "eslint-plugin-canonical",
    pluginUrl: "https://github.com/gajus/eslint-plugin-canonical",
  },
  eslint: {
    docsUrlTemplate: "https://eslint.org/docs/rules/{noPrefixRuleKey}",
    pluginName: null,
    pluginUrl: null,
  },
  "eslint-comments": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-eslint-comments",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-eslint-comments",
  },
  flowtype: {
    docsUrlTemplate:
      "{pluginUrl}/#eslint-plugin-flowtype-rules-{noPrefixRuleKey}",
    pluginName: "eslint-plugin-flowtype",
    pluginUrl: "https://github.com/gajus/eslint-plugin-flowtype",
  },
  fp: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-fp",
    pluginUrl: "https://github.com/jfmengels/eslint-plugin-fp",
  },
  import: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-import",
    pluginUrl: "https://github.com/import-js/eslint-plugin-import",
  },
  jest: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-jest",
    pluginUrl: "https://github.com/jest-community/eslint-plugin-jest",
  },
  jsdoc: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-jsdoc",
    pluginUrl: "https://github.com/gajus/eslint-plugin-jsdoc",
  },
  jsonc: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-jsonc",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-jsonc",
  },
  "jsx-a11y": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-jsx-a11y",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y",
  },
  lodash: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-lodash",
    pluginUrl: "https://github.com/wix-incubator/eslint-plugin-lodash",
  },
  mocha: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-mocha",
    pluginUrl: "https://github.com/lo1tuma/eslint-plugin-mocha",
  },
  node: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-node",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-node",
  },
  promise: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-promise",
    pluginUrl: "https://github.com/eslint-community/eslint-plugin-promise",
  },
  react: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-react",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-react",
  },
  "react-hooks": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-react-hooks",
    pluginUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
  },
  "simple-import-sort": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-simple-import-sort",
    pluginUrl: "https://github.com/lydell/eslint-plugin-simple-import-sort",
  },
  standard: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-standard",
    pluginUrl: "https://github.com/standard/eslint-plugin-standard",
  },
  tailwindcss: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-tailwindcss",
    pluginUrl: "https://github.com/francoismassart/eslint-plugin-tailwindcss",
  },
  unicorn: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-unicorn",
    pluginUrl: "https://github.com/sindresorhus/eslint-plugin-unicorn",
  },
  vue: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-vue",
    pluginUrl: "https://github.com/vuejs/eslint-plugin-vue",
  },
  yml: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleKey}.md",
    pluginName: "eslint-plugin-yml",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-yml",
  },
};
