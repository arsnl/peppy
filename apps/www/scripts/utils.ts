/* eslint-disable import/no-extraneous-dependencies */
import stringify from "fast-json-stable-stringify";
import fs from "node:fs";
import prettier, { type Options } from "prettier";

export const writeWithPrettier = async ({
  filepath,
  content,
  options = {},
}: {
  filepath: string;
  content: string;
  options?: Options;
}) => {
  fs.writeFileSync(
    filepath,
    await prettier.format(content, {
      parser: "babel",
      ...options,
    }),
    "utf-8",
  );
};

export const getStringifiedJSONWithPrettier = async (value: unknown) =>
  prettier.format(stringify(value), {
    parser: "json",
  });
