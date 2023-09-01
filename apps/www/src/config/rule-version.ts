import "server-only";
import { allRuleVersions } from "contentlayer/generated";
import { getVersion, type VersionType } from "@/config/version";

export const sortedAllRuleVersions = allRuleVersions.sort((a, b) =>
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

  return sortedAllRuleVersions.filter(
    (doc) =>
      doc.version === computedVersion &&
      (configKey ? doc.configKey === configKey : true) &&
      (configSlug ? doc.configSlug === configSlug : true) &&
      (ruleKey ? doc.ruleKey === ruleKey : true) &&
      (ruleSlug ? doc.slug === ruleSlug : true),
  );
};
