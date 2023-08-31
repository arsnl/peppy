import "server-only";
import { allESLintConfigs, type ESLintConfig } from "contentlayer/generated";
import { type IconName } from "@/components/icon";

export const baseESLintConfig = allESLintConfigs.find(
  (config) => config.key === "base",
);

export const otherESLintConfigs = allESLintConfigs
  .filter((config) => config.key !== "base")
  .sort((a, b) => a.name.localeCompare(b.name));

// TODO: find a way to change the contentlayer type for icon to IconName instead of string
export const sortedESLintConfig: Array<ESLintConfig & { icon: IconName }> = [
  ...(baseESLintConfig ? [baseESLintConfig] : []),
  ...otherESLintConfigs,
].map((config) => ({
  ...config,
  icon: config.icon as IconName,
}));
