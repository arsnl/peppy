import { type RuleVersion } from "contentlayer/generated";
import Link, { type LinkProps } from "next/link";
import { Mdx } from "@/components/mdx";
import { RuleLevelIcon } from "@/components/rule-level-icon";
import { RuleStateIcon } from "@/components/rule-state-icon";
import { cn } from "@/lib/utils";

export type RuleCardOptions = Pick<
  RuleVersion,
  | "version"
  | "ruleKey"
  | "configKey"
  | "description"
  | "jsLevel"
  | "jsState"
  | "tsLevel"
  | "tsState"
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
  jsState,
  tsLevel,
  tsState,
  href,
  description,
  className,
  ...props
}: RuleCardProps) => (
  <Link
    href={href}
    className={cn(
      "relative flex flex-col rounded-md border transition-colors hover:border-foreground hover:shadow-sm sm:flex-row sm:items-center sm:justify-between",
      className,
    )}
    {...props}
  >
    <div className="flex flex-col gap-1 p-4">
      <h3 className="font-semibold tracking-tight">{ruleKey}</h3>
      <Mdx
        code={description.code}
        className="text-sm text-muted-foreground [&>p]:leading-tight"
      />
    </div>

    <div className="flex border-t border-border sm:h-full sm:flex-col sm:justify-end sm:border-l sm:border-t-0">
      <div className="flex flex-1 flex-col border-border sm:flex-row sm:border-b">
        <div className="flex items-center justify-center border-b border-r border-border p-4 py-2 text-xs font-semibold text-muted-foreground sm:w-14 sm:border-b-0 sm:py-4">
          <span>JS</span>
        </div>
        <div className="flex items-center justify-around border-r border-border sm:border-r-0">
          <div className="p-4 py-2 sm:p-4 sm:pr-2">
            <RuleLevelIcon level={jsLevel} />
          </div>
          <div className="p-4 py-2 sm:p-4 sm:pr-2">
            <RuleStateIcon state={jsState} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col border-border sm:flex-row">
        <div className="flex items-center justify-center border-b border-border p-4 py-2 text-xs font-semibold text-muted-foreground sm:w-14 sm:border-b-0 sm:border-r sm:py-4">
          <span>TS</span>
        </div>
        <div className="flex items-center justify-around">
          <div className="p-4 py-2 sm:p-4 sm:pr-2">
            <RuleLevelIcon level={tsLevel} />
          </div>
          <div className="p-4 py-2 sm:p-4 sm:pr-2">
            <RuleStateIcon state={tsState} />
          </div>
        </div>
      </div>
    </div>
  </Link>
);
