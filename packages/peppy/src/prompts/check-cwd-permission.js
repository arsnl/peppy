import { isPathWriteable } from "../helpers/fs";
import { logger } from "../helpers/logger";

/**
 * Check if the current working directory is writable, if not, exit the process.
 * @param {Object} [options={}] - An object with the following properties:
 * @param {string} [options.cwd=process.cwd()] - The current working directory.
 */
export const promptCheckCWDPermission = async ({
  cwd = process.cwd(),
} = {}) => {
  if (!(await isPathWriteable({ path: cwd }))) {
    logger.error(
      `The projet folder "${cwd}" is not writable, please check folder permissions and try again.`
    );
    logger.error(
      "It is likely you do not have write permissions for this folder."
    );
    process.exit(0);
  }
};
