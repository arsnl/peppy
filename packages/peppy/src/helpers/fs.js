import execa from "execa";
import fs from "fs";
import nodePath from "path";

/**
 * Check if a path exist
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathExists = async ({ path = process.cwd(), cwd = "" }) => {
  try {
    await fs.promises.access(
      nodePath.join(cwd, path),
      (fs.constants || fs).F_OK
    );
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if a path is writeable
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathWriteable = async ({ path = process.cwd() }) => {
  try {
    await fs.promises.access(path, (fs.constants || fs).W_OK);
    return true;
  } catch {
    return false;
  }
};

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

    const filePath = nodePath.join(dest, file);
    const dirname = nodePath.dirname(filePath);

    if (!(await isPathExists({ path: dirname }))) {
      await fs.promises.mkdir(dirname, {
        recursive: true,
      });
    }

    if (await isPathExists({ path: filePath })) {
      await fs.promises.rm(filePath);
    }

    await fs.promises.copyFile(
      nodePath.join(source, file),
      nodePath.join(dest, file)
    );
  }, undefined);
};

/**
 * Gets paths that exists in a folder and match a list of paths
 * @param {Object} options - options
 * @param {Array<string>} options.paths - a list of paths to match
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to a list of matching paths
 */
export const getExistingPaths = async ({ paths = [], cwd = process.cwd() }) => {
  const dirPaths = await fs.promises.readdir(cwd);

  return dirPaths.filter((currentPath) => paths.includes(currentPath));
};

/**
 * Write a file
 * @param {Object} options - options
 * @param {string} options.file - the file to write
 * @param {string} options.data - the data to write in the file
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const writeFile = async ({ file, data = "", cwd = process.cwd() }) => {
  const filePath = nodePath.join(cwd, file);
  const dirname = nodePath.dirname(filePath);

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
  await execa("prettier", ["--write", filePath]);
};
