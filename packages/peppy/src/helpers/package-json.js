import execa from "execa";
import mergeDeepLeft from "ramda/es/mergeDeepLeft";
import readPackage from "read-pkg";
import writePackage from "write-pkg";
import { logger } from "./logger";

/**
 * Create a package.json file
 * @param {Object} options - options
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const createPackageJSON = async ({
  packageManager = "npm",
  cwd = process.cwd(),
}) => {
  const args = ["init"];

  try {
    await execa(packageManager, args, { cwd, stdio: "inherit" });
  } catch (error) {
    logger.error(`Cannot execute '${packageManager} ${args.join(" ")}'`);
    throw error;
  }
};

/**
 * Read a package.json file
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Object>} - a Promise which resolves to the content of the package.json
 */
export const readPackageJSON = async ({ cwd = process.cwd() }) =>
  readPackage({ cwd, normalize: false });

/**
 * Write in a package.json file
 * @param {Object} options - options
 * @param {Object} options.data - the data to write
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const writePackageJSON = async ({ data = {}, cwd = process.cwd() }) =>
  writePackage(cwd, data, { normalize: false });

/**
 * Edit a package.json file
 * @param {Object} options - options
 * @param {Object} options.data - the data to write
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const editPackageJSON = async ({ data = {}, cwd = process.cwd() }) => {
  const pkg = await readPackageJSON({ cwd });

  await writePackageJSON({ data: mergeDeepLeft(pkg, data), cwd });
};
