import { makeSource } from "contentlayer/source-files";
import { Doc } from "./document-types/doc";
import { ESLintConfig } from "./document-types/eslint-config";
import { Rule } from "./document-types/rule";
import { mdxOptions } from "./mdx-options";

export const contentLayerConfig = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc, Rule, ESLintConfig],
  mdx: mdxOptions,
});
