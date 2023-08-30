/* eslint-disable import/no-extraneous-dependencies */
import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";
import stringify from "fast-json-stable-stringify";

const computedFields: ComputedFields = {
  ruleKey: {
    type: "string",
    resolve: (doc) => doc.ruleName.replace("/", "_"),
  },
  configName: {
    type: "string",
    resolve: (doc) => {
      const [, , configName] = doc._raw.flattenedPath.split("/");
      return configName;
    },
  },
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
  slug: {
    type: "string",
    resolve: (doc) => {
      const configName = computedFields.configName.resolve(doc);
      const ruleKey = computedFields.ruleKey.resolve(doc);

      return `/docs/configurations/${configName}/${ruleKey}`;
    },
  },
};

export const RuleVersion = defineDocumentType(() => ({
  name: "RuleVersion",
  filePathPattern: `rule-versions/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ruleName: {
      type: "string",
      required: true,
    },
    version: {
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
