import "server-only";
import { allRuleVersions } from "contentlayer/generated";
import { currentVersion } from "@/config/version";

export const currentRuleVersions = allRuleVersions.filter(
  ({ version }) => version === currentVersion,
);

export const sortedCurrentRuleVersions = currentRuleVersions.sort((a, b) =>
  a.ruleName.localeCompare(b.ruleName),
);

export const getRuleVersions = ({ configName }: { configName: string }) =>
  sortedCurrentRuleVersions.filter((doc) => doc.configName === configName);
