import execa from "execa";

/**
 * Check if Yarn is installed
 * @returns {Promise<boolean>} - a Promise which resolves to a boolean
 */
export const isYarnInstalled = async () => {
  try {
    await execa("yarnpkg", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};
