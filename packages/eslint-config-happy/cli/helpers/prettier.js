import {} from "prettier";
import map from "ramda/es/map";
import pipe from "ramda/es/pipe";
import uniq from "ramda/es/uniq";
import { logger } from "./logger";
import { isPackageExists, requireFrom } from "./packages";

export const getPrettierSupportInfo = () => {
  const isPrettierInstalled = isPackageExists("prettier");

  if (!isPrettierInstalled) {
    logger.error("Prettier is not installed.");

    return process.exit(1);
  }

  return requireFrom("prettier").getSupportInfo();
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
