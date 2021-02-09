import map from "ramda/es/map";
import pipe from "ramda/es/pipe";
import uniq from "ramda/es/uniq";
import { logger } from "./logger";
import { importFrom, isPackageExists } from "./packages";

export const isPrettierInstalled = (exit) => {
  const exists = isPackageExists("prettier");

  if (!exists && exit) {
    logger.error("Prettier is not installed.");

    process.exit(1);
  }

  return exists;
};

export const getPrettierSupportInfo = () => {
  isPrettierInstalled(true);

  return importFrom("prettier").getSupportInfo();
};

export const getPrettierSupportedExtArray = pipe(
  getPrettierSupportInfo,
  ({ languages = [] }) =>
    languages.reduce((acc, { extensions = [] }) => [...acc, ...extensions], []),
  uniq
);

export const getPrettierSupportedExtGlob = pipe(
  getPrettierSupportedExtArray,
  map((extention) => extention.replace(/^\./, "")),
  (extentions) => extentions.join(","),
  (extsString) => `{**/*,*}.{${extsString}}`
);

export const getPrettierSupportedExt = (glob) =>
  glob ? getPrettierSupportedExtGlob() : getPrettierSupportedExtArray();
