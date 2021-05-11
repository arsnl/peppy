/* eslint-disable security/detect-non-literal-regexp */
import { Command, Option } from "commander";
import { installPeerDependencies } from "../helpers/install-peer-dependencies";

/**
 * Parses the given package string into a package name and version
 * @param {string} packageString - a string representing a package name and version (e.g. package@1.0.0)
 * @returns {PackageInfo} - an object containing the package name and package version
 */
const parsePackageString = (packageString) => {
  // Package scope and package name both can have
  // letters, numbers, dots, hyphens, and underscores.
  // However, they cannot start with dots or underscores
  // The version number may start with a comparator (^, ~, etc) and
  // can contain digits, letters, dots, or dashes (e.g. bootstrap@4.0.0-beta contains all of those characters)
  // Alternatively, it may be a dist tag (e.g. latest, next)
  const packageNameMatcher = /[\w-]+[\w.-]*/;
  const packageScopeMatcher = /@[\w-]+[\w.-]*/;
  const packageVersionMatcher = /([<=>^v~]|(>=|<=))?[\w.-]+/;

  const [, packageName, , , , packageVersion = "latest"] = packageString.match(
    new RegExp(
      `((${packageScopeMatcher.source})?/?(${packageNameMatcher.source}))(@(${packageVersionMatcher.source}))?`
    )
  );

  return {
    packageName,
    packageVersion,
  };
};

export const makeAddCommand = async () => {
  const program = new Command("add");

  program
    .description("installs the provided package and dependencies")
    .arguments("<package>[@<version>]")
    .usage('<package>[@<version>] [options] (default version: "latest")')
    .addOption(
      new Option("-m, --package-manager <pm>", "package manager")
        .choices(["npm", "yarn", "pnpm"])
        .default("npm")
    )
    .addOption(
      new Option(
        "-P, --save-prod",
        "packages will appear in your dependencies"
      ).default(false)
    )
    .addOption(
      new Option(
        "-O, --only-peers",
        "install only peerDependencies of the package"
      ).default(false)
    )
    .addOption(
      new Option(
        "-L, --local",
        "use local node_modules instead of a remote registry to get the list of peerDependencies"
      ).default(false)
    )
    .addOption(
      new Option(
        "-R, --dry-run",
        "only show the install command without installing the packages"
      ).default(false)
    )
    .addOption(
      new Option("-S, --silent", "do not log the install process").default(
        false
      )
    )
    .addOption(
      new Option("-r, --root <path>", "the install directory").default(
        process.cwd()
      )
    )
    .addOption(
      new Option(
        "-x, --extra-args <args>",
        "extra arguments to pass through to the package manager"
      ).default("")
    )
    .action(
      async (
        packageString,
        {
          packageManager,
          saveProd,
          global,
          onlyPeers,
          local,
          dryRun,
          silent,
          root: cwd,
          extraArgs,
        }
      ) => {
        const { packageName, packageVersion } = parsePackageString(
          packageString
        );

        await installPeerDependencies({
          packageName,
          packageVersion,
          packageManager,
          dev: !saveProd,
          global,
          onlyPeers,
          local,
          dryRun,
          silent,
          extraArgs,
          cwd,
        });
      }
    );

  return program;
};
