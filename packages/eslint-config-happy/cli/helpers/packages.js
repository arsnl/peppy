/* eslint-disable security/detect-non-literal-require, import/no-dynamic-require, global-require */
import { execSync } from "child_process";
import spawn from "cross-spawn";
import globalDirs from "global-dirs";
import path from "path";
import { sync as readPackageSync } from "read-pkg";
import resolveFrom from "resolve-from";

export const isYarnInstalled = () => {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      return Boolean(userAgent && userAgent.startsWith("yarn"));
    }
    execSync("yarnpkg --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

export const requireLocally = (packageId, dir = process.cwd()) =>
  require(resolveFrom(dir, packageId));

export const requireGlobally = (packageId) => {
  try {
    const { dependencies = {} } = require(path.join(
      globalDirs.yarn.prefix,
      "global/package.json"
    ));

    if (dependencies[packageId]) {
      return require(path.join(globalDirs.yarn.packages, packageId));
    }

    throw new Error(
      `Package '${packageId}' is not present on Yarn global dependencies.`
    );
  } catch {
    return require(path.join(globalDirs.npm.packages, packageId));
  }
};

export const requireFrom = (packageId, dir = process.cwd()) => {
  try {
    return requireLocally(packageId, dir);
  } catch {
    return requireGlobally(packageId);
  }
};

export const isPackageExists = (packageId, dir = process.cwd()) => {
  try {
    return !!requireFrom(packageId, dir);
  } catch {
    return false;
  }
};

export const isPackageExistsGlobally = (packageId) => {
  try {
    return !!requireGlobally(packageId);
  } catch {
    return false;
  }
};

export const isPackageExistsLocally = (packageId, dir = process.cwd()) => {
  try {
    return !!requireLocally(packageId, dir);
  } catch {
    return false;
  }
};

export const isPackageInDependencies = (
  packageId,
  { cwd = process.cwd() } = {}
) => {
  const { dependencies, devDependencies } = readPackageSync({
    cwd,
    normalize: false,
  });

  return !!(dependencies?.[packageId] || devDependencies?.[packageId]);
};

export const npmInit = () =>
  new Promise((resolve, reject) => {
    const child = spawn("npm", ["init"], {
      stdio: "inherit",
      env: { ...process.env, ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" },
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Cannot execute 'npm init'`));
        return;
      }
      resolve();
    });
  });
