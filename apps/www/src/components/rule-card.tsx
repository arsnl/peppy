import { type RuleVersion } from "contentlayer/generated";
import Link, { type LinkProps } from "next/link";
import { Mdx } from "@/components/mdx";
import { RuleLevelIcon } from "@/components/rule-level-icon";
import { RuleStateBadge } from "@/components/rule-state-badge";
import { cn } from "@/lib/utils";

export type RuleCardOptions = Pick<
  RuleVersion,
  | "version"
  | "ruleKey"
  | "configKey"
  | "description"
  | "jsLevel"
  | "tsLevel"
  | "state"
  | "stateLabel"
  | "href"
>;

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
    <RuleStateBadge
      state={state}
      stateLabel={stateLabel}
      className="absolute left-4 top-0 -translate-y-1/2 text-muted-foreground"
    />
    <div className="flex flex-col gap-1 pb-4 sm:pb-0">
      <h3 className="font-semibold tracking-tight">{ruleKey}</h3>
      <Mdx
        code={description.code}
        className="text-sm leading-tight text-muted-foreground"
      />
    </div>

    <div className="flex justify-end gap-2">
      <RuleLevelIcon
        level={jsLevel}
        className="text-muted-foreground sm:justify-start"
      />
      <RuleLevelIcon
        level={tsLevel}
        ts
        className="text-muted-foreground sm:justify-start"
      />
    </div>
  </Link>
);
