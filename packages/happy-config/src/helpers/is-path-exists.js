import fs from "fs";
import { join } from "path";

/**
 * Check if a path exist
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathExists = async ({ path = process.cwd(), cwd = "" }) => {
  try {
    await fs.promises.access(join(cwd, path), (fs.constants || fs).F_OK);
    return true;
  } catch {
    return false;
  }
};
