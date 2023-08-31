import "server-only";
import { allRuleVersions } from "contentlayer/generated";
import { currentVersion } from "@/config/version";

export const currentRuleVersions = allRuleVersions.filter(
  ({ version }) => version === currentVersion,
);

export const sortedCurrentRuleVersions = currentRuleVersions.sort((a, b) =>
  a.ruleKey.localeCompare(b.ruleKey),
);

export const getRuleVersions = ({ configKey }: { configKey: string }) =>
  sortedCurrentRuleVersions.filter((doc) => doc.configKey === configKey);
