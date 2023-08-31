import * as React from "react";
import { RuleCard, type RuleCardOptions } from "@/components/rule-card";
import { Input } from "@/components/ui/input";
import { getRuleVersions } from "@/config/rule-version";
import { cn } from "@/lib/utils";

export type RuleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  configKey: string;
};

export const Rules = async ({ configKey, className, ...props }: RuleProps) => {
  const ruleVersions = getRuleVersions({ configKey });
  const rulesProps = ruleVersions.map((ruleVersion) => {
    const {
      version,
      ruleKey,
      jsLevel,
      tsLevel,
      state,
      stateLabel,
      href,
      description,
    } = ruleVersion;

    return {
      version,
      ruleKey,
      configKey,
      jsLevel,
      tsLevel,
      state,
      stateLabel,
      href,
      description,
    } satisfies RuleCardOptions;
  });

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center py-4">
        <Input placeholder="Filter rules..." className="max-w-sm" />
      </div>

      <div className="grid gap-6">
        {rulesProps.map((rule) => (
          <RuleCard {...rule} key={rule.ruleKey} />
        ))}
      </div>
    </div>
  );
};
