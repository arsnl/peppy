import { green, red } from "chalk";
import { Command } from "commander";
import { sync as findUpSync } from "find-up";
import path from "path";
import prompts from "prompts";
import { clean, satisfies } from "semver";
import { engines, name } from "../../package.json";
import {
  eslintCleanConfigurationFiles,
  eslintCleanPackageJSON,
} from "../helpers/eslint";
import { isWriteable } from "../helpers/fs";
import { logger } from "../helpers/logger";
import { isPackageInDependencies, npmInit } from "../helpers/packages";

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program.description("Install").action(async () => {
    const nodeEngine = engines?.node || "";
    const nodeVersion = clean(process.version);
    const cwd = process.cwd();
    const packagePath = findUpSync("package.json", { cwd });
    const root = packagePath ? path.dirname(packagePath) : cwd;
    const packagesToInstall = ["eslint-config-happy"];

    // Validation de la version de Node.js installée
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
      process.exit(1);
    }

    // Validation des droits d'accès d'écriture dans le répertoire du projet
    if (!(await isWriteable(root))) {
      logger.error(
        `The projet path "${root}" is not writable, please check folder permissions and try again.`
      );
      logger.error(
        "It is likely you do not have write permissions for this folder."
      );
      process.exit(1);
    }

    // Initialisation du projet en cas d'absence de projet
    if (!packagePath) {
      const { initPackage } = await prompts({
        type: "confirm",
        name: "initPackage",
        message:
          "No package.json was found. Do you want to initialize the project?",
        initial: true,
      });

      if (initPackage) {
        await npmInit();
      } else {
        process.exit(1);
      }
    }

    // Nettoyage des fichiers de configuration ESLint
    await eslintCleanConfigurationFiles(root);

    // Nettoyage de la propriété de configuration ESLint
    await eslintCleanPackageJSON(root);

    // Pré-installation des dépendences de projet

    // Collecte des informations concernant les configurations à installer
    if (isPackageInDependencies("ava", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-ava");
    }
    if (isPackageInDependencies("cypress", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-cypress");
    }
    if (isPackageInDependencies("jest", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-jest");
    }
    if (isPackageInDependencies("lodash", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-lodash");
    }
    if (isPackageInDependencies("mocha", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-mocha");
    }
    if (isPackageInDependencies("ramda", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-ramda");
    }
    if (isPackageInDependencies("react", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-react");
    }
    if (isPackageInDependencies("typescript", { cwd: root })) {
      packagesToInstall.push("eslint-config-happy-typescript");
    }

    // Demander si on installe la configuration de node?

    // Installer les configurations happy selon les packets installés

    // Écriture du fichier .eslintrc.js

    // Proposer l'ajout des commandes lint/format/fix

    // Proposer l'ajout de fichiers de configurations de projet (.vscode/settings.json, .vscode/extensions.json, .editorconfig, .eslintignore, .prettierignore)
  });

  return program;
};
