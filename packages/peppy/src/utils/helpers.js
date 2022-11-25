/* eslint-disable no-empty */
import jsonc from "comment-json";
import execa from "execa";
import fs from "fs";
import { green } from "kleur";
import ora from "ora";
import nodePath from "path";
import { sync as rimrafSync } from "rimraf";
import { clean } from "semver";
import { logger } from "./logger";

/**
 * Check if a path exist
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathExists = async ({ path = process.cwd(), cwd = "" } = {}) => {
  try {
    await fs.promises.access(
      nodePath.join(cwd, path),
      (fs.constants || fs).F_OK
    );

    return true;
  } catch {
    return false;
  }
};

/**
 * Check if a path is writeable
 * @param {Object} options - options
 * @param {string} options.path - the path to check
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPathWriteable = async ({ path = process.cwd() } = {}) => {
  try {
    await fs.promises.access(path, (fs.constants || fs).W_OK);

    return true;
  } catch {
    return false;
  }
};

/**
 * Gets paths that exists in a folder and match a list of paths
 * @param {Object} options - options
 * @param {Array<string>} options.paths - a list of paths to match
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to a list of matching paths
 */
export const getExistingPaths = async ({
  paths = [],
  cwd = process.cwd(),
} = {}) => {
  const dirPaths = await fs.promises.readdir(cwd);

  return dirPaths.filter((currentPath) => paths.includes(currentPath));
};

/**
 * Read a file
 * @param {Object} options - options
 * @param {string} options.file - the file to read
 * @param {string} options.json - convert data to json
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves the data in the file to read
 */
export const readFile = async ({ file, json, cwd = process.cwd() } = {}) => {
  const filePath = nodePath.join(cwd, file);

  const data = await fs.promises.readFile(filePath, "utf8");

  return json ? JSON.parse(data) : data;
};

