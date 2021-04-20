import { Command } from "commander";
import { makePrettierExtensionsCommand } from "./prettier-extensions";

export const makePrettierCommand = async () => {
  const program = new Command("prettier");

  program
    .description("Prettier commands")
    .addCommand(await makePrettierExtensionsCommand());

  return program;
};
