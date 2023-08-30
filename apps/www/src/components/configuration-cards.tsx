import { allESLintConfigs, type ESLintConfig } from "contentlayer/generated";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icon";

const baseConfig = allESLintConfigs.find((config) => config.nameKey === "base");

const otherConfigs = allESLintConfigs
  .filter((config) => config.nameKey !== "base")
  .sort((a, b) => a.name.localeCompare(b.name));

const allConfigs: Array<ESLintConfig & { href: string; icon: IconName }> = [
  ...(baseConfig ? [baseConfig] : []),
  ...otherConfigs,
].map((config) => ({
  ...config,
  icon: config.icon as IconName,
  href: `/docs/configurations/${config.nameKey}`,
}));

export const ConfigurationCards = () => (
  <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
    {allConfigs.map((config) => (
      <Link
        className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
        href={config.href}
        key={config.nameKey}
      >
        {config.icon && <Icon icon={config.icon} className="h-10 w-10" />}
        <p className="mt-2 font-medium">{config.name}</p>
      </Link>
    ))}
  </div>
);
