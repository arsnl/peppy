#!/usr/bin/env node

import { Command } from "commander";
import { bold, cyan, red } from "kleur";
import { name, version } from "../package.json";
import { makeInstallCommand } from "./commands/install";
import { makePrettierCommand } from "./commands/prettier";
import { logger } from "./helpers/logger";

const run = async () => {
  const program = new Command();

  program
    .version(version)
    .addCommand(await makeInstallCommand())
    .addCommand(await makePrettierCommand());

  // Print program name and version (like what Yarn does)
  logger.log(bold(`${name} v${version}`));

  await program.parseAsync(process.argv);
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${cyan(error.command)} has failed.`);
  } else {
    logger.error(red("Unexpected error. Please report it as a bug:"));
    logger.error(error);
  }

  logger.log();

  process.exit(1);
});
