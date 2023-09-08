import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";
import { VersionChangesEntry } from "../nested-types/version-changes-entry";

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
    changes: {
      type: "list",
      of: VersionChangesEntry,
      required: true,
    },
  },
  computedFields,
}));
