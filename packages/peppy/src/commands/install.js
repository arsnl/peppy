import { Command, Option } from "commander";
import prompts from "prompts";
import {
  addESLintConfiguration,
  addRecommendedScripts,
  addVsCodeConfiguration,
  installDependencies,
} from "../utils/helpers";
import { logger } from "../utils/logger";
import {
  handlePromptCancel,
  promptCheckCWDPermission,
  promptCheckGitStatus,
  promptCheckNodeVersion,
  promptCheckNPMVersion,
  promptCheckPackageJSON,
  promptCheckPackageManager,
} from "../utils/prompt";

export const makeInstallCommand = async () => {
  const program = new Command("install");

  program
    .description("Interactive install")
    .addOption(
      new Option("-m, --packageManager <pm>", "package manager").choices([
        "npm",
        "yarn",
        "pnpm",
      ])
    )
    .addOption(
      new Option(
        "-P, --prod",
        "packages will appear in your dependencies"
      ).default(false)
    )
    .addOption(
      new Option("-r, --root <path>", "the install directory").default(
        process.cwd()
      )
    )
    .action(async ({ packageManager: pm, prod, root: cwd }) => {
      let packageManager = pm;

      await promptCheckNodeVersion({ cwd });
      await promptCheckNPMVersion({ cwd });
      await promptCheckCWDPermission({ cwd });
      await promptCheckGitStatus({ cwd });

      packageManager = await promptCheckPackageManager({
        cwd,
        packageManager,
      });

      await promptCheckPackageJSON({ cwd, packageManager });

      const extras = await prompts(
        [
          {
            type: "confirm",
            name: "addESLintConfiguration",
            message: "Do you want to add the ESLint configuration file?",
            initial: true,
          },
          {
            type: "confirm",
            name: "addRecommendedScripts",
            message: "Do you want to add the recommended scripts?",
            initial: true,
          },
          {
            type: "confirm",
            name: "addVsCodeConfiguration",
            message: "Do you want to add the VS Code configurations?",
            initial: true,
          },
        ],
        { onCancel: handlePromptCancel }
      );

      await installDependencies({ packageManager, cwd, prod });

      if (extras.addESLintConfiguration) {
        await addESLintConfiguration({ cwd });
      }
      if (extras.addRecommendedScripts) {
        await addRecommendedScripts({ cwd });
      }
      if (extras.addVsCodeConfiguration) {
        await addVsCodeConfiguration({ cwd });
      }

      logger.log("🎉 [Peppy] installation completed successfully!");
    });

  return program;
};
