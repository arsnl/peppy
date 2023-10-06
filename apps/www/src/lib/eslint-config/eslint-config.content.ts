import "server-only";
import { allESLintConfigs, type ESLintConfig } from "contentlayer/generated";
import { type IconLogoName } from "@/components/icon-logo";

const base = allESLintConfigs.find((config) => config.key === "base");

const others = allESLintConfigs
  .filter((config) => config.key !== "base")
  .sort((a, b) => a.name.localeCompare(b.name));

// TODO: find a way to change the contentlayer type for icon to IconName instead of string
const sorted: Array<ESLintConfig & { icon: IconLogoName }> = [
  ...(base ? [base] : []),
  ...others,
].map((config) => ({
  ...config,
  icon: config.icon as IconLogoName,
}));

export const getESlintConfigs = ({
  configKey,
  configSlug,
}: {
  configKey?: string;
  configSlug?: string;
} = {}) =>
  sorted.filter(
    (doc) =>
      (configKey ? doc.key === configKey : true) &&
      (configSlug ? doc.slug === configSlug : true),
  );
