import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";
import { VersionRuleChangesEntry } from "../nested-types/version-rule-changes-entry";

const computedFields: ComputedFields = {
  version: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/i, ""),
  },
};

export const Version = defineDocumentType(() => ({
  name: "Version",
  filePathPattern: `versions/*.mdx`,
  contentType: "mdx",
  fields: {
    publishedDate: {
      type: "date",
      required: true,
    },
    ruleChanges: {
      type: "list",
      of: VersionRuleChangesEntry,
      required: true,
    },
  },
  computedFields,
}));
