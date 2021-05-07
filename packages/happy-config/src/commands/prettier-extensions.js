import { Command } from "commander";
import { getPrettierSupportedExtensions } from "../helpers/get-prettier-supported-extensions";
import { logger } from "../helpers/logger";

export const makePrettierExtensionsCommand = async () => {
  const program = new Command("prettier-extensions");

  program
    .description("get Prettier supported extensions")
    .option("-g, --glob", "return as a glob pattern", false)
    .action(async ({ glob }) => {
      const response = await getPrettierSupportedExtensions({ glob });

      logger.log(response);
    });

  return program;
};
