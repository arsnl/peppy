import fs from "fs";

/**
 * Check if a path exist
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathExists = async ({ path = process.cwd() }) => {
  try {
    await fs.promises.access(path, (fs.constants || fs).F_OK);
    return true;
  } catch {
    return false;
  }
};
