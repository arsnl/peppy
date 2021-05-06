/* eslint-disable security/detect-non-literal-require, import/no-dynamic-require, global-require */
import { getPackagePath } from "./get-package-path";

/**
 * Require a module from a different working directory
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {Module} - return the required module
 */
export const requireFrom = ({ packageName, cwd = process.cwd() }) => {
  const packagePath = getPackagePath({ packageName, cwd });

  if (!packagePath) {
    throw new Error(
      `Cannot require package '${packageName}'. The package is not installed locally nor globally.`
    );
  }

  // TODO: Fix issue with vercel/ncc about "dynamic require".
  return require(packagePath);
};
