import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  key: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
  },
  extendKey: {
    type: "string",
    resolve: (doc) => {
      const key = computedFields.key.resolve(doc);

      return `peppy${key === "base" ? "" : `/${key}`}`;
    },
  },
};

export const ESLintConfig = defineDocumentType(() => ({
  name: "ESLintConfig",
  filePathPattern: `eslint-configs/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));
