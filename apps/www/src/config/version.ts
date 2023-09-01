import "server-only";
import { allVersions } from "contentlayer/generated";

export type VersionType = "current" | "latest" | "next";

export const sortedVersions = allVersions.sort((a, b) =>
  b.version.localeCompare(a.version),
);

export const currentVersion = sortedVersions?.[0]?.version;

export const latestVersion = sortedVersions.filter(
  ({ version }) => version !== "next",
)?.[0]?.version;

export const getVersion = (version: VersionType) =>
  version === "current"
    ? currentVersion
    : version === "latest"
    ? latestVersion
    : "next";
