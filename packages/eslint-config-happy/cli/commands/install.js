import { Command } from "commander";
import fs from "fs";
import { green, red } from "kleur";
import path from "path";
import prompts from "prompts";
import { clean, satisfies } from "semver";
import { engines, name } from "../../package.json";
import { addPackageScripts } from "../helpers/add-package-scripts";
import { copyFiles } from "../helpers/copy-files";
import {
  eslintCleanConfigurationFiles,
  eslintCleanPackageJSON,
} from "../helpers/eslint";
import { fileExist, isWriteable } from "../helpers/fs";
import { installPeerDeps } from "../helpers/install-peerdeps";
import { logger } from "../helpers/logger";
import {
  isPackageInDependencies,
  isYarnInstalled,
  projectInit,
  projectInstall,
} from "../helpers/packages";
import { spawn } from "../helpers/spawn";

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program.description("Install").action(async () => {
    const nodeEngine = engines?.node || "";
    const nodeVersion = clean(process.version);
    const cwd = process.cwd();
    const packages = {
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
    let writeESLintFile = true;

    const detectPackage = (packageName, eslintConfig) => {
      if (isPackageInDependencies(packageName, { cwd })) {
        packages[eslintConfig].selected = true;
        packages[eslintConfig].title = `${
          packages[eslintConfig].title
        } ${"(detected)"}`;
      }
    };

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
    if (!(await isWriteable(cwd))) {
      logger.error(
        `The projet path "${cwd}" is not writable, please check folder permissions and try again.`
      );
      logger.error(
        "It is likely you do not have write permissions for this folder."
      );
      process.exit(1);
    }

    // Validation du gestionnaire de paquets
    if (isYarnInstalled()) {
      const { useYarn } = await prompts({
        type: "confirm",
        name: "useYarn",
        message:
          "Yarn is installed on your system. Do you want to use Yarn for this project?",
        initial: true,
      });

      if (useYarn) {
        packageManager = "yarn";
      }
    }

    // Initialisation du projet en cas d'absence de projet
    if (!fileExist("package.json", cwd)) {
      const { initPackage } = await prompts({
        type: "confirm",
        name: "initPackage",
        message:
          "No package.json was found. Do you want to initialize the project?",
        initial: true,
      });

      if (initPackage) {
        await projectInit(packageManager);
      } else {
        logger.error(
          "The installation cannot continue. The installation must be inside a node project with a package.json."
        );
        process.exit(1);
      }
    }

    // Nettoyage des fichiers de configuration ESLint
    writeESLintFile = await eslintCleanConfigurationFiles(cwd);

    // Nettoyage de la propriété de configuration ESLint
    await eslintCleanPackageJSON(cwd);

    // Pré-installation des dépendences de projet
    await projectInstall(packageManager);

    // Collecte des informations concernant les configurations par defaut à installer
    detectPackage("ava", "eslint-config-happy-ava");
    detectPackage("cypress", "eslint-config-happy-cypress");
    detectPackage("jest", "eslint-config-happy-jest");
    detectPackage("lodash", "eslint-config-happy-lodash");
    detectPackage("mocha", "eslint-config-happy-mocha");
    detectPackage("ramda", "eslint-config-happy-ramda");
    detectPackage("react", "eslint-config-happy-react");
    detectPackage("typescript", "eslint-config-happy-typescript");

    // Validation des configurations à installer
    const { packagesToInstall } = await prompts({
      type: "multiselect",
      name: "packagesToInstall",
      message: "Select the Happy ESLint Configurations to install",
      instructions: false,
      choices: Object.entries(packages).map(([value, config]) => ({
        ...config,
        value,
      })),
    });

    if (!packagesToInstall) {
      process.exit(1);
    }

    // Installation des configurations happy selon les packets installés
    await ["eslint-config-happy", ...packagesToInstall].reduce(
      async (acc, packageName) => {
        await acc; // need the previous result to be resolved before call the new async function
        await installPeerDeps({
          packageName,
          version: "next", // to change
          packageManager,
          dev: true,
          extraArgs: packageManager === "yarn" ? "-W" : "",
        });
      },
      undefined
    );

    // Écriture du fichier .eslintrc
    if (writeESLintFile) {
      fs.writeFileSync(
        path.join(cwd, ".eslintrc.js"),
        `module.exports = ${JSON.stringify({
          extends: [
            "eslint-config-happy",
            ...packagesToInstall,
          ].map((configName) => configName.replace("eslint-config-", "")),
        })}`
      );

      await spawn("prettier", ["--write", path.join(cwd, ".eslintrc.js")]);
    }

    // Proposer l'ajout des commandes
    addPackageScripts();

    // Proposer l'ajout de fichiers de configurations de projet (.vscode/settings.json, .vscode/extensions.json, .editorconfig, .eslintignore, .prettierignore)
    await copyFiles({
      files: [
        ".vscode/extensions.json",
        ".vscode/settings.json",
        ".editorconfig",
        ".eslintignore",
        ".prettierignore",
      ],
      source: path.join(__dirname, "../templates"),
      dest: cwd,
    });
  });

  return program;
};
