import "server-only";
import { allVersions } from "contentlayer/generated";
import { type VersionType } from "@/lib/version/version.type";

const sorted = allVersions.sort((a, b) => b.version.localeCompare(a.version));

const current = sorted?.[0]?.version;

const latest = sorted.filter(({ version }) => version !== "next")?.[0]?.version;

export const getVersions = (version?: string | VersionType) => {
  const computedVersion =
    version === "current" ? current : version === "latest" ? latest : version;

  return sorted.filter((doc) =>
    computedVersion ? doc.version === computedVersion : true,
  );
};
