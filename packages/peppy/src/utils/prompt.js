import { green, red } from "kleur";
import prompts from "prompts";
import { satisfies } from "semver";
import packageInfo from "../../package.json";
import {
  createPkg,
  getNodeVersionInstalled,
  getNpmVersionInstalled,
  getPackageManagersChoices,
  hasGitChanges,
  hasMercurialChanges,
  isPathExists,
  isPathWriteable,
} from "./helpers";
import { logger } from "./logger";

/**
 * Check if the user have exited/aborted a prompt and exit the process if it's the case
 * @param {any} promptsValue - the value of the prompts
 * @returns {Void} - nothing
 */
export const handlePromptCancel = () => {
  logger.log("[Peppy] CLI were aborted by the user.");
  process.exit(0);
};

/**
 * Check if the current working directory is writable, if not, it exits the process.
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const promptCheckCWDPermission = async ({
  cwd = process.cwd(),
} = {}) => {
  if (!(await isPathWriteable({ path: cwd }))) {
    logger.error(
      `The folder "${cwd}" is not writable, please check folder permissions and try again.`,
      "It is likely you do not have write permissions for this folder."
    );
    process.exit(0);
  }
};

/**
 * Checks if the project folder has uncommitted changes on Git or Mercurial,
 * and if it does, it asks the user if they want to continue
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const promptCheckGitStatus = async ({ cwd = process.cwd() } = {}) => {
  const gitChanges = await hasGitChanges({ cwd });
  const mercurialChanges = await hasMercurialChanges({ cwd });

  if (gitChanges || mercurialChanges) {
    const where =
      gitChanges && mercurialChanges
        ? "on Git and Mercurial"
        : gitChanges
        ? "on Git"
        : "on Mercurial";

    const { goFoward } = await prompts(
      {
        type: "confirm",
        name: "goFoward",
        message: `The project folder have uncommitted changes ${where}. Are you sure you want to continue?`,
        initial: false,
      },
      { onCancel: handlePromptCancel }
    );

    if (!goFoward) {
      logger.error(`Commit the uncommitted changes ${where} to continue.`);
      process.exit(0);
    }
  }
};

/**
 * Check if the version of Node.js installed on the user system does satisfy
 * the minimal Node.js version, if not, it exits the process.
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const promptCheckNodeVersion = async ({ cwd = process.cwd() } = {}) => {
  const installedVersion = await getNodeVersionInstalled({ cwd });
  const minimalVersion =
    (packageInfo.engines && packageInfo.engines.node) || "";

  if (!satisfies(installedVersion, minimalVersion)) {
    logger.error(
      `The version of Node.js installed on your system (${red(
        installedVersion
      )}) does not satisfy the minimal Node.js version (${green(
        minimalVersion
      )}) required by ${packageInfo.name}.`,
      `You must update Node.js on your system in order to use this package.`
    );
    process.exit(0);
  }
};

/**
 * Check if the version of npm installed on the user system does satisfy
 * the minimal NPM version, if not, it exits the process.
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const promptCheckNPMVersion = async ({ cwd = process.cwd() } = {}) => {
  const installedVersion = await getNpmVersionInstalled({ cwd });
  const minimalVersion = (packageInfo.engines && packageInfo.engines.npm) || "";

  if (!satisfies(installedVersion, minimalVersion)) {
    logger.error(
      `The version of npm installed on your system (${red(
        installedVersion
      )}) does not satisfy the minimal npm version (${green(
        minimalVersion
      )}) required by ${packageInfo.name}.`,
      `You must update npm on your system in order to use this package.`
    );
    process.exit(0);
  }
};

/**
 * Checks if the current working directory has a package.json file.
 * If it doesn't, it asks the user if they want to create one.
 * If they do, it creates one. If they don't, it exits the process
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @param {string} options.packageManager - the package manager to use
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const promptCheckPackageJSON = async ({
  cwd = process.cwd(),
  packageManager = "npm",
} = {}) => {
  if (!(await isPathExists({ path: "package.json", cwd }))) {
    const { initPackageJSON } = await prompts(
      {
        type: "confirm",
        name: "initPackageJSON",
        message:
          "Your project don't have a package.json. Do you want to create one?",
        initial: true,
      },
      { onCancel: handlePromptCancel }
    );

    if (initPackageJSON) {
      await createPkg({ packageManager, cwd });
    } else {
      logger.error(
        "The installation cannot continue. The installation must be inside a Node.js project with a package.json."
      );
      process.exit(0);
    }
  }
};

/**
 * Prompts the user to select a package manager if there are multiple installed on the system
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @param {string} options.packageManager - the package manager to use
 * @returns {Promise<string>} - a Promise which resolves to the package manager that the user has selected
 */
export const promptCheckPackageManager = async ({
  cwd = process.cwd(),
  packageManager,
} = {}) => {
  if (packageManager) {
    return packageManager;
  }

  const packageManagersChoices = await getPackageManagersChoices({ cwd });

  if (packageManagersChoices.length < 2) {
    return packageManagersChoices[0].value;
  }

  const { selectedPackageManager } = await prompts(
    {
      type: "select",
      name: "selectedPackageManager",
      message:
        "You have multiple package managers installed on your system. Wich one do you want to use?",
      instructions: false,
      choices: packageManagersChoices,
    },
    { onCancel: handlePromptCancel }
  );

  return selectedPackageManager;
};
