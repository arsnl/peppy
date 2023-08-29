import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  key: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
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
  },
  computedFields,
}));
