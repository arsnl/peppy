import { spawn } from "./spawn";

/**
 * Gets registry manifest about the package
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.packageVersion - the version (or version tag) to attempt to install
 * @returns {Promise<Object>} - a Promise which resolves to the JSON response from the registry
 */
export const getPackageManifest = async ({
  packageName,
  packageManager,
  packageVersion,
}) => {
  const pkgString = packageVersion
    ? `${packageName}@${packageVersion}`
    : packageName;
  const args = ["info", pkgString, "--json"];
  const response = await spawn({
    command: packageManager,
    args,
  });
  const metadata = JSON.parse(response);

  return metadata.data || metadata;
};
