import { Command } from "commander";
import { cyan, green, red } from "kleur";
import ora from "ora";
import path from "path";
import prompts from "prompts";
import { sync as rimrafSync } from "rimraf";
import { clean, satisfies } from "semver";
import { engines, name } from "../../package.json";
import { copyFiles } from "../helpers/copy-files";
import { getExistingPaths } from "../helpers/get-existing-paths";
import { installDependencies } from "../helpers/install-dependencies";
import { installPeerDependencies } from "../helpers/install-peer-dependencies";
import { isPackageInDependencies } from "../helpers/is-package-in-dependencies";
import { isPathExists } from "../helpers/is-path-exists";
import { isPathWriteable } from "../helpers/is-path-writeable";
import { isYarnInstalled } from "../helpers/is-yarn-installed";
import { logger } from "../helpers/logger";
import {
  createPackageJSON,
  editPackageJSON,
  readPackageJSON,
  writePackageJSON,
} from "../helpers/package-json";
import { writeFile } from "../helpers/write-file";

const ESLINT_CONFIGURATION_FILES = [
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.json",
];

const SUGGESTED_SCRIPTS = {
  lint: "eslint .",
  format: "prettier --write --loglevel warn .",
  fix: "npm run lint -- --fix && npm run format",
};

const SUGGESTED_FILES = [
  ".vscode/extensions.json",
  ".vscode/settings.json",
  ".editorconfig",
  ".eslintignore",
  ".prettierignore",
];

/**
 * Check if certain package are present in the package.json and adapt the ESLint configurations to install accordingly
 * @param {Object} options - options
 * @param {string} options.packageName - the name of the package
 * @param {string} options.eslintConfig - the name of the ESLint configuration
 * @param {string} options.cwd - the current working directory
 * @param {Object} options.eslintConfigurations - the configuration containing all the ESLint configuration names
 * @returns {Promise<Object>} - a Promise which resolves to the eslintConfigurations adapted
 */
const detectESLintConfigurationsToInstall = async ({
  packageName,
  eslintConfig,
  cwd,
  eslintConfigurations,
}) => {
  const configurations = { ...eslintConfigurations };

  if (await isPackageInDependencies({ packageName, cwd })) {
    configurations[eslintConfig].selected = true;
    configurations[eslintConfig].title = `${
      configurations[eslintConfig].title
    } ${cyan("(detected)")}`;
  }

  return configurations;
};

/**
 * Check if the user have exited/aborted a prompts and exit the process if it's the case
 * @param {any} promptsValue - the value of the prompts
 * @returns {Void} - nothing
 */
