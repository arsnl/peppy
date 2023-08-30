import * as React from "react";
import { allRules } from "contentlayer/generated";
import { RuleCard, type RuleCardOptions } from "@/components/rule-card";
import { Input } from "@/components/ui/input";
import { getRuleVersions } from "@/config/rule-version";
import { cn } from "@/lib/utils";

export type RuleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  configName: string;
};

export const Rules = async ({ configName, className, ...props }: RuleProps) => {
  const ruleVersions = getRuleVersions({ configName });
  const rulesProps = ruleVersions.map((ruleVersion) => {
    const { version, ruleName, jsLevel, tsLevel, state, stateLabel, slug } =
      ruleVersion;

    // TODO: Remove and remplace with computed property on the ruleVersion
    const ruleContent = allRules.find(({ name }) => name === ruleName);
    const { description } = ruleContent || {};

    return {
      version,
      ruleName,
      configName,
      jsLevel,
      tsLevel,
      state,
      stateLabel,
      slug,
      // eslint-disable-next-line react/jsx-no-useless-fragment
      description: <>{description?.raw || ""}</>, // TODO: Migrate to MDX
    } satisfies RuleCardOptions;
  });

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center py-4">
        <Input placeholder="Filter rules..." className="max-w-sm" />
      </div>

      <div className="grid gap-6">
        {rulesProps.map((rule) => (
          <RuleCard {...rule} key={rule.ruleName} />
        ))}
      </div>
    </div>
  );
};
