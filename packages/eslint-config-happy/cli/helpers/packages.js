/* eslint-disable security/detect-non-literal-require, import/no-dynamic-require, global-require */
import globalDirs from "global-dirs";
import path from "path";
import resolveFrom from "resolve-from";

export const importGlobal = (moduleId) => {
  try {
    const { dependencies = {} } = require(path.join(
      globalDirs.yarn.prefix,
      "global/package.json"
    ));

    if (dependencies[moduleId]) {
      return require(path.join(globalDirs.yarn.packages, moduleId));
    }

    throw new Error(
      `Module '${moduleId}' is not present on Yarn global dependencies.`
    );
  } catch {
    return require(path.join(globalDirs.npm.packages, moduleId));
  }
};

export const importLocal = (moduleId, directory = process.cwd()) =>
  require(resolveFrom(directory, moduleId));

export const importFrom = (moduleId, directory = process.cwd()) => {
  try {
    return importLocal(moduleId, directory);
  } catch {
    return importGlobal(moduleId);
  }
};

export const isPackageExists = (moduleId) => {
  try {
    return !!importFrom(moduleId);
  } catch {
    return false;
  }
};
