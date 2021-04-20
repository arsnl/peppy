import chalk from "chalk";
import { Command } from "commander";
import { version } from "../package.json";
import { makePrettierCommand } from "./commands/prettier";
import { logger } from "./helpers/logger";

const run = async () => {
  const program = new Command();

  program.version(version).addCommand(await makePrettierCommand());

  await program.parseAsync(process.argv);
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${chalk.cyan(error.command)} has failed.`);
  } else {
    logger.error(chalk.red("Unexpected error. Please report it as a bug:"));
    logger.error(error);
  }

  logger.log();

  process.exit(1);
});