/**
 * Write a file
 * @param {Object} options - options
 * @param {string} options.file - the file to write
 * @param {string} options.data - the data to write in the file
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const writeFile = async ({
  file,
  data = "",
  cwd = process.cwd(),
} = {}) => {
  const filePath = nodePath.join(cwd, file);
  const dirname = nodePath.dirname(filePath);

  // if the path doesn't exist, create the folders
  if (!(await isPathExists({ path: dirname }))) {
    await fs.promises.mkdir(dirname, {
      recursive: true,
    });
  }

  // if the file already exist, remove it
  if (await isPathExists({ path: filePath })) {
    await fs.promises.rm(filePath);
  }

  // write the file
  await fs.promises.writeFile(filePath, data);

  // format the file
  await execa("npx", ["prettier", "--write", filePath]);
};

/**
 * Check if the current working directory is in a Git repository
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isInGitRepository = async ({ cwd = process.cwd() } = {}) => {
  try {
    await execa("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd,
      stdio: "ignore",
    });

    return true;
  } catch (_) {}

  return false;
};

/**
 * Check if the current working directory is in a Mercurial repository
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isInMercurialRepository = async ({ cwd = process.cwd() } = {}) => {
  try {
    await execa("hg", ["--cwd", ".", "root"], {
      cwd,
      stdio: "ignore",
    });

    return true;
  } catch (_) {}

  return false;
};

/**
 * Check if the current working directory has Git changes not commited
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const hasGitChanges = async ({ cwd = process.cwd() } = {}) => {
  try {
    if (await isInGitRepository({ cwd })) {
      const { stdout } = await execa("git", ["status", "--porcelain"], { cwd });

      return !!stdout;
    }
  } catch (_) {}

  return false;
};

/**
 * Check if the current working directory has Mercurial changes not commited
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const hasMercurialChanges = async ({ cwd = process.cwd() } = {}) => {
  try {
    if (await isInMercurialRepository({ cwd })) {
      const { stdout } = await execa("hg", ["status"], { cwd });

      return !!stdout;
    }
  } catch (_) {}

  return false;
};

/**
 * Remove all the ESLint configurations files and properties and replace it by a single .eslintrc.js file
 * with a calculated configuration based on the existing packages in the project
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const addESLintConfiguration = async ({ cwd = process.cwd() } = {}) => {
  const spinner = ora(`Adding ESLint configuration file`).start();

  const eslintFiles = await getExistingPaths({
    paths: [
      ".eslintrc.js",
      ".eslintrc.cjs",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      ".eslintrc.json",
    ],
    cwd,
  });

  // Remove ESLint files
  eslintFiles.forEach((file) => {
    rimrafSync(nodePath.join(cwd, file));
  });

  // Remove ESLint configuration property
  const { eslintConfig, ...pkgRest } = await readPkg({ cwd });
  await writePkg({ data: pkgRest, cwd });

  // Calculating the configuration
  const isNextInstalled = await isPackageInDependencies({
    packageName: "next",
    cwd,
  });
  const isReactInstalled = await isPackageInDependencies({
    packageName: "react",
    cwd,
  });
  const isJestInstalled = await isPackageInDependencies({
    packageName: "jest",
    cwd,
  });
  const isTypeScriptInstalled = await isPackageInDependencies({
    packageName: "typescript",
    cwd,
  });

  const configuration = {
    extends: [
      "peppy",
      isNextInstalled && "peppy/next",
      isReactInstalled && !isNextInstalled && "peppy/react",
      isJestInstalled && "peppy/jest",
    ].filter((extend) => !!extend),
    ...(isTypeScriptInstalled
      ? {
          parserOptions: {
            tsconfigRootDir: "__dirname",
            project: "./tsconfig.json",
          },
        }
      : {}),
  };

  // Writing the configuration
  await writeFile({
    file: ".eslintrc.js",
    cwd,
    data: `module.exports = ${JSON.stringify(configuration)}`.replace(
      '"__dirname"',
      "__dirname"
    ),
  });

  spinner.succeed(`ESLint configuration file added`);
};

/**
 * Create a package.json file
 * @param {Object} options - options
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const createPkg = async ({
  packageManager = "npm",
  cwd = process.cwd(),
} = {}) => {
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
export const readPkg = async ({ cwd = process.cwd() } = {}) =>
  readFile({ file: "package.json", cwd, json: true });

/**
 * Write in a package.json file
 * @param {Object} options - options
 * @param {Object} options.data - the data to write
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const writePkg = async ({ data = {}, cwd = process.cwd() } = {}) =>
  writeFile({ file: "package.json", cwd, data: JSON.stringify(data, null, 2) });

/**
 * Returns the version of Node.js installed in the current directory
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<string>} - The version of node installed.
 */
export const getNodeVersionInstalled = async ({ cwd = process.cwd() } = {}) => {
  try {
    const { stdout } = await execa("node", ["--version"], { cwd });

    return clean(stdout);
  } catch {
    return "";
  }
};

/**
 * Returns the version of npm installed in the current directory
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<string>} - The version of npm installed.
 */
export const getNpmVersionInstalled = async ({ cwd = process.cwd() } = {}) => {
  try {
    const { stdout } = await execa("npm", ["--version"], { cwd });

    return clean(stdout);
  } catch {
    return null;
  }
};

/**
 * Check if npm is installed
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isNpmInstalled = async () => {
  try {
    await execa("npm", ["--version"], { stdio: "ignore" });

    return true;
  } catch {
    return false;
  }
};

/**
 * Check if yarn is installed
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isYarnInstalled = async () => {
  try {
    await execa("yarn", ["--version"], { stdio: "ignore" });

    return true;
  } catch {
    return false;
  }
};

/**
 * Check if pnpm is installed
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isPnpmInstalled = async () => {
  try {
    await execa("pnpm", ["--version"], { stdio: "ignore" });

    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if npm, yarn, and pnpm are installed on the user's machine
 * and detect wich is the recommended package manager based on the presence of lock file
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<object>} An object with the keys npm, yarn, and pnpm and boolean values
 */
