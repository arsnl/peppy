import prompts from "prompts";
import { isPathExists } from "../helpers/fs";
import { logger } from "../helpers/logger";
import { createPackageJSON } from "../helpers/pkg";
import { handleUserPromptAbort } from "./handle-user-prompt-abort";

/**
 * It checks if the current working directory has a package.json file. If it doesn't, it asks the user
 * if they want to create one. If they do, it creates one. If they don't, it exits the process
 * @param {Object} [options={}] - An object with the following properties:
 * @param {string} [options.cwd=process.cwd()] - The current working directory.
 * @param {string} [options.packageManager=npm] - The package manager to use.
 */
export const promptCheckPackageJSON = async ({
  cwd = process.cwd(),
  packageManager = "npm",
} = {}) => {
  if (!(await isPathExists({ path: "package.json", cwd }))) {
    const { initPackageJSON } = await prompts({
      type: "confirm",
      name: "initPackageJSON",
      message:
        "Your project don't have a package.json. Do you want to create one?",
      initial: true,
    });

    handleUserPromptAbort(initPackageJSON);

    if (initPackageJSON) {
      await createPackageJSON({ packageManager, cwd });
    } else {
      logger.error(
        "The installation cannot continue. The installation must be inside a Node.js project with a package.json."
      );
      process.exit(0);
    }
  }
};
