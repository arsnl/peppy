import globalDirs from "global-dirs";
import path from "path";
import resolveFrom from "resolve-from";

/**
 * Gets local package path
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {string|undefined} - the  package path or undefined if the package doesnt exist
 */
export const getPackagePathLocal = ({ packageName, cwd = process.cwd() }) =>
  resolveFrom.silent(cwd, packageName);

/**
 * Gets global package path
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @returns {string|undefined} - the  package path or undefined if the package doesnt exist
 */
export const getPackagePathGlobal = ({ packageName }) => {
  try {
    try {
      return require.resolve(path.join(globalDirs.yarn.packages, packageName));
    } catch {
      return require.resolve(path.join(globalDirs.npm.packages, packageName));
    }
  } catch {
    return undefined;
  }
};

/**
 * Gets package local or global path
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {string|undefined} - the  package path or undefined if the package doesnt exist
 */
export const getPackagePath = ({ packageName, cwd = process.cwd() }) =>
  getPackagePathLocal({ packageName, cwd }) ||
  getPackagePathGlobal({ packageName });
