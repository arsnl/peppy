import { getPackageManifest } from "./get-package-manifest";
import { getPackageVersionFromManifest } from "./get-package-version-from-manifest";
import { spawn } from "./spawn";

/**
 * Gets the contents of the package.json for a package at a specific version
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.packageManager - the package manager to use (yarn or npm)
 * @param {string} options.version - the version (or version tag) to attempt to install.
 * @returns {Promise<Object>} - a Promise which resolves to the JSON response from the registry
 */
const getPackageJSON = async ({ packageName, packageManager, version }) => {
  const manifest = await getPackageManifest({
    packageName,
    packageManager,
    version,
  });
  const packageVersion = getPackageVersionFromManifest({
    manifest,
    version,
  });
  const packageJson = await getPackageManifest({
    packageName,
    packageManager,
    version: packageVersion,
  });

  return packageJson;
};

/**
 * Builds the package install string based on the version
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.version - version string of the package
 * @returns {string} - the package name and version formatted for an install command
 */
const getPackageString = ({ packageName, version }) => {
  // check for whitespace
  if (version.includes(" ")) {
    // Semver ranges can have a join of comparator sets
    // e.g. '^3.0.2 || ^4.0.0' or '>=1.2.7 <1.3.0'
    // Take the last version in the range
    const rangeSplit = version.split(" ");
    const versionToInstall = rangeSplit[rangeSplit.length - 1];

    if (versionToInstall === null) {
      return packageName;
    }
    return `${packageName}@${versionToInstall}`;
  }
  return `${packageName}@${version}`;
};

/**
 * Installs the peer dependencies of the provided packages
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package for which to install peer dependencies
 * @param {string} options.packageManager - the package manager to use (yarn or npm)
 * @param {string} options.version - the version of the package
 * @param {string} options.dev - whether to install the dependencies as devDependencies
 * @param {boolean} options.onlyPeers - whether to install the package itself or only its peers
 * @param {string} options.extraArgs - extra arguments to pass through to NPM or Yarn
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const installPeerDependencies = async ({
  packageName,
  packageManager = "npm",
  version = "latest",
  dev = false,
  onlyPeers = false,
  extraArgs = "",
  cwd = process.cwd(),
}) => {
  const packageJSON = await getPackageJSON({
    packageName,
    packageManager,
    version,
  });

  // Get peer dependencies for max satisfying version
  const peerDepsVersionMap = packageJSON.peerDependencies;
  if (typeof peerDepsVersionMap === "undefined") {
    throw new TypeError(
      "The package you are trying to install has no peer " +
        "dependencies. Use yarn or npm to install it manually."
    );
  }

  // Construct packages string with correct versions for install
  // If onlyPeers option is true, don't install the package itself,
  // only its peers.
  let packagesString = onlyPeers ? "" : `${packageName}@${packageJSON.version}`;

  const packageList = Object.keys(peerDepsVersionMap).map((name) =>
    getPackageString({
      packageName: name,
      version: peerDepsVersionMap[name],
    })
  );

  if (packageList.length > 0) {
    packagesString = `${packagesString} ${packageList.join(" ")}`;
  }

  // Construct command based on package manager of current project
  const subcommand = packageManager === "yarn" ? "add" : "install";
  let devFlag = packageManager === "yarn" ? "--dev" : "--save-dev";
  if (!dev) {
    devFlag = "";
  }

  let args = [];
  // I know I can push it, but I'll just
  // keep concatenating for consistency
  args = args.concat(subcommand);
  // If we have spaces in our args spawn()
  // cries foul so we'll split the packagesString
  // into an array of individual packages
  args = args.concat(
    packagesString.split(" ").map((pkgName) => {
      if (pkgName.slice(-2) === "-0") {
        // Remove -0
        return pkgName.slice(0, Math.max(0, pkgName.length - 2));
      }
      return `${pkgName}`;
    })
  );
  // If devFlag is empty, then we'd be adding an empty arg
  // That causes the command to fail
  if (devFlag !== "") {
    args = args.concat(devFlag);
  }
  // If we're using NPM, and there's no dev flag
  // make sure to save deps in package.json under "dependencies"
  if (devFlag === "" && packageManager === "npm") {
    args = args.concat("--save");
  }

  // Pass extra args through
  if (extraArgs !== "") {
    args = args.concat(extraArgs);
  }

  // Remove empty args
  // There's a bug with Yarn 1.0 in which an empty arg
  // causes the install process to fail with a "malformed
  // response from the registry" error
  args = args.filter((a) => a !== "");

  await spawn({ command: packageManager, args, options: { cwd } });
};
