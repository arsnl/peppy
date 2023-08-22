import * as React from "react";
import { RuleCard, type RuleCardOptions } from "@/components/rule-card";
import { Input } from "@/components/ui/input";
import { rules } from "@/config/rules";
import { cn } from "@/lib/utils";
import type { ESLintConfigName } from "@/types/rules";

export type RuleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  configuration: ESLintConfigName;
};

export const Rules = async ({
  configuration,
  className,
  ...props
}: RuleProps) => {
  const filteredRules = Object.entries(rules).reduce<RuleCardOptions[]>(
    (acc, [ruleName, ruleOptions]) => {
      const { docsUrl, usedBy, description } = ruleOptions || {};
      const { versions = [] } = usedBy?.[configuration] || {};

      const ruleCardOptions = {
        ruleName,
        configName: configuration,
        description,
        docsUrl,
        usedBy: Object.keys(usedBy) as ESLintConfigName[],
        versions,
      } satisfies RuleCardOptions;

      return usedBy?.[configuration] ? [...acc, ruleCardOptions] : acc;
    },
    [],
  );

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center py-4">
        <Input placeholder="Search rules..." className="max-w-sm" />
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {filteredRules.map((rule) => (
          <RuleCard {...rule} key={rule.ruleName} />
        ))}
      </div>
    </div>
  );
};