export const getPackageManagersChoices = async ({
  cwd = process.cwd(),
} = {}) => {
  const packageManagers = {
    npm: {
      isInstalled: await isNpmInstalled(),
      title: "npm",
      lockfile: "package-lock.json",
    },
    yarn: {
      isInstalled: await isYarnInstalled(),
      title: "yarn",
      lockfile: "yarn.lock",
    },
    pnpm: {
      isInstalled: await isPnpmInstalled(),
      title: "pnpm",
      lockfile: "pnpm-lock.yaml",
    },
  };

  let recommended = "";

  return ["npm", "yarn", "pnpm"].reduce(async (accP, current) => {
    const acc = await accP;
    const packageManager = packageManagers[current];
    const choice = packageManager.isInstalled
      ? {
          title: packageManager.title,
          value: current,
        }
      : false;

    if (
      !recommended &&
      packageManager.isInstalled &&
      (await isPathExists({ path: packageManager.lockfile, cwd }))
    ) {
      recommended = current;
    }

    return recommended === current
      ? [
          {
            ...choice,
            title: `${choice.title} (${green("recommended")})`,
          },
          ...acc,
        ]
      : choice
      ? [...acc, choice]
      : acc;
  }, Promise.resolve([]));
};

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
} = {}) => {
  const { dependencies = {}, devDependencies = {} } = await readPkg({
    cwd,
  });

  return !!(dependencies[packageName] || devDependencies[packageName]);
};

/**
 * Install dependencies
 * @param {Object} options - options
 * @param {string} options.packageManager - the package manager to use (npm, yarn or pnpm)
 * @param {string} options.cwd - the current working directory
 * @param {string} options.prod - save to dependencies (default to devDependencies)
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const installDependencies = async ({
  packageManager = "npm",
  cwd = process.cwd(),
  prod = false,
} = {}) => {
  const spinner = ora(`Installing dependencies`).start();

  const dependencies = [
    (await isPackageInDependencies({
      packageName: "eslint",
      cwd,
    }))
      ? ""
      : "eslint",
    (await isPackageInDependencies({
      packageName: "prettier",
      cwd,
    }))
      ? ""
      : "prettier",
    "eslint-config-peppy",
  ].filter((dependencie) => !!dependencie);

  const args = ["add", ...dependencies, prod ? "-S" : "-D"];

  try {
    await execa(packageManager, args, { cwd });
    spinner.succeed(`Dependencies installed`);
  } catch (error) {
    spinner.fail(`A problem occurs while installing the dependencies.`);
    logger.error(`Cannot execute '${packageManager} ${args.join(" ")}'`);
    throw error;
  }
};

/**
 * Add the recommended scripts to the package.json file
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const addRecommendedScripts = async ({ cwd = process.cwd() } = {}) => {
  const spinner = ora(`Adding the recommended scripts`).start();

  const packageJson = await readPkg({ cwd });
  const currentScripts = packageJson.scripts || {};

  const RECOMMENDED_SCRIPTS = {
    lint: "eslint .",
    format: "prettier --check .",
    fix: "npm run lint -- --fix && prettier --write --loglevel warn .",
  };

  await writePkg({
    data: {
      ...packageJson,
      scripts: { ...currentScripts, ...RECOMMENDED_SCRIPTS },
    },
    cwd,
  });

  spinner.succeed(`Recommended scripts added`);
};

/**
 * Add the VS Code configurations
 * @param {Object} options - options
 * @param {string} options.cwd - the current working directory
 * @returns {Promise<Void>} - a Promise which resolves to nothing
 */
