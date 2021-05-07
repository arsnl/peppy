import { spawn } from "./spawn";

/**
 * Check if Yarn is installed
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isYarnInstalled = async () => {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      return !!(userAgent && userAgent.startsWith("yarn"));
    }

    await spawn({
      command: "yarnpkg",
      args: ["--version"],
      options: { stdio: "ignore" },
    });

    return true;
  } catch {
    return false;
  }
};
