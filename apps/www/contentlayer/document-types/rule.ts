import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const eslintPluginsConfig: Record<
  string,
  {
    docsUrlTemplate: string;
    pluginName: string | null;
    pluginUrl: string | null;
  }
> = {
  eslint: {
    docsUrlTemplate: "https://eslint.org/docs/rules/{noPrefixRuleName}",
    pluginName: null,
    pluginUrl: null,
  },
  fp: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-fp",
    pluginUrl: "https://github.com/jfmengels/eslint-plugin-fp",
  },
  ava: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-ava",
    pluginUrl: "https://github.com/avajs/eslint-plugin-ava",
  },
  canonical: {
    docsUrlTemplate:
      "{pluginUrl}#eslint-plugin-canonical-rules-{noPrefixRuleName}",
    pluginName: "eslint-plugin-canonical",
    pluginUrl: "https://github.com/gajus/eslint-plugin-canonical",
  },
  "eslint-comments": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-eslint-comments",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-eslint-comments",
  },
  unicorn: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-unicorn",
    pluginUrl: "https://github.com/sindresorhus/eslint-plugin-unicorn",
  },
  flowtype: {
    docsUrlTemplate:
      "{pluginUrl}/#eslint-plugin-flowtype-rules-{noPrefixRuleName}",
    pluginName: "eslint-plugin-flowtype",
    pluginUrl: "https://github.com/gajus/eslint-plugin-flowtype",
  },
  jsdoc: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsdoc",
    pluginUrl: "https://github.com/gajus/eslint-plugin-jsdoc",
  },
  import: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-import",
    pluginUrl: "https://github.com/import-js/eslint-plugin-import",
  },
  react: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-react",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-react",
  },
  promise: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-promise",
    pluginUrl: "https://github.com/eslint-community/eslint-plugin-promise",
  },
  lodash: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-lodash",
    pluginUrl: "https://github.com/wix-incubator/eslint-plugin-lodash",
  },
  mocha: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-mocha",
    pluginUrl: "https://github.com/lo1tuma/eslint-plugin-mocha",
  },
  node: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-node",
    pluginUrl: "https://github.com/mysticatea/eslint-plugin-node",
  },
  "jsx-a11y": {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsx-a11y",
    pluginUrl: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y",
  },
  jest: {
    docsUrlTemplate: "{pluginUrl}/tree/main/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jest",
    pluginUrl: "https://github.com/jest-community/eslint-plugin-jest",
  },
  jsonc: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-jsonc",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-jsonc",
  },
  "@typescript-eslint": {
    docsUrlTemplate: "{pluginUrl}/docs/rules/{noPrefixRuleName}.md",
    pluginName: "@typescript-eslint/eslint-plugin",
    pluginUrl:
      "https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin",
  },
  yml: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-yml",
    pluginUrl: "https://github.com/ota-meshi/eslint-plugin-yml",
  },
  "simple-import-sort": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-simple-import-sort",
    pluginUrl: "https://github.com/lydell/eslint-plugin-simple-import-sort",
  },
  "@next/next": {
    docsUrlTemplate: "https://nextjs.org/docs/messages/{noPrefixRuleName}",
    pluginName: "@next/eslint-plugin-next",
    pluginUrl:
      "https://nextjs.org/docs/app/building-your-application/configuring/eslint",
  },
  babel: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-babel",
    pluginUrl: "https://github.com/babel/eslint-plugin-babel",
  },
  "@babel": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "@babel/eslint-plugin",
    pluginUrl:
      "https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin",
  },
  vue: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-vue",
    pluginUrl: "https://github.com/vuejs/eslint-plugin-vue",
  },
  standard: {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-standard",
    pluginUrl: "https://github.com/standard/eslint-plugin-standard",
  },
  "react-hooks": {
    docsUrlTemplate: "{pluginUrl}",
    pluginName: "eslint-plugin-react-hooks",
    pluginUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
  },
  tailwindcss: {
    docsUrlTemplate: "{pluginUrl}/tree/master/docs/rules/{noPrefixRuleName}.md",
    pluginName: "eslint-plugin-tailwindcss",
    pluginUrl: "https://github.com/francoismassart/eslint-plugin-tailwindcss",
  },
};

const computedFields: ComputedFields = {
  docsUrl: {
    type: "string",
    resolve: (rule) => {
      const ruleName: string = rule.name;
      const noPrefixRuleName = ruleName.split("/").pop();
      const pluginName = ruleName.split("/").slice(0, -1).join("/") || "eslint";

      const { docsUrlTemplate = "", pluginUrl } =
        eslintPluginsConfig[pluginName] || {};

      return docsUrlTemplate
        .replace("{ruleName}", ruleName || "")
        .replace("{pluginUrl}", pluginUrl || "")
        .replace("{noPrefixRuleName}", noPrefixRuleName || "");
    },
  },
};

export const Rule = defineDocumentType(() => ({
  name: "Rule",
  filePathPattern: `rules/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "mdx",
      required: true,
    },
  },
  computedFields,
}));
