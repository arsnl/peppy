import { logger } from "../helpers/logger";

/**
 * Check if the user have exited/aborted a prompt and exit the process if it's the case
 * @param {any} promptsValue - the value of the prompts
 * @returns {Void} - nothing
 */
export const handleUserPromptAbort = (promptsValue) => {
  if (typeof promptsValue === "undefined") {
    logger.log("Peppy installer were aborted by the user.");
    process.exit(0);
  }
};
