import "server-only";
import { allESLintConfigs, type ESLintConfig } from "contentlayer/generated";
import { type IconName } from "@/components/icon";

export const baseESLintConfig = allESLintConfigs.find(
  (config) => config.nameKey === "base",
);

export const otherESLintConfigs = allESLintConfigs
  .filter((config) => config.nameKey !== "base")
  .sort((a, b) => a.name.localeCompare(b.name));

export const sortedESLintConfig: Array<
  ESLintConfig & { href: string; icon: IconName }
> = [
  ...(baseESLintConfig ? [baseESLintConfig] : []),
  ...otherESLintConfigs,
].map((config) => ({
  ...config,
  icon: config.icon as IconName,
  href: `/docs/configurations/${config.nameKey}`,
}));
