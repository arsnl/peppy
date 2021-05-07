import fs from "fs";
import path from "path";
import { isPathExists } from "./is-path-exists";

/**
 * Copy files from a source to a destination folder
 * @param {Object} options - options
 * @param {Array.<string>} options.files - a list of files, relative to the source folder, to copy
 * @param {string} options.source - the source folder path
 * @param {string} options.dest - the destination folder path
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const copyFiles = async ({
  files = [],
  source = process.cwd(),
  dest = process.cwd(),
}) => {
  await files.reduce(async (acc, file) => {
    await acc; // need the previous result to be resolved before call the new async function

    const filePath = path.join(dest, file);
    const dirname = path.dirname(filePath);

    if (!(await isPathExists({ path: dirname }))) {
      await fs.promises.mkdir(dirname, {
        recursive: true,
      });
    }

    if (await isPathExists({ path: filePath })) {
      await fs.promises.rm(filePath);
    }

    await fs.promises.copyFile(path.join(source, file), path.join(dest, file));
  }, undefined);
};
