import { getPackageManifest } from "./get-package-manifest";
import { getPackagePath } from "./get-package-path";
import { getPackageVersionFromManifest } from "./get-package-version-from-manifest";
import { logger } from "./logger";
import { readPackageJSON } from "./package-json";
import { spawn } from "./spawn";

/**
 * Gets the contents of the package.json for a package at a specific version
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.packageVersion - the version (or version tag) to attempt to install.
 * @param {boolean} options.local - Gets the package dependencies list from the local node_modules instead of remote registry
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Object>} - a Promise which resolves to the JSON response from the registry
 */
const getPackageJSON = async ({
  packageName,
  packageManager,
  packageVersion,
  local = false,
  cwd = process.cwd(),
}) => {
  if (local) {
    const packagePath = getPackagePath({ packageName, cwd });
    if (packagePath) {
      const packageJSON = await readPackageJSON({ cwd: packagePath });
      return packageJSON;
    }
  }

  const manifest = await getPackageManifest({
    packageName,
    packageManager,
    packageVersion,
  });
  const version = getPackageVersionFromManifest({
    manifest,
    packageVersion,
  });
  const packageJSON = await getPackageManifest({
    packageName,
    packageManager,
    packageVersion: version,
  });

  return packageJSON;
};

/**
 * Builds the package install string based on the version
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.packageVersion - version string of the package
 * @returns {string} - the package name and version formatted for an install command
 */
const getPackageString = ({ packageName, packageVersion }) => {
  // check for whitespace
  if (packageVersion.includes(" ")) {
    // Semver ranges can have a join of comparator sets
    // e.g. '^3.0.2 || ^4.0.0' or '>=1.2.7 <1.3.0'
    // Take the last version in the range
    const rangeSplit = packageVersion.split(" ");
    const versionToInstall = rangeSplit[rangeSplit.length - 1];

    if (versionToInstall === null) {
      return packageName;
    }
    return `${packageName}@${versionToInstall}`;
  }
  return `${packageName}@${packageVersion}`;
};

/**
 * Installs the peer dependencies of the provided packages
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package for which to install peer dependencies
 * @param {string} options.packageVersion - the version of the package
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {boolean} options.dev - whether to install the dependencies as devDependencies
 * @param {boolean} options.global - install the packages globally
 * @param {boolean} options.onlyPeers - whether to install the package itself or only its peers
 * @param {boolean} options.local - Disable going to a remote registry to find a list of peers. Use local node_modules instead
 * @param {boolean} options.dryRun - whether to actually install the packages or just display
 * @param {boolean} options.silent - whether to log or not the installation string
 * @param {string} options.extraArgs - extra arguments to pass through to NPM or Yarn
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const installPeerDependencies = async ({
  packageName,
  packageVersion = "latest",
  packageManager = "npm",
  dev = false,
  global = false,
  onlyPeers = false,
  local = false,
  dryRun = false,
  silent = false,
  extraArgs = "",
  cwd = process.cwd(),
}) => {
  const packageJSON = await getPackageJSON({
    packageName,
    packageManager,
    packageVersion,
    local,
    cwd,
  });

  // Get peer dependencies for max satisfying version
  const peerDepsVersionMap = packageJSON.peerDependencies;
  if (typeof peerDepsVersionMap === "undefined") {
    logger.error(
      "The package you are trying to install has no peer dependencies. Use npm, yarn or pnpm to install it manually."
    );
    process.exit(0);
  }

  // Construct packages string with correct versions for install
  // If onlyPeers option is true, don't install the package itself,
  // only its peers.
  let packagesString = onlyPeers ? "" : `${packageName}@${packageJSON.version}`;

  const packageList = Object.keys(peerDepsVersionMap).map((name) =>
    getPackageString({
      packageName: name,
      packageVersion: peerDepsVersionMap[name],
    })
  );

  if (packageList.length > 0) {
    packagesString = `${packagesString} ${packageList.join(" ")}`;
  }

  // Construct command based on package manager of current project
  let globalFlag = packageManager === "yarn" ? "global" : "--global";
  if (!global) {
    globalFlag = "";
  }
  const subcommand = packageManager === "yarn" ? "add" : "install";
  let devFlag = packageManager === "yarn" ? "--dev" : "--save-dev";
  if (!dev) {
    devFlag = "";
  }

  let args = [];
  // I know I can push it, but I'll just
  // keep concatenating for consistency
  // global must preceed add in yarn; npm doesn't care
  args = args.concat(globalFlag);
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
  // If we're using NPM, and there's no dev flag and it's not a global install
  // make sure to save deps in package.json under "dependencies"
  if (devFlag === "" && packageManager === "npm" && !global) {
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

  //  Show user the command that's running
  const commandString = `${packageManager} ${args.join(" ")}\n`;
  if (dryRun) {
    logger.log(
      `This command would have been run to install ${packageName}@${packageVersion}:`
    );
    logger.log(commandString);
  } else {
    if (!silent) {
      logger.log(`Installing peerdeps for ${packageName}@${packageVersion}`);
      logger.log(commandString);
    }

    await spawn({
      command: packageManager,
      args,
      options: { cwd, stdio: silent ? "pipe" : "inherit" },
    });
  }
};
