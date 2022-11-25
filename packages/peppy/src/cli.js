import { Command } from "commander";
import { bold, cyan, red, yellow } from "kleur";
import checkForUpdate from "update-check";
import packageInfo from "../package.json";
import { makeInstallCommand } from "./commands/install";
import { logger } from "./utils/logger";

const update = checkForUpdate(packageInfo).catch(() => null);

const notifyUpdate = async () => {
  try {
    const result = await update;
    if (result && result.latest) {
      logger.log(
        "",
        yellow(
          bold(`${packageInfo.name} v${packageInfo.version} is available!`)
        ),
        `You can update ${packageInfo.name} by running: ${cyan(
          `npm i -g ${packageInfo.name}`
        )}`,
        ""
      );
    }
    process.exit();
  } catch (error) {
    // ignore error
  }
};

const run = async () => {
  const program = new Command()
    .version(packageInfo.version)
    .addCommand(await makeInstallCommand());

  program.parseAsync(process.argv);
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${cyan(error.command)} has failed.`);
  } else {
    logger.error(red("Unexpected error. Please report it as a bug:"), error);
  }

  logger.log();

  await notifyUpdate();

  process.exit(1);
});
