/* eslint-disable import/no-extraneous-dependencies */
import {
  type ComputedFields,
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import stringify from "fast-json-stable-stringify";
import prettier from "prettier";
import { eslintPluginsConfig } from "../../src/config/eslint-plugin";

const LEVEL_ENUMS = ["off", "warn", "error", "none"];
const STATE_ENUMS = ["new", "removed", "updated", "unchanged", "none"];

const VersionHistory = defineNestedType(() => ({
  name: "VersionHistory",
  fields: {
    version: { type: "string", required: true },
    jsState: {
      type: "enum",
      options: STATE_ENUMS,
      required: true,
    },
    tsState: {
      type: "enum",
      options: STATE_ENUMS,
      required: true,
    },
  },
}));

const computedFields: ComputedFields = {
  jsLevel: {
    type: "enum",
    resolve: (doc) => doc?.jsEntry?.[0] ?? "none",
  },
  jsState: {
    type: "enum",
    resolve: (doc) => {
      const { jsEntry: currentEntry, previousJsEntry: previousEntry } = doc;

      return !previousEntry && currentEntry
        ? "new"
        : previousEntry && !currentEntry
        ? "removed"
        : !!currentEntry &&
          !!previousEntry &&
          stringify(currentEntry) !== stringify(previousEntry)
        ? "updated"
        : !previousEntry && !currentEntry
        ? "none"
        : "unchanged";
    },
  },
  jsEntryStringified: {
    type: "string",
    resolve: async (doc) => {
      const { jsEntry } = doc;
      return jsEntry
        ? prettier.format(stringify(jsEntry), {
            parser: "json",
          })
        : "";
    },
  },
  previousJsEntryStringified: {
    type: "string",
    resolve: async (doc) => {
      const { previousJsEntry } = doc;
      return previousJsEntry
        ? prettier.format(stringify(previousJsEntry), {
            parser: "json",
          })
        : "";
    },
  },
  tsLevel: {
    type: "enum",
    resolve: (doc) => doc?.tsEntry?.[0] ?? "none",
  },
  tsState: {
    type: "enum",
    resolve: (doc) => {
      const { tsEntry: currentEntry, previousTsEntry: previousEntry } = doc;

      return !previousEntry && currentEntry
        ? "new"
        : previousEntry && !currentEntry
        ? "removed"
        : !!currentEntry &&
          !!previousEntry &&
          stringify(currentEntry) !== stringify(previousEntry)
        ? "updated"
        : !previousEntry && !currentEntry
        ? "none"
        : "unchanged";
    },
  },
  tsEntryStringified: {
    type: "string",
    resolve: async (doc) => {
      const { tsEntry } = doc;
      return tsEntry
        ? prettier.format(stringify(tsEntry), {
            parser: "json",
          })
        : "";
    },
  },
  previousTsEntryStringified: {
    type: "string",
    resolve: async (doc) => {
      const { previousTsEntry } = doc;
      return previousTsEntry
        ? prettier.format(stringify(previousTsEntry), {
            parser: "json",
          })
        : "";
    },
  },
  descriptionString: {
    type: "string",
    resolve: (doc) => doc.description.raw.replace(/`/g, "'"),
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
  history: {
    type: "json",
    resolve: (doc) => {
      const jsState = computedFields.jsState.resolve(doc);
      const tsState = computedFields.tsState.resolve(doc);
      const version = doc?.version || "next";
      const previousHistory = [...(doc?.history ?? [])].filter(
        (entry) => entry.version !== version,
      );

      return (jsState === "unchanged" || jsState === "none") &&
        (tsState === "unchanged" || tsState === "none")
        ? previousHistory
        : [{ version, jsState, tsState }, ...previousHistory];
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
      type: "mdx",
      required: true,
    },
    jsEntry: {
      type: "json",
    },
    jsLevel: {
      type: "enum",
      options: LEVEL_ENUMS,
      default: "none",
    },
    jsState: {
      type: "enum",
      options: STATE_ENUMS,
      default: "none",
    },
    previousJsEntry: {
      type: "json",
    },
    tsEntry: {
      type: "json",
    },
    tsLevel: {
      type: "enum",
      options: LEVEL_ENUMS,
      default: "none",
    },
    tsState: {
      type: "enum",
      options: STATE_ENUMS,
      default: "none",
    },
    previousTsEntry: {
      type: "json",
    },
    history: {
      type: "list",
      of: VersionHistory,
      required: true,
    },
  },
  computedFields,
}));
