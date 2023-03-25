import { Command, Option } from "commander";
import { bold, cyan } from "kleur";
import prompts from "prompts";
import {
  addEditorConfigFile,
  addESLintConfigurationFile,
  addPkgJsonScripts,
  addVsCodeWorkspaceSettings,
  installDependencies,
  isPackageInDependencies,
  logBanner,
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

export const makeInitCommand = async () => {
  const program = new Command("init");

  program
    .description("Peppy initializer")
    .addOption(
      new Option("--pm <pm>", "package manager").choices([
        "npm",
        "yarn",
        "pnpm",
      ])
    )
    .addOption(
      new Option("--prod", "install the packages in dependencies").default(
        false
      )
    )
    .addOption(
      new Option("--cwd <cwd>", "working directory to use").default(
        process.cwd()
      )
    )
    .addOption(new Option("-y, --yes", "use default options").default(false))
    .action(async ({ pm, prod, cwd, yes }) => {
      let packageManager = pm;

      logBanner();
      await promptCheckNodeVersion({ cwd });
      await promptCheckNPMVersion({ cwd });
      await promptCheckCWDPermission({ cwd });
      await promptCheckGitStatus({ cwd });

      packageManager = await promptCheckPackageManager({
        cwd,
        packageManager,
      });

      await promptCheckPackageJSON({ cwd, packageManager });

      const isTypeScriptInstalled = await isPackageInDependencies({
        packageName: "typescript",
        cwd,
      });

      const { answerAddPkgJsonScripts } = await prompts(
        !yes
          ? {
              type: "confirm",
              name: "answerAddPkgJsonScripts",
              message: "Do you want to add the package.json scripts?",
              initial: true,
            }
          : {},
        { onCancel: handlePromptCancel }
      );

      if (!yes) {
        answerAddPkgJsonScripts
          ? logger.log(
              cyan(
                `Superb! 👏 The scripts ${bold("lint")}, ${bold("format")} ${
                  isTypeScriptInstalled
                    ? `${bold("typecheck")} and ${bold("fix")}`
                    : `and ${bold("fix")}`
                } gonna be added.`
              )
            )
          : logger.log(
              cyan("That's too bad! 🙁 Those scripts are super useful."),
              cyan(
                "You can always run the init command again and select them later if you change your mind."
              )
            );
      }

      const { answerAddESLintConfigurationFile } = await prompts(
        !yes
          ? {
              type: "confirm",
              name: "answerAddESLintConfigurationFile",
              message: "Do you want to add the ESLint configuration file?",
              initial: true,
            }
          : {},
        { onCancel: handlePromptCancel }
      );

      if (!yes) {
        answerAddESLintConfigurationFile
          ? logger.log(
              cyan(
                `Awesome! 😍 I'll generate a configuration file based on your project packages.`
              )
            )
          : logger.log(
              cyan(
                "No worries. 😌 You can always run the init command again and add them at a later time."
              )
            );
      }

      const { answerAddVsCodeWorkspaceSettings } = await prompts(
        !yes
          ? {
              type: "confirm",
              name: "answerAddVsCodeWorkspaceSettings",
              message: "Do you want to add the VS Code workspace settings?",
              initial: true,
            }
          : {},
        { onCancel: handlePromptCancel }
      );

      if (!yes) {
        answerAddVsCodeWorkspaceSettings
          ? logger.log(
              cyan(
                `Noted! 📝 If you have existing workspace settings, they will be merged together.`
              )
            )
          : logger.log(
              cyan(
                "Aww, it's a shame. 😕 Don't worry, you can always run the init command again and add them later."
              )
            );
      }

      const { answerAddEditorConfigFile } = await prompts(
        !yes
          ? {
              type: "confirm",
              name: "answerAddEditorConfigFile",
              message: "Do you want to add the .editorconfig file?",
              initial: true,
            }
          : {},
        { onCancel: handlePromptCancel }
      );

      if (!yes) {
        answerAddVsCodeWorkspaceSettings
          ? logger.log(cyan(`You made a smart decision. 🧠`))
          : logger.log(
              cyan(
                "It's a bummer! 😿 But no need to despair, you can always run the init command again and add it later."
              )
            );
      }

      !yes &&
        logger.log(
          "",
          cyan(
            "Alright. I have everything I need. Let's start the installations then! 💃"
          ),
          ""
        );

      await installDependencies({ packageManager, cwd, prod });

      if (yes || answerAddPkgJsonScripts) {
        await addPkgJsonScripts({ cwd });
      }
      if (yes || answerAddESLintConfigurationFile) {
        await addESLintConfigurationFile({ cwd });
      }
      if (yes || answerAddVsCodeWorkspaceSettings) {
        await addVsCodeWorkspaceSettings({ cwd });
      }
      if (yes || answerAddEditorConfigFile) {
        await addEditorConfigFile({ cwd });
      }

      logger.log(
        "",
        cyan("🎉 Hooray! Initialization is complete. 🎉"),
        cyan(
          "You're now ready to dive into your project with full force and enjoy a seamless development experience."
        )
      );

      logger.log(
        "",
        cyan("Next steps:"),
        cyan(" - Install the recommended VS Code extensions"),
        cyan(` - Run ${bold("npm fix")} to clean your project`),
        cyan(" - Add automated validation (e.g. Github actions)")
      );
    });

  return program;
};
