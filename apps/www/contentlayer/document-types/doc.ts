import {
  type ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  key: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  slug: {
    type: "string",
    // return the last part of the path
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(-1)[0],
  },
  href: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    featured: {
      type: "boolean",
      default: false,
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields,
}));
