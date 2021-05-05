import map from "ramda/es/map";
import pipe from "ramda/es/pipe";
import uniq from "ramda/es/uniq";
import { isPackageInstalled } from "./is-package-installed";
import { logger } from "./logger";
import { requireFrom } from "./require-from";

/**
 * Gets Prettier supported extensions
 * @param {Object} options - options
 * @param {boolean} options.glob - flag to return a glob string
 * @param {string} options.cwd - the current working directory
 * @returns {Array<string>|string} - a list of extensions or a glob string matching the supported extensions
 */
export const getPrettierSupportedExtensions = ({
  glob = false,
  cwd = process.cwd(),
}) => {
  const isPrettierInstalled = isPackageInstalled({
    packageName: "prettier",
    cwd,
  });

  if (!isPrettierInstalled) {
    logger.error("Prettier is not installed.");

    return process.exit(0);
  }

  const extensions = pipe(
    requireFrom({ packageName: "prettier", cwd }).getSupportInfo(),
    ({ languages = [] }) =>
      languages.reduce((acc, { exts = [] }) => [...acc, ...exts], []),
    uniq
  );

  const extensionsGlob = pipe(
    extensions,
    map((ext) => ext.replace(/^\./, "")),
    (exts) => exts.join(","),
    (extsString) => `{**/*,*}.{${extsString}}`
  );

  return glob ? extensionsGlob : extensions;
};