const handleUserPromptsAbort = (promptsValue) => {
  if (typeof promptsValue === "undefined") {
    logger.error("Happy installation aborted by the user.");
    process.exit(0);
  }
};

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program.description("Install").action(async () => {
    const nodeEngine = engines?.node || "";
    const nodeVersion = clean(process.version);
    const cwd = process.cwd();
    let eslintConfigurations = {
      "eslint-config-happy-ava": { title: "happy-ava" },
      "eslint-config-happy-cypress": { title: "happy-cypress" },
      "eslint-config-happy-jest": { title: "happy-jest" },
      "eslint-config-happy-lodash": { title: "happy-lodash" },
      "eslint-config-happy-mocha": { title: "happy-mocha" },
      "eslint-config-happy-node": { title: "happy-node" },
      "eslint-config-happy-ramda": { title: "happy-ramda" },
      "eslint-config-happy-react": { title: "happy-react" },
      "eslint-config-happy-typescript": { title: "happy-typescript" },
    };
    let packageManager = "npm";

    const spinner = ora("Loading unicorns").start();
    spinner.succeed();
    /**
     * Validate the Node.js version
     */
    if (!satisfies(nodeVersion, nodeEngine)) {
      logger.error(
        `The version of Node.js installed on your system (${red(
          nodeVersion
        )}) does not satisfy the minimal Node.js version (${green(
          nodeEngine
        )}) required by ${name}.`
      );
      logger.error(
        `You must update Node.js on your system in order to use this package.`
      );
      process.exit(0);
    }

    /**
     * Validate the project folder permissions
     */
    if (!(await isPathWriteable({ path: cwd }))) {
      logger.error(
        `The projet folder "${cwd}" is not writable, please check folder permissions and try again.`
      );
      logger.error(
        "It is likely you do not have write permissions for this folder."
      );
      process.exit(0);
    }

    /**
     * Validate the package manager to use
     */
    if (await isYarnInstalled()) {
      const { useYarn } = await prompts({
        type: "confirm",
        name: "useYarn",
        message: "Yarn is installed on your system. Do you want to use it?",
        initial: true,
      });

      handleUserPromptsAbort(useYarn);

      if (useYarn) {
        packageManager = "yarn";
      }
    }

    /**
     * Validate the existance of package.json
     */
    if (!(await isPathExists({ path: path.join(cwd, "package.json") }))) {
      const { initPackageJSON } = await prompts({
        type: "confirm",
        name: "initPackageJSON",
        message: "No package.json was found. Do you want to create one?",
        initial: true,
      });

      handleUserPromptsAbort(initPackageJSON);

      if (initPackageJSON) {
        await createPackageJSON({ packageManager, cwd });
      } else {
        logger.error(
          "The installation cannot continue. The installation must be inside a Node.js project with a package.json."
        );
        process.exit(0);
      }
    }

    /**
     * Remove the ESLint configuration files
     */
    const conflictingESlintFiles = await getExistingPaths({
      paths: ESLINT_CONFIGURATION_FILES,
      cwd,
    });

    if (conflictingESlintFiles.length > 0) {
      const { deleteConflictingESlintFiles } = await prompts({
        type: "confirm",
        name: "deleteConflictingESlintFiles",
        message: `The following ESLint configuration files are present in your project and could conflict:\n${conflictingESlintFiles.reduce(
          (acc, file) => `${acc}     -  ${red(file)}\n`,
          ""
        )}  Do you want to delete theses ESLint configurations files?`,
        initial: true,
      });

      handleUserPromptsAbort(deleteConflictingESlintFiles);

      if (deleteConflictingESlintFiles) {
        conflictingESlintFiles.forEach((file) =>
          rimrafSync(path.join(cwd, file))
        );
      } else {
        logger.warn(
          "You've choose to keep the existing ESLint configurations files."
        );
        logger.warn(
          "Make sure to adapt them after the installation to correctly use Happy ESlint Configurations."
        );
      }
    }

    /**
     * Remove the ESLint configuration property
     */
    const { eslintConfig, ...pkgRest } = await readPackageJSON({ cwd });

    if (eslintConfig) {
      const { deleteConflictingESlintProperty } = await prompts({
        type: "confirm",
        name: "deleteConflictingESlintProperty",
        message: `The package.json contain the eslintConfig property that could conflict.\n  Do you want to delete that property from your package.json?`,
        initial: true,
      });

      handleUserPromptsAbort(deleteConflictingESlintProperty);

      if (deleteConflictingESlintProperty) {
        await writePackageJSON({ data: pkgRest, cwd });
      } else {
        logger.warn(
          "You've choose to keep the eslintConfig property in your package.json."
        );
        logger.warn(
          "Make sure to adapt it after the installation to correctly use Happy ESlint Configurations."
        );
      }
    }

    /**
     * Install dependencies
     */
    await installDependencies({ packageManager, cwd });

    /**
     * Auto-detect the package installed on the project to propose the correct ESLint configurations
     */
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "ava",
      eslintConfig: "eslint-config-happy-ava",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "cypress",
      eslintConfig: "eslint-config-happy-cypress",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "jest",
      eslintConfig: "eslint-config-happy-jest",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "lodash",
      eslintConfig: "eslint-config-happy-lodash",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "mocha",
      eslintConfig: "eslint-config-happy-mocha",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "ramda",
      eslintConfig: "eslint-config-happy-ramda",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "react",
      eslintConfig: "eslint-config-happy-react",
      cwd,
      eslintConfigurations,
    });
    eslintConfigurations = await detectESLintConfigurationsToInstall({
      packageName: "typescript",
      eslintConfig: "eslint-config-happy-typescript",
      cwd,
      eslintConfigurations,
    });

    /**
     * Validate the ESLint configurations to install
     */
    const { packagesToInstall } = await prompts({
      type: "multiselect",
      name: "packagesToInstall",
      message: "Select the Happy ESLint Configurations you want to install",
      instructions: false,
      choices: Object.entries(eslintConfigurations).map(([value, config]) => ({
        ...config,
        value,
      })),
    });

    handleUserPromptsAbort(packagesToInstall);

    // Add the base Happy ESLint configuration
    packagesToInstall.unshift("eslint-config-happy");

    /**
     * Install Happy ESLint configuration and their peer dependencies
     */
    await packagesToInstall.reduce(async (acc, packageName) => {
      await acc; // need the previous result to be resolved before call the new async function
      await installPeerDependencies({
        packageName,
        version: "next", // TODO: change
        packageManager,
        dev: true,
        extraArgs: packageManager === "yarn" ? "-W" : "",
      });
    }, undefined);

    /**
     * Generate the .eslintrc.js file
     */
    const { generateESLintFile } = await prompts({
      type: "confirm",
      name: "generateESLintFile",
      message:
        "Do you want to create the .eslintrc.js? If one already exists, it will be overwritten.",
      initial: true,
    });

    handleUserPromptsAbort(generateESLintFile);

    if (generateESLintFile) {
      await writeFile({
        file: ".eslintrc.js",
        cwd,
        data: `module.exports = ${JSON.stringify({
          extends: packagesToInstall.map((configName) =>
            configName.replace("eslint-config-", "")
          ),
        })}`,
      });
    }

    /**
     * Add the suggested scripts
     */
    const { addSuggestedScripts } = await prompts({
      type: "confirm",
      name: "addSuggestedScripts",
      message: `The following scripts are recommended in your package.json:\n${Object.entries(
        SUGGESTED_SCRIPTS
      ).reduce(
        (acc, [command, script]) =>
          `${acc}     -  ${cyan(`"${command}": "${script}"`)}\n`,
        ""
      )}  Do you want to add those scripts to your package.json?`,
      initial: true,
    });

    handleUserPromptsAbort(addSuggestedScripts);

    if (addSuggestedScripts) {
      await editPackageJSON({ data: { scripts: SUGGESTED_SCRIPTS }, cwd });
    }

    /**
     * Add the suggested files
     */
    const { addSuggestedFiles } = await prompts({
      type: "confirm",
      name: "addSuggestedFiles",
      message: `The following files are recommended in your project:\n${SUGGESTED_FILES.reduce(
        (acc, file) => `${acc}     -  ${cyan(file)}\n`,
        ""
      )}  Do you want to add those files to your project?`,
      initial: true,
    });

    handleUserPromptsAbort(addSuggestedFiles);

    if (addSuggestedFiles) {
      await copyFiles({
        files: SUGGESTED_FILES,
        source: path.join(__dirname, "../templates"),
        dest: cwd,
      });
    }
  });

  return program;
};
