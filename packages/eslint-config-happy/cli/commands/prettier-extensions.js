import { Command } from "commander";
import { logger } from "../helpers/logger";
import { getPrettierSupportedExt } from "../helpers/prettier";

export const makePrettierExtensionsCommand = async () => {
  const program = new Command("extensions");

  program
    .description("get Prettier supported extensions")
    .option("-g, --glob", "return as a glob pattern")
    .action(({ glob = false }) => {
      logger.log(getPrettierSupportedExt(glob));
    });

  return program;
};
