import Link from "next/link";
import { Icon } from "@/components/icon";
import { sortedESLintConfig } from "@/config/eslint-configs";

export const ESLintConfigCards = () => (
  <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
    {sortedESLintConfig.map((config) => (
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
