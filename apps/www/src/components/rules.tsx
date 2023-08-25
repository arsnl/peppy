import * as React from "react";
import { RuleCard, type RuleCardOptions } from "@/components/rule-card";
import { Input } from "@/components/ui/input";
import { getESLintRules } from "@/lib/eslint";
import { cn } from "@/lib/utils";
import type { ESLintConfigName } from "@/types/eslint";

export type RuleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  configName: ESLintConfigName;
};

export const Rules = async ({ configName, className, ...props }: RuleProps) => {
  const eslintRules = await getESLintRules({ configName, version: "latest" });

  const rulesProps = Object.entries(eslintRules || {}).map(
    ([ruleName, rule]) => {
      const { description, docsUrl, js, ts, state, updates } = rule || {};

      return {
        configName,
        ruleName,
        description,
        docsUrl,
        js,
        ts,
        state,
        updates,
      } satisfies RuleCardOptions;
    },
  );

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center py-4">
        <Input placeholder="Search rules..." className="max-w-sm" />
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {rulesProps.map((rule) => (
          <RuleCard {...rule} key={rule.ruleName} />
        ))}
      </div>
    </div>
  );
};
