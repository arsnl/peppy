/* eslint-disable import/no-extraneous-dependencies */
import {
  type ComputedFields,
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import stringify from "fast-json-stable-stringify";
import prettier from "prettier";
import { eslintPluginsConfig } from "../../src/config/eslint-plugin";

const VersionHistory = defineNestedType(() => ({
  name: "VersionHistory",
  fields: {
    version: { type: "string", required: true },
    state: {
      type: "enum",
      options: ["new", "removed", "updated", "unchanged"],
      required: true,
    },
  },
}));

const computedFields: ComputedFields = {
  jsLevel: {
    type: "string",
    resolve: (doc) => doc?.jsEntry?.[0] ?? null,
  },
  jsUpdated: {
    type: "boolean",
    resolve: (doc) => {
      const { jsEntry, previousJsEntry } = doc;
      return (
        !!jsEntry &&
        !!previousJsEntry &&
        stringify(jsEntry) !== stringify(previousJsEntry)
      );
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
    type: "string",
    resolve: (doc) => doc?.tsEntry?.[0] ?? null,
  },
  tsUpdated: {
    type: "boolean",
    resolve: (doc) => {
      const { tsEntry, previousTsEntry } = doc;
      return (
        !!tsEntry &&
        !!previousTsEntry &&
        stringify(tsEntry) !== stringify(previousTsEntry)
      );
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
  state: {
    type: "enum",
    resolve: (doc) =>
      !doc?.previousJsEntry && !doc?.previousTsEntry
        ? "new"
        : !doc?.jsEntry && !doc?.tsEntry
        ? "removed"
        : computedFields.jsUpdated.resolve(doc) ||
          computedFields.tsUpdated.resolve(doc)
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
      const state = computedFields.state.resolve(doc);
      const version = doc?.version || "next";
      const previousHistory = [...(doc?.history ?? [])].filter(
        (entry) => entry.version !== version,
      );

      return state === "unchanged"
        ? previousHistory
        : [{ version, state }, ...previousHistory];
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
    previousJsEntry: {
      type: "json",
    },
    tsEntry: {
      type: "json",
    },
    previousTsEntry: {
      type: "json",
    },
    state: {
      type: "enum",
      options: ["new", "removed", "updated", "unchanged"],
    },
    history: {
      type: "list",
      of: VersionHistory,
      required: true,
    },
  },
  computedFields,
}));
