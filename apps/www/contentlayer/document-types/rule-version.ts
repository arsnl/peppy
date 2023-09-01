/* eslint-disable import/no-extraneous-dependencies */
import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";
import stringify from "fast-json-stable-stringify";
import { eslintPluginsConfig } from "../../src/config/eslint-plugin";

const computedFields: ComputedFields = {
  jsLevel: {
    type: "string",
    resolve: (doc) => doc?.jsEntry?.[0] ?? null,
  },
  tsLevel: {
    type: "string",
    resolve: (doc) => doc?.tsEntry?.[0] ?? null,
  },
  state: {
    type: "enum",
    resolve: (doc) =>
      !doc?.previousJsEntry && !doc?.previousTsEntry
        ? "new"
        : !doc?.jsEntry && !doc?.tsEntry
        ? "removed"
        : stringify({
            js: doc?.jsEntry || null,
            ts: doc?.tsEntry || null,
          }) !==
          stringify({
            js: doc?.previousJsEntry || null,
            ts: doc?.previousTsEntry || null,
          })
        ? "updated"
        : "unchanged",
  },
  stateLabel: {
    type: "string",
    resolve: (doc) => {
      const state = computedFields.state.resolve(doc) as any;

      switch (state) {
        case "new":
          return "New";
        case "removed":
          return "Removed";
        case "updated":
          return "Updated";
        case "unchanged":
          return "Unchanged";
        default:
          return "Unknown";
      }
    },
  },
  docUrl: {
    type: "string",
    resolve: (doc) => {
      const { ruleKey } = doc;
      const noPrefixRuleKey = ruleKey.split("/").pop();
      const pluginName = ruleKey.split("/").slice(0, -1).join("/") || "eslint";

      const { docsUrlTemplate = "", pluginUrl } =
        eslintPluginsConfig[pluginName] || {};

      return docsUrlTemplate
        .replace(/\{ruleKey\}/g, ruleKey || "")
        .replace(/\{pluginUrl\}/g, pluginUrl || "")
        .replace(/\{noPrefixRuleKey\}/g, noPrefixRuleKey || "");
    },
  },
  configKey: {
    type: "string",
    resolve: (doc) => {
      const [, , configKey] = doc._raw.flattenedPath.split("/");
      return configKey;
    },
  },
  configSlug: {
    type: "string",
    resolve: (doc) => computedFields.configKey.resolve(doc),
  },
  key: {
    type: "string",
    resolve: (doc) => doc.ruleKey.replace(/\//g, "_"),
  },
  slug: {
    type: "string",
    resolve: (doc) => computedFields.key.resolve(doc),
  },
  href: {
    type: "string",
    resolve: (doc) => {
      const configSlug = computedFields.configSlug.resolve(doc);
      const ruleSlug = computedFields.slug.resolve(doc);

      return `/docs/configurations/${configSlug}/${ruleSlug}`;
    },
  },
};

export const RuleVersion = defineDocumentType(() => ({
  name: "RuleVersion",
  filePathPattern: `rule-versions/**/*.mdx`,
  contentType: "mdx",
  fields: {
    version: {
      type: "string",
      required: true,
    },
    ruleKey: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    jsEntry: {
      type: "json",
    },
    previousJsEntry: {
      type: "json",
    },
    tsEntry: {
      type: "json",
    },
    previousTsEntry: {
      type: "json",
    },
    updates: {
      type: "json",
      required: true,
    },
  },
  computedFields,
}));
