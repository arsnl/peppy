import "server-only";
import { allVersions } from "contentlayer/generated";

export const sortedVersions = allVersions.sort((a, b) =>
  b.version.localeCompare(a.version),
);

export const currentVersion = sortedVersions[0].version;

export const currentVersionType = currentVersion === "next" ? "next" : "latest";
