import { logger } from "./logger";
import { spawn } from "./spawn";

/**
 * Install project dependencies
 * @param {Object} options - options
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const installDependencies = async ({
  packageManager = "npm",
  cwd = process.cwd(),
}) => {
  const args = packageManager === "yarn" ? [] : ["install"];

  try {
    await spawn({ command: packageManager, args, options: { cwd } });
  } catch (error) {
    logger.error(`Cannot execute '${packageManager} ${args.join(" ")}'`);
    throw error;
  }
};
