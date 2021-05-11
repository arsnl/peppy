import Listr from "listr";
import { Command } from "../../packages/peppy/node_modules/commander";
import { cyan, red } from "../../packages/peppy/node_modules/kleur";
import { logger } from "../../packages/peppy/src/helpers/logger";
import { spawn } from "../../packages/peppy/src/helpers/spawn";

const getBranchName = async () =>
  spawn({
    command: "git",
    args: ["symbolic-ref", "--short", "HEAD"],
  });

const run = async () => {
  const program = new Command();

  program.description("publish the packages").action(async () => {
    const tasks = [
      {
        title: "Git",
        task: () =>
          new Listr(
            [
              {
                title: "Check current branch",
                task: async () => {
                  const result = await getBranchName();

                  if (result !== "main" && result === "next") {
                    throw new Error(
                      'You can only publish from the "main" or the "next" branches.'
                    );
                  }
                },
              },
              {
                title: "Checking git status",
                task: async () => {
                  const result = await spawn({
                    command: "git",
                    args: ["status", "--porcelain"],
                  });

                  if (result !== "") {
                    throw new Error(
                      "Unclean working tree. Commit or stash changes first."
                    );
                  }
                },
              },
              {
                title: "Checking remote history",
                task: async () => {
                  const result = await spawn({
                    command: "git",
                    args: ["rev-list", "--count", "--left-only", "@{u}...HEAD"],
                  });

                  if (result !== "0") {
                    throw new Error(
                      "Remote history differ. Please pull changes."
                    );
                  }
                },
              },
            ],
            { concurrent: true }
          ),
      },
      {
        title: "Install project dependencies",
        task: () =>
          spawn({
            command: "npm",
            args: ["install", "--ignore-scripts"],
          }),
      },
      {
        title: "Cleaning packages dependencies",
        task: () =>
          spawn({
            command: "lerna",
            args: ["clean", "--yes"],
          }),
      },
      {
        title: "Bootstraping packages",
        task: () =>
          spawn({
            command: "lerna",
            args: ["bootstrap"],
          }),
      },
      {
        title: "Creating CLI symlink",
        task: () =>
          spawn({
            command: "lerna",
            args: ["run", "link"],
          }),
      },
      {
        title: "Running tests",
        task: () =>
          spawn({
            command: "npm",
            args: ["run", "lint"],
          }),
      },
      {
        title: "Publish with Lerna",
        task: async () => {
          const args = ["publish", "--ignore-scripts"];
          const brancheName = await getBranchName();

          if (brancheName === "next") {
            args.unshift("--canary");
            args.unshift("--preid", "next");
            args.unshift("--pre-dist-tag", "next");
          }

          await spawn({
            command: "lerna",
            args,
            options: { stdio: "inherit" },
          });
        },
      },
    ];

    new Listr(tasks).run().catch((error) => {
      logger.error(error);
    });
  });

  await program.parseAsync(process.argv);
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${cyan(error.command)} has failed.`);
  } else {
    logger.error(red("Unexpected error:"));
    logger.error(error);
  }

  logger.log();

  process.exit(1);
});
