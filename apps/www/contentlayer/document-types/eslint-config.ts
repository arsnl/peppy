import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  eslintExtend: {
    type: "string",
    resolve: (doc) => {
      const key = computedFields.key.resolve(doc);

      return `peppy${key === "base" ? "" : `/${key}`}`;
    },
  },
  key: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/i, ""),
  },
  slug: {
    type: "string",
    resolve: (doc) => computedFields.key.resolve(doc),
  },
  href: {
    type: "string",
    resolve: (doc) =>
      `/docs/configurations/${computedFields.slug.resolve(doc)}`,
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
