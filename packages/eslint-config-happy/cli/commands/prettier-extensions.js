import { Command } from "commander";
import { getPrettierSupportedExtensions } from "../helpers/get-prettier-supported-extensions";
import { logger } from "../helpers/logger";

export const makePrettierExtensionsCommand = async () => {
  const program = new Command("extensions");

  program
    .description("get Prettier supported extensions")
    .option("-g, --glob", "return as a glob pattern")
    .action(({ glob = false }) => {
      logger.log(getPrettierSupportedExtensions({ glob }));
    });

  return program;
};
