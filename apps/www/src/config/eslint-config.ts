import "server-only";
import { allESLintConfigs, type ESLintConfig } from "contentlayer/generated";
import { type IconName } from "@/components/icon";

const baseESLintConfig = allESLintConfigs.find(
  (config) => config.key === "base",
);

const otherESLintConfigs = allESLintConfigs
  .filter((config) => config.key !== "base")
  .sort((a, b) => a.name.localeCompare(b.name));

// TODO: find a way to change the contentlayer type for icon to IconName instead of string
const sortedESLintConfig: Array<ESLintConfig & { icon: IconName }> = [
  ...(baseESLintConfig ? [baseESLintConfig] : []),
  ...otherESLintConfigs,
].map((config) => ({
  ...config,
  icon: config.icon as IconName,
}));

export const getESlintConfigs = ({
  configKey,
  configSlug,
}: {
  configKey?: string;
  configSlug?: string;
} = {}) =>
  sortedESLintConfig.filter(
    (doc) =>
      (configKey ? doc.key === configKey : true) &&
      (configSlug ? doc.slug === configSlug : true),
  );
