import {
  getPackagePath,
  getPackagePathGlobal,
  getPackagePathLocal,
} from "./get-package-path";

/**
 * Check if package is installed locally
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {boolean} - true if the package is installed, false else
 */
export const isPackageInstalledLocally = ({
  packageName,
  cwd = process.cwd(),
}) => !!getPackagePathLocal({ packageName, cwd });

/**
 * Check if package is installed globally
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @returns {boolean} - true if the package is installed, false else
 */
export const isPackageInstalledGlobally = ({ packageName }) =>
  !!getPackagePathGlobal({ packageName });

/**
 * Check if package is installed locally of globally
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {boolean} - true if the package is installed, false else
 */
export const isPackageInstalled = ({ packageName, cwd = process.cwd() }) =>
  !!getPackagePath({ packageName, cwd });
