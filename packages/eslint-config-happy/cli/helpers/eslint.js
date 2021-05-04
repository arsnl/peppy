/* eslint-disable no-restricted-syntax */
/* eslint-disable fp/no-loops */
import { blue } from "chalk";
import fs from "fs";
import path from "path";
import prompts from "prompts";
import { sync as readPackageSync } from "read-pkg";
import { sync as rimrafSync } from "rimraf";
import { sync as writePackageSync } from "write-pkg";
import { logger } from "./logger";

export const eslintCleanConfigurationFiles = async (dir = process.cwd()) => {
  const configurationFiles = [
    ".eslintrc.js",
    ".eslintrc.cjs",
    ".eslintrc.yaml",
    ".eslintrc.yml",
    ".eslintrc.json",
  ];

  const conflicts = fs
    .readdirSync(dir)
    .filter((file) => configurationFiles.includes(file));

  if (conflicts.length > 0) {
    logger.log(
      `The directory "${dir}" already contain ESLint configurations files that could conflict:`
    );
    logger.log();
    for (const file of conflicts) {
      try {
        const stats = fs.lstatSync(path.join(dir, file));
        if (stats.isDirectory()) {
          logger.log(`  ${blue(file)}/`);
        } else {
          logger.log(`  ${file}`);
        }
      } catch {
        logger.log(`  ${file}`);
      }
    }
    logger.log();

    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message: "Do you want to delete theses ESLint configuration files?",
      initial: true,
    });

    if (confirm) {
      for (const file of conflicts) {
        rimrafSync(path.join(dir, file));
      }
    } else {
      logger.warn(
        "You've choose to keep the existing ESLint configurations. Make sure to adapt them after the installation to correctly use Happy ESlint Configurations."
      );
    }

    return !!confirm;
  }

  return true;
};

export const eslintCleanPackageJSON = async (dir = process.cwd()) => {
  const pkg = readPackageSync({ cwd: dir, normalize: false });
  const { eslintConfig, ...pkgRest } = pkg;

  if (eslintConfig) {
    logger.log(
      `The "${path.join(
        dir,
        "package.json"
      )}" already contain ESLint configuration that could conflict.`
    );

    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message:
        "Do you want to delete the eslintConfig property from the package.json?",
      initial: true,
    });

    if (confirm) {
      writePackageSync(dir, pkgRest, { normalize: false });
    } else {
      logger.warn(
        "You've choose to keep the existing ESLint configurations on your package.json. Make sure to adapt them after the installation to correctly use Happy ESlint Configurations."
      );
    }

    return !!confirm;
  }

  return true;
};
