/* eslint-disable import/no-extraneous-dependencies */
import fsPromises from "node:fs/promises";
import path from "node:path";
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
  await fsPromises.mkdir(path.dirname(filepath), { recursive: true });

  const data = await prettier.format(content, {
    parser: "babel",
    ...options,
  });

  await fsPromises.writeFile(filepath, data, { encoding: "utf-8", flag: "w" });
};
