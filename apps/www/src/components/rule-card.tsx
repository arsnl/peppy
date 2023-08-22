"use client";

import * as React from "react";
import { ExternalLinkIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  type ESLintConfigName,
  type Rule,
  type Rules,
  type UsedByEntry,
} from "@/types/rules";

export type RuleCardOptions = Pick<Rule, "docsUrl" | "description"> &
  UsedByEntry & {
    ruleName: string;
    configName: ESLintConfigName;
    usedBy: ESLintConfigName[];
  };

export const getRuleCardOptions = ({
  ruleName,
  configName,
  eslintRules,
}: {
  ruleName: string;
  configName: ESLintConfigName;
  eslintRules: Rules;
}): RuleCardOptions => {
  const { docsUrl, usedBy, description } = eslintRules?.[ruleName] || {};
  const { versions = [] } = usedBy?.[configName] || {};

  return {
    ruleName,
    configName,
    description,
    docsUrl,
    usedBy: Object.keys(usedBy) as ESLintConfigName[],
    versions,
  };
};

export type RuleCardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  RuleCardOptions;

export const RuleCard = ({
  ruleName,
  description,
  docsUrl,
  versions,
  configName,
  usedBy,
  className,
  ...props
}: RuleCardProps) => {
  type PanelType = "ts" | "js" | "versions";

  const [activeCollapsible, setActiveCollapsible] =
    React.useState<null | PanelType>(null);

  const buttonClickHandler = (panel: PanelType) => () =>
    setActiveCollapsible((v) => (v === panel ? null : panel));

  return (
    <div className={cn("rounded-md border p-5", className)} {...props}>
      <div className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight md:text-lg">
          {ruleName}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center justify-end space-x-4 text-sm">
        <Button
          variant="link"
          className="p-0"
          onClick={buttonClickHandler("js")}
        >
          JavaScript
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="p-0"
          onClick={buttonClickHandler("ts")}
        >
          TypeScript
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="p-0"
          onClick={buttonClickHandler("versions")}
        >
          Versions
        </Button>
        <Separator orientation="vertical" />
        <a
          href={docsUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "link" }), "gap-1 p-0")}
        >
          <span>Docs</span>
          <ExternalLinkIcon className="h-[1em] w-[1em] text-muted-foreground" />
        </a>
      </div>
      <Collapsible open={activeCollapsible === "versions"}>
        <CollapsibleContent>Versions placeholder</CollapsibleContent>
      </Collapsible>
      <Collapsible open={activeCollapsible === "js"}>
        <CollapsibleContent>
          <pre>
            <code>{versions?.[0]?.values?.js?.entry}</code>
          </pre>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible open={activeCollapsible === "ts"}>
        <CollapsibleContent>
          <pre>
            <code>{versions?.[0]?.values?.ts?.entry}</code>
          </pre>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
