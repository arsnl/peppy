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
      const { description, js, ts, state } = rule || {};

      return {
        version: "latest",
        configName,
        ruleName,
        description,
        js: js?.level,
        ts: ts?.level,
        state,
      } satisfies RuleCardOptions;
    },
  );

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
