import { green, red } from "kleur";
import { clean, satisfies } from "semver";
import packageInfo from "../../package.json";
import { logger } from "../helpers/logger";

/**
 * Check if the version of Node.js installed on the user system does satisfy
 * the minimal Node.js version, if not, exit the process.
 */
export const promptCheckNodeVersion = () => {
  const nodeVersion = clean(process.version);
  const nodeEngine = (packageInfo.engines && packageInfo.engines.node) || "";

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
};
