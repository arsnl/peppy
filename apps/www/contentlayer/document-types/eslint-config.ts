import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  nameKey: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
  },
  extendKey: {
    type: "string",
    resolve: (doc) => {
      const key = computedFields.nameKey.resolve(doc);

      return `peppy${key === "base" ? "" : `/${key}`}`;
    },
  },
  slug: {
    type: "string",
    resolve: (doc) =>
      `/docs/configurations/${computedFields.nameKey.resolve(doc)}`,
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
    icon: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));
