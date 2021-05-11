import { Command, Option } from "commander";
import { cyan, green, red } from "kleur";
import ora from "ora";
import path from "path";
import prompts from "prompts";
import pipe from "ramda/es/pipe";
import { sync as rimrafSync } from "rimraf";
import { clean, satisfies } from "semver";
import packageInfo from "../../package.json";
import {
  ESLINT_CONFIGURATION_FILES,
  ESLINT_CONFIGURATIONS,
  RECOMMENDED_FILES,
  RECOMMENDED_SCRIPTS,
} from "../constants";
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
    logger.error(
      "Peppy ESLint configurations installation were aborted by the user."
    );
    logger.log();
    process.exit(0);
  }
};

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program
    .description("Peppy ESLint configurations interactive installer")
    .addOption(
      new Option(
        "-v, --version <version>",
        "version or tag to install"
      ).default("latest")
    )
    .addOption(
      new Option("-m, --package-manager <pm>", "package manager").choices([
        "npm",
        "yarn",
        "pnpm",
      ])
    )
    .addOption(
      new Option(
        "-P, --save-prod",
        "packages will appear in your dependencies"
      ).default(false)
    )
    .addOption(
      new Option("-r, --root <path>", "the install directory").default(
        process.cwd()
      )
    )
    .addOption(
      new Option(
        "-x, --extra-args <args>",
        "extra arguments to pass through to the package manager"
      )
    )
    .action(
      async ({
        version,
        packageManager: pm,
        saveProd,
        root: cwd,
        extraArgs,
      }) => {
        const nodeEngine =
          (packageInfo.engines && packageInfo.engines.node) || "";
        const nodeVersion = clean(process.version);
        const {
          "eslint-config-peppy": eslintConfigPeppy,
          ...ESLINT_CONFIGURATIONS_REST
        } = ESLINT_CONFIGURATIONS;
        let eslintConfigurations = { ...ESLINT_CONFIGURATIONS_REST };
        let packageManager = pm || "npm";

        /**
         * Validate the Node.js version
         */
        if (!satisfies(nodeVersion, nodeEngine)) {
          logger.error(
            `The version of Node.js installed on your system (${red(
              nodeVersion
            )}) does not satisfy the minimal Node.js version (${green(
              nodeEngine
            )}) required by ${packageInfo.name}.`
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
        if (!pm && (await isYarnInstalled())) {
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
        if (!(await isPathExists({ path: "package.json", cwd }))) {
          const { initPackageJSON } = await prompts({
            type: "confirm",
            name: "initPackageJSON",
            message:
              "Your project don't have a package.json. Do you want to create one?",
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
            conflictingESlintFiles.forEach((file) => {
              const deleteConflictingESlintFilesSpinner = ora(
                `Deleting the ESLint configuration file "${file}"`
              ).start();
              rimrafSync(path.join(cwd, file));
              deleteConflictingESlintFilesSpinner.succeed(
                `The ESLint configuration file "${file}" were deleted`
              );
            });
          } else {
            logger.warn(
              "You've choose to keep the existing ESLint configurations files."
            );
            logger.warn(
              "Make sure to adapt them after the installation to correctly use the Peppy ESLint configurations."
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
            const deleteConflictingESlintPropertySpinner = ora(
              `Deleting the eslintConfig property from your package.json`
            ).start();
            await writePackageJSON({ data: pkgRest, cwd });
            deleteConflictingESlintPropertySpinner.succeed(
              "The eslintConfig property were deleted from your package.json"
            );
          } else {
            logger.warn(
              "You've choose to keep the eslintConfig property in your package.json."
            );
            logger.warn(
              "Make sure to adapt it after the installation to correctly use the Peppy ESLint configurations."
            );
          }
        }

        /**
         * Install project dependencies
         */
        const installProjectDependenciesSpinner = ora(
          `Installing the project dependencies`
        ).start();
        await installDependencies({ packageManager, cwd });
        installProjectDependenciesSpinner.succeed(
          `The project dependencies were installed`
        );

        /**
         * Auto-detect the package installed on the project to propose the correct ESLint configurations
         */
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "ava",
          eslintConfig: "eslint-config-peppy-ava",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "cypress",
          eslintConfig: "eslint-config-peppy-cypress",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "jest",
          eslintConfig: "eslint-config-peppy-jest",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "lodash",
          eslintConfig: "eslint-config-peppy-lodash",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "mocha",
          eslintConfig: "eslint-config-peppy-mocha",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "ramda",
          eslintConfig: "eslint-config-peppy-ramda",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "react",
          eslintConfig: "eslint-config-peppy-react",
          cwd,
          eslintConfigurations,
        });
        eslintConfigurations = await detectESLintConfigurationsToInstall({
          packageName: "typescript",
          eslintConfig: "eslint-config-peppy-typescript",
          cwd,
          eslintConfigurations,
        });

        /**
         * Validate the ESLint configurations to install
         */
        const { packagesToInstall } = await prompts({
          type: "multiselect",
          name: "packagesToInstall",
          message: "Select the Peppy ESLint configurations you want to install",
          instructions: false,
          choices: Object.entries(eslintConfigurations).map(
            ([value, config]) => ({
              ...config,
              value,
            })
          ),
        });

        handleUserPromptsAbort(packagesToInstall);

        // Add the base Peppy ESLint configuration which is required
        packagesToInstall.unshift("eslint-config-peppy");

        /**
         * Install Peppy ESLint configuration and their peer dependencies
         */
        await packagesToInstall.reduce(async (acc, packageName) => {
          await acc; // need the previous result to be resolved before call the new async function
          const packagesToInstallSpinner = ora(
            `Installing the Peppy ESLint configuration "${packageName}"`
          ).start();
          await installPeerDependencies({
            packageName,
            packageVersion: version,
            packageManager,
            dev: !saveProd,
            silent: true,
            extraArgs: extraArgs || (packageManager === "yarn" ? "-W" : ""),
          });
          packagesToInstallSpinner.succeed(
            `The Peppy ESLint configuration "${packageName}" were installed`
          );
        }, undefined);

        /**
         * Generate the .eslintrc.js file
         */
        const { generateESLintFile } = await prompts({
          type: "confirm",
          name: "generateESLintFile",
          message:
            "Do you want to generate the project ESLint configuration file? If one already exists, it will be overwritten.",
          initial: true,
        });

        handleUserPromptsAbort(generateESLintFile);

        if (generateESLintFile) {
          const generateESLintFileSpinner = ora(
            `Generating the project ESLint configuration file`
          ).start();

          const eslintExtends = pipe(
            (packages) =>
              packages.reduce(
                (acc, configName) => [
                  ...acc,
                  configName.replace("eslint-config-", ""),
                ],
                []
              ),
            (packages) => {
              if (
                packages.includes("peppy-typescript") &&
                packages.includes("peppy-react")
              ) {
                return [...packages, "peppy-typescript/react"];
              }
              return packages;
            }
          )(packagesToInstall);

          await writeFile({
            file: ".eslintrc.js",
            cwd,
            data: `module.exports = ${JSON.stringify({
              extends: eslintExtends,
            })}`,
          });
          generateESLintFileSpinner.succeed(
            `The project ESLint configuration file were generated`
          );
        }

        /**
         * Add the recommended scripts
         */
        const { addRecommendedScripts } = await prompts({
          type: "confirm",
          name: "addRecommendedScripts",
          message: `The following scripts are recommended in your package.json:\n${Object.entries(
            RECOMMENDED_SCRIPTS
          ).reduce(
            (acc, [command, script]) =>
              `${acc}     -  ${cyan(`"${command}": "${script}"`)}\n`,
            ""
          )}  Do you want to add those scripts to your package.json?`,
          initial: true,
        });

        handleUserPromptsAbort(addRecommendedScripts);

        if (addRecommendedScripts) {
          const addRecommendedScriptsSpinner = ora(
            `Adding the recommended scripts to your package.json`
          ).start();
          await editPackageJSON({
            data: { scripts: RECOMMENDED_SCRIPTS },
            cwd,
          });
          addRecommendedScriptsSpinner.succeed(
            "The recommended scripts were added to your package.json"
          );
        }

        /**
         * Add the recommended files
         */
        const { addRecommendedFiles } = await prompts({
          type: "confirm",
          name: "addRecommendedFiles",
          message: `The following files are recommended in your project:\n${RECOMMENDED_FILES.reduce(
            (acc, file) => `${acc}     -  ${cyan(file)}\n`,
            ""
          )}  Do you want to add those files to your project?`,
          initial: true,
        });

        handleUserPromptsAbort(addRecommendedFiles);

        if (addRecommendedFiles) {
          const addRecommendedFilesSpinner = ora(
            `Adding the recommended files to your project`
          ).start();
          await copyFiles({
            files: RECOMMENDED_FILES,
            source: path.join(__dirname, "../../templates"),
            dest: cwd,
          });
          addRecommendedFilesSpinner.succeed(
            "The recommended files were added to your project"
          );
        }

        logger.log();
        logger.log(
          "🎉 Peppy ESLint configurations installation were completed successfully!"
        );
        logger.log();
      }
    );

  return program;
};
