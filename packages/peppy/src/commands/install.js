import { Command, Option } from "commander";
import { cyan, red } from "kleur";
import ora from "ora";
import path from "path";
import prompts from "prompts";
import pipe from "ramda/es/pipe";
import { sync as rimrafSync } from "rimraf";
import {
  ESLINT_CONFIGURATION_FILES,
  ESLINT_CONFIGURATIONS,
} from "../constants";
import { getExistingPaths, writeFile } from "../helpers/fs";
import { logger } from "../helpers/logger";
import {
  installDependencies,
  installPeerDependencies,
  isPackageInDependencies,
  readPackageJSON,
  writePackageJSON,
} from "../helpers/pkg";
import { promptCheckCWDPermission } from "../prompts/check-cwd-permission";
import { promptCheckGitStatus } from "../prompts/check-git-status";
import { promptCheckNodeVersion } from "../prompts/check-node-version";
import { promptCheckPackageJSON } from "../prompts/check-package-json";
import { promptCheckPackageManager } from "../prompts/check-package-manager";
import { promptCheckRecommendedScripts } from "../prompts/check-recommended-scripts";
/**
 * Will intall, Prettier, ESLint, eslint-config-peppy, [eslint-config-peppy-typescript] .vscode configs
 *
 * - Check wich version of node is installed.
 *   Stop the process if the node version do not met the minimal requirement.
 * - Check the folder writing permission.
 *   Stop the process if do not have writing permission
 * - Check if in git folder and if changes are pending
 *   If true, ask if it's ok to continue
 * - Check if no lock file and if npm / pnpm or yarn is installed and ask wich one to use.
 *   Keep the choosen one in memory
 * - Check if package.json exist
 *   Offer to create one if not
 * - Check if ESLint config exist (check for cosmiconfig)
 *   If exist, propose to modify, reset or let it
 * - Check of install dependencies and check of updates
 */

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
    logger.log("Peppy interactive installer were aborted by the user.");
    process.exit(0);
  }
};

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program
    .description("Peppy interactive installer")
    .addOption(
      new Option(
        "-v, --version <version>",
        "version or tag to install"
      ).default("latest")
    )
    .addOption(
      new Option("-m, --packageManager <pm>", "package manager").choices([
        "npm",
        "yarn",
        "pnpm",
      ])
    )
    .addOption(
      new Option(
        "-P, --prod",
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
      async ({ version, packageManager: pm, prod, root: cwd, extraArgs }) => {
        const {
          "eslint-config-peppy": eslintConfigPeppy,
          ...ESLINT_CONFIGURATIONS_REST
        } = ESLINT_CONFIGURATIONS;
        let eslintConfigurations = { ...ESLINT_CONFIGURATIONS_REST };
        let packageManager = pm;

        await promptCheckNodeVersion();
        await promptCheckCWDPermission({ cwd });
        await promptCheckGitStatus({ cwd });
        packageManager = await promptCheckPackageManager({
          cwd,
          packageManager,
        });
        await promptCheckPackageJSON({ cwd, packageManager });

        // Check for duplicate eslint configuration file

        // Check the packages to install/update

        await promptCheckRecommendedScripts({ cwd });
        // Add vscode config
        // Add .gitignore / .eslintignore / .prettierignore

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
          eslintConfig: "eslint-config-peppy",
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
            dev: !prod,
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

        logger.log();
        logger.log("🎉 Peppy installation were completed successfully!");
        logger.log();
      }
    );

  return program;
};
