import prompts from "prompts";
import { getPackageManagersChoices } from "../helpers/pkg";
import { handleUserPromptAbort } from "./handle-user-prompt-abort";

/**
 * It prompts the user to select a package manager if there are multiple installed on the system
 * @param {Object} [options={}] - An object with the following properties:
 * @param {string} [options.cwd=process.cwd()] - The current working directory.
 * @param {string} [options.packageManager=npm] - The package manager to use.
 * @returns The package manager that the user has selected.
 */
export const promptCheckPackageManager = async ({
  cwd = process.cwd(),
  packageManager,
} = {}) => {
  if (packageManager) {
    return packageManager;
  }

  const packageManagersChoices = await getPackageManagersChoices({ cwd });

  const { selectedPackageManager } = await prompts({
    type: "select",
    name: "selectedPackageManager",
    message:
      "You have multiple package managers installed on your system. Wich one do you want to use?",
    instructions: false,
    choices: Object.entries(packageManagersChoices).map(([value, config]) => ({
      ...config,
      value,
    })),
  });

  handleUserPromptAbort(selectedPackageManager);

  return selectedPackageManager;
};
