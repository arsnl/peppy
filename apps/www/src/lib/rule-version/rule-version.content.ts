import "server-only";
import { allRuleVersions } from "contentlayer/generated";
import { getVersion } from "@/lib/version/version.content";
import { type VersionType } from "@/lib/version/version.type";

const sorted = allRuleVersions.sort((a, b) =>
  a.ruleKey.localeCompare(b.ruleKey),
);

export const getRuleVersions = ({
  version = "current",
  configKey,
  configSlug,
  ruleKey,
  ruleSlug,
}: {
  version?: VersionType;
  configKey?: string;
  configSlug?: string;
  ruleKey?: string;
  ruleSlug?: string;
} = {}) => {
  const computedVersion = getVersion(version);

  return sorted.filter(
    (doc) =>
      doc.version === computedVersion &&
      (configKey ? doc.configKey === configKey : true) &&
      (configSlug ? doc.configSlug === configSlug : true) &&
      (ruleKey ? doc.ruleKey === ruleKey : true) &&
      (ruleSlug ? doc.slug === ruleSlug : true),
  );
};
