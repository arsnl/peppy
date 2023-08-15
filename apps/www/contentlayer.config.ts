/* eslint-disable no-param-reassign */
import { type MDXOptions } from "contentlayer/core";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import type { ComputedFields } from "contentlayer/source-files";

type Pluggable = Required<MDXOptions>["rehypePlugins"][0];

const rehypeNpmCommand: Pluggable = () => (tree) => {
  visit(tree, (node) => {
    if (node.type !== "element" || node?.tagName !== "pre") {
      return;
    }

    // npm install.
    if (node.properties?.__rawString__?.startsWith("npm install")) {
      const npmCommand = node.properties?.__rawString__;
      node.properties.__npmCommand__ = npmCommand;
      node.properties.__yarnCommand__ = npmCommand.replace(
        "npm install",
        "yarn add",
      );
      node.properties.__pnpmCommand__ = npmCommand.replace(
        "npm install",
        "pnpm add",
      );
    }

    // npx create.
    if (node.properties?.__rawString__?.startsWith("npx create-")) {
      const npmCommand = node.properties?.__rawString__;
      node.properties.__npmCommand__ = npmCommand;
      node.properties.__yarnCommand__ = npmCommand.replace(
        "npx create-",
        "yarn create ",
      );
      node.properties.__pnpmCommand__ = npmCommand.replace(
        "npx create-",
        "pnpm create ",
      );
    }

    // npx.
    if (
      node.properties?.__rawString__?.startsWith("npx") &&
      !node.properties?.__rawString__?.startsWith("npx create-")
    ) {
      const npmCommand = node.properties?.__rawString__;
      node.properties.__npmCommand__ = npmCommand;
      node.properties.__yarnCommand__ = npmCommand;
      node.properties.__pnpmCommand__ = npmCommand.replace("npx", "pnpm dlx");
    }
  });
};

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
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

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }

            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "css-variables",
          keepBackground: false,
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties.__withMeta__ =
              node.children.at(0).tagName === "div";
            preElement.properties.__rawString__ = node.__rawString__;

            if (node.__src__) {
              preElement.properties.__src__ = node.__src__;
            }

            if (node.__event__) {
              preElement.properties.__event__ = node.__event__;
            }

            if (node.__style__) {
              preElement.properties.__style__ = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
