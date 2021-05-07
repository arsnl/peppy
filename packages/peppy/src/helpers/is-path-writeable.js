import fs from "fs";

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
