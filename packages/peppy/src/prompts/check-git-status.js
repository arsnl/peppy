import prompts from "prompts";
import { hasGitChanges, hasMercurialChanges } from "../helpers/git";
import { logger } from "../helpers/logger";
import { handleUserPromptAbort } from "./handle-user-prompt-abort";

/**
 * It checks if the project folder has uncommitted changes on Git or Mercurial, and if it does, it asks
 * the user if they want to continue
 * @param {Object} [options={}] - An object with the following properties:
 * @param {string} [options.cwd=process.cwd()] - The current working directory.
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

    const { goFoward } = await prompts({
      type: "confirm",
      name: "goFoward",
      message: `The project folder have uncommitted changes ${where}. Are you sure you want to continue?`,
      initial: false,
    });

    handleUserPromptAbort(goFoward);

    if (!goFoward) {
      logger.error(`Commit the uncommitted changes ${where} to continue.`);
      process.exit(0);
    }
  }
};
