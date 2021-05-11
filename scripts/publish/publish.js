import execa from "execa";
import { Command } from "../../packages/peppy/node_modules/commander";
import { cyan } from "../../packages/peppy/node_modules/kleur";
import ora from "../../packages/peppy/node_modules/ora";
import { logger } from "../../packages/peppy/src/helpers/logger";

const getBranchName = async () => {
  const { stdout } = await execa("git", ["symbolic-ref", "--short", "HEAD"]);
  return stdout;
};

const run = async () => {
  const program = new Command();

  program.description("publish the packages").action(async () => {
    const tasks = [
      {
        title: "Check current branch",
        task: async () => {
          const branchName = await getBranchName();

          if (branchName !== "main" && branchName !== "next") {
            throw new Error(
              `The current branch is ${branchName}. You can only publish from the "main" or the "next" branches. You`
            );
          }
        },
      },
      {
        title: "Check git status",
        task: async () => {
          const { stdout } = await execa("git", ["status", "--porcelain"]);

          if (stdout !== "") {
            throw new Error(
              "Unclean working tree. Commit or stash changes first."
            );
          }
        },
      },
      {
        title: "Check remote history",
        task: async () => {
          const { stdout } = await execa("git", [
            "rev-list",
            "--count",
            "--left-only",
            "@{u}...HEAD",
          ]);

          if (!stdout || stdout !== "0") {
            throw new Error("Remote history differ. Please pull changes.");
          }
        },
      },
      {
        title: "Install project dependencies",
        task: () => execa("npm", ["install", "--ignore-scripts"]),
      },
      {
        title: "Clean packages dependencies",
        task: () => execa("lerna", ["clean", "--yes"]),
      },
      {
        title: "Bootstrap packages",
        task: () => execa("lerna", ["bootstrap"]),
      },
      {
        title: "Create CLI symlink",
        task: () => execa("lerna", ["run", "link"]),
      },
      {
        title: "Run tests",
        task: () => execa("npm", ["run", "test"]),
      },
    ];

    await tasks.reduce(async (acc, { title, task }) => {
      await acc;

      const spinner = ora(title).start();

      try {
        await task();
        spinner.succeed();
      } catch (error) {
        spinner.fail();
        throw error;
      }
    }, undefined);

    const args = ["publish", "--ignore-scripts"];
    const brancheName = await getBranchName();

    if (brancheName === "next") {
      args.push("--preid", "next");
      args.push("--pre-dist-tag", "next");
    }

    await execa("lerna", args, { stdio: "inherit" });
  });

  await program.parseAsync(process.argv);

  return program;
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${cyan(error.command)} has failed.`);
    process.exit(0);
  } else if (error.message) {
    logger.error(error.message);
    process.exit(0);
  } else {
    logger.log(error);
    process.exit(1);
  }
});
