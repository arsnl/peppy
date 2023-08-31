"use client";

import { type HTMLAttributes } from "react";
import { type RuleVersion } from "contentlayer/generated";
import Link, { type LinkProps } from "next/link";
import { Icon, type IconName } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type RuleCardOptions = Pick<
  RuleVersion,
  | "version"
  | "ruleKey"
  | "configKey"
  | "jsLevel"
  | "tsLevel"
  | "state"
  | "stateLabel"
  | "href"
> & { description: any }; // TODO: Migrate to RuleVersion then use the RuleVersion property

type _RuleConfigurationIconProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  level?: Required<RuleCardOptions>["jsLevel" | "tsLevel"];
  icon: IconName;
};

const _RuleConfigurationIcon = ({
  level,
  icon,
  className,
  ...props
}: _RuleConfigurationIconProps) =>
  level ? (
    <div
      className={cn(
        "relative flex gap-1 rounded-md border p-1 text-muted-foreground sm:justify-start",
        className,
      )}
      {...props}
    >
      <Icon icon={icon} className="h-5 w-5" />
      <span
        className={cn(
          "absolute right-0 top-0 block h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full",
          {
            "bg-muted-foreground": level === "off",
            "bg-yellow-500": level === "warn",
            "bg-red-500": level === "error",
          },
        )}
      />
    </div>
  ) : null;

export type RuleCardProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  Omit<LinkProps, "href" | "children"> &
  RuleCardOptions;

export const RuleCard = ({
  version,
  ruleKey,
  configKey,
  jsLevel,
  tsLevel,
  state,
  stateLabel,
  href,
  description,
  className,
  ...props
}: RuleCardProps) => (
  <Link
    href={href}
    className={cn(
      "relative flex flex-col rounded-md border p-4 transition-colors hover:border-foreground hover:shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4",
      className,
    )}
    {...props}
  >
    {state !== "unchanged" && (
      <Badge
        variant="outline"
        className="absolute left-4 top-0 flex -translate-y-1/2 gap-2 rounded-full bg-background p-1 px-2 text-xs text-muted-foreground"
      >
        <span
          className={cn("block h-2 w-2 rounded-full", {
            "bg-green-500": state === "new",
            "bg-red-500": state === "removed",
            "bg-sky-500": state === "updated",
          })}
        />
        {stateLabel}
      </Badge>
    )}

    <div className="flex flex-col gap-1 pb-4 sm:pb-0">
      <h3 className="text-sm font-semibold leading-tight tracking-tight">
        {ruleKey}
      </h3>
      <div className="text-sm leading-tight text-muted-foreground">
        {description}
      </div>
    </div>

    <div className="flex justify-end gap-2">
      <_RuleConfigurationIcon
        level={jsLevel}
        icon="javascript-outline"
        aria-label={`View JavaScript configuration for the rule ${ruleKey}`}
      />
      <_RuleConfigurationIcon
        level={tsLevel}
        icon="typescript-outline"
        aria-label={`View TypeScript configuration for the rule ${ruleKey}`}
      />
    </div>
  </Link>
);
