import fs from "fs";
import path from "path";
import { isPathExists } from "./is-path-exists";
import { spawn } from "./spawn";

/**
 * Write a file
 * @param {Object} options - options
 * @param {string} options.file - the file to write
 * @param {string} options.data - the data to write in the file
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const writeFile = async ({ file, data = "", cwd = process.cwd() }) => {
  const filePath = path.join(cwd, file);
  const dirname = path.dirname(filePath);

  // if the path doesn't exist, create the folders
  if (!(await isPathExists({ path: dirname }))) {
    await fs.promises.mkdir(dirname, {
      recursive: true,
    });
  }

  // if the file already exist, remove it
  if (await isPathExists({ path: filePath })) {
    await fs.promises.rm(filePath);
  }

  // write the file
  await fs.promises.writeFile(filePath, data);

  // format the file
  await spawn({ command: "prettier", args: ["--write", filePath] });
};
