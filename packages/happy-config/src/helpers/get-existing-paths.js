import fs from "fs";

/**
 * Gets paths that exists in a folder and match a list of paths
 * @param {Object} options - options
 * @param {Array<string>} options.paths - a list of paths to match
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to a list of matching paths
 */
export const getExistingPaths = async ({ paths = [], cwd = process.cwd() }) => {
  const dirPaths = await fs.promises.readdir(cwd);

  return dirPaths.filter((path) => paths.includes(path));
};