export const addVsCodeConfiguration = async ({ cwd = process.cwd() } = {}) => {
  const spinner = ora(`Adding VS Code configurations`).start();

  const extensionsTemplate = await readFile({
    file: "../templates/.vscode/extensions.json",
    cwd: __dirname,
  });
  const parsedExtensionsTemplate = jsonc.parse(extensionsTemplate);
  const settingsTemplate = await readFile({
    file: "../templates/.vscode/settings.json",
    cwd: __dirname,
  });
  const parsedSettingsTemplate = jsonc.parse(settingsTemplate);

  let settings = {};
  let extensions = {};

  if (await isPathExists({ path: ".vscode/settings.json", cwd })) {
    const data = await readFile({
      file: ".vscode/settings.json",
      cwd,
    });
    settings = jsonc.parse(data);
  }
  if (await isPathExists({ path: ".vscode/extensions.json", cwd })) {
    const data = await readFile({
      file: ".vscode/extensions.json",
      cwd,
    });
    extensions = jsonc.parse(data);
  }

  settings = jsoncDeepAssign(settings, parsedSettingsTemplate);
  // settings = jsonc.assign({}, settings, Object.keys(settings).sort());

  extensions = jsoncDeepAssign(extensions, parsedExtensionsTemplate);
  // extensions = jsonc.assign({}, extensions, Object.keys(extensions).sort());

  await writeFile({
    file: ".vscode/extensions.json",
    cwd,
    data: jsonc.stringify(extensions, null, 2),
  });

  await writeFile({
    file: ".vscode/settings.json",
    cwd,
    data: jsonc.stringify(settings, null, 2),
  });

  spinner.succeed(`VS Code configurations added`);
};

/**
 * Check if an item is an object
 * @param {Any} item - the item to check
 * @returns {boolean} - true if it's an object
 */
export const isObject = (item) =>
  item && typeof item === "object" && !Array.isArray(item);

/**
 * Check if an item is an array
 * @param {Any} item - the item to check
 * @returns {boolean} - true if it's an array
 */
export const isArray = (item) =>
  item && typeof item === "object" && Array.isArray(item);

/**
 * Merge deep source data in JSON with comment into a target JSON with comment
 * @param {Array|Object} target - the target where the assign will be applied
 * @param {Array|Object} source - the source data to assign on the target
 * @returns {Array|Object} - the target with the assign applied
 */
export const jsoncDeepAssign = (target, source) => {
  const _take = (item, KeyToTake) => {
    if (!isObject(item) && !isArray(item)) {
      return item;
    }

    const keys = isObject(item) ? Object.keys(item) : item;
    const clone = isObject(item)
      ? jsonc.assign({}, item)
      : new jsonc.CommentArray().concat(item);

    keys.forEach((key) => {
      if (key !== KeyToTake) {
        delete clone[key];
      }
    });

    return clone;
  };

  const _arrayAssign = (aTarget, aSource) => {
    const clone = new jsonc.CommentArray().concat(aTarget);

    aSource.forEach((value) => {
      let i;
      while ((i = clone.indexOf(value)) !== -1) {
        clone.splice(i, 1);
      }
    });

    return new jsonc.CommentArray().concat(clone).concat(aSource);
  };

  if (
    !source ||
    (!(isArray(source) && isArray(target)) &&
      !(isObject(source) && isObject(target)))
  ) {
    return target;
  }

  const keys = isObject(source) ? Object.keys(source) : source;
  let clone = isObject(target)
    ? jsonc.assign({}, target)
    : new jsonc.CommentArray().concat(target);

  keys.forEach((key) => {
    if (isObject(source[key])) {
      if (!clone[key]) {
        clone = jsonc.assign(clone, _take(source, key));
      }

      clone[key] = jsoncDeepAssign(clone[key], source[key]);
    } else if (isArray(source[key])) {
      if (!clone[key]) {
        clone = jsonc.assign(clone, _take(source, key));
      } else {
        clone[key] = _arrayAssign(clone[key], source[key]);
      }
    } else {
      clone = jsonc.assign(clone, _take(source, key));
    }
  });

  return clone;
};