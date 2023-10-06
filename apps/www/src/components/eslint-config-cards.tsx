import Link from "next/link";
import { IconLogo } from "@/components/icon-logo";
import { getESlintConfigs } from "@/lib/eslint-config/eslint-config.content";

export const ESLintConfigCards = () => (
  <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
    {getESlintConfigs().map((config) => (
      <Link
        className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
        href={config.href}
        key={config.key}
      >
        {config.icon && <IconLogo icon={config.icon} className="h-10 w-10" />}
        <p className="mt-2 font-medium">{config.name}</p>
      </Link>
    ))}
  </div>
);
