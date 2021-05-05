import { readPackageJSON } from "./package-json";

/**
 * Check if package is in package.json dependencies
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPackageInDependencies = async ({
  packageName,
  cwd = process.cwd(),
}) => {
  const { dependencies = {}, devDependencies = {} } = await readPackageJSON({
    cwd,
  });

  return !!(dependencies?.[packageName] || devDependencies?.[packageName]);
};
