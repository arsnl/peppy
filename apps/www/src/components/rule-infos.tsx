import "server-only";
import * as React from "react";
import { type RuleVersion } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import { Code } from "@/components/mdx/code";
import { H2 } from "@/components/mdx/h2";
import { Tabs } from "@/components/mdx/tabs";
import { TabsContent } from "@/components/mdx/tabs-content";
import { TabsList } from "@/components/mdx/tabs-list";
import { TabsTrigger } from "@/components/mdx/tabs-trigger";
import { RuleDiff } from "@/components/rule-diff";
import { RuleLevelIcon } from "@/components/rule-level-icon";
import { RuleStateIcon } from "@/components/rule-state-icon";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getChangesString } from "@/lib/changelog/changelog.util";
import { getRuleVersions } from "@/lib/rule-version/rule-version.content";
import { type TableOfContents } from "@/lib/toc/toc.type";
import { cn } from "@/lib/utils";
import { type VersionType } from "@/lib/version/version.type";

const HEADINGS = {
  js: { title: "JavaScript", id: "javascript" },
  ts: { title: "TypeScript", id: "typescript" },
  history: { title: "History", id: "history" },
};

export const getRuleInfoTOC = (rule: RuleVersion) => {
  const { jsState, tsState } = rule;

  const items = [
    jsState !== "none" ? "js" : "",
    tsState !== "none" ? "ts" : "",
    "history",
  ]
    .filter((id): id is keyof typeof HEADINGS => !!id)
    .map((id) => ({
      title: HEADINGS[id].title,
      url: `#${HEADINGS[id].id}`,
    }));

  return { items } satisfies TableOfContents;
};

type _RuleCodeProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  entry: RuleVersion["jsEntry" | "tsEntry"];
  level: RuleVersion["jsLevel" | "tsLevel"];
  code: React.ReactNode;
  state: RuleVersion["jsState" | "tsState"];
  previousEntryStringified: string;
  currentEntryStringified: string;
  ts?: boolean;
};

const _RuleCode = ({
  entry,
  level,
  code,
  state,
  previousEntryStringified,
  currentEntryStringified,
  ts = false,
  ...props
}: _RuleCodeProps) => {
  const heading = ts ? HEADINGS.ts : HEADINGS.js;

  return state !== "none" ? (
    <div {...props}>
      <H2 id={heading.id} className="flex items-center gap-2">
        {heading.title}
      </H2>
      <div>
        <div className="flex p-4 text-sm">
          <div className="flex flex-1 items-center gap-2 border-r border-border pr-4">
            <div>
              <RuleLevelIcon level={level} />
            </div>
            <Balancer>
              Level{" "}
              <span className="font-semibold">
                {!level ? "not set" : level}
              </span>
            </Balancer>
          </div>
          <div className="flex flex-1 items-center gap-2 pl-4">
            <div>
              <RuleStateIcon state={state} />
            </div>
            <Balancer>
              Settings <span className="font-semibold">{state}</span>
            </Balancer>
          </div>
        </div>
        <Separator />
      </div>

      {state === "introduced" || state === "unchanged" ? (
        code
      ) : state === "updated" ? (
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="changes">Changes</TabsTrigger>
          </TabsList>
          <TabsContent value="current">{code}</TabsContent>
          <TabsContent value="changes">
            <RuleDiff
              oldString={previousEntryStringified}
              newString={currentEntryStringified}
            />
          </TabsContent>
        </Tabs>
      ) : (
        <RuleDiff
          oldString={previousEntryStringified}
          newString={currentEntryStringified}
        />
      )}
    </div>
  ) : null;
};

export type RuleInfosProps = React.HTMLAttributes<HTMLTableElement> & {
  version?: VersionType;
  configKey: string;
  ruleKey: string;
  children: [React.ReactNode, React.ReactNode];
};

export const RuleInfos = ({
  version = "current",
  configKey,
  ruleKey,
  children,
  className,
  ...props
}: RuleInfosProps) => {
  const rule = getRuleVersions({ version, configKey, ruleKey })?.[0];
  const {
    jsLevel,
    jsState,
    jsEntry,
    jsEntryStringified,
    previousJsEntryStringified,
    tsLevel,
    tsState,
    tsEntry,
    tsEntryStringified,
    previousTsEntryStringified,
    history,
  } = rule;
  const [jsCode, tsCode] = children;

  return (
    <div {...props}>
      <_RuleCode
        entry={jsEntry}
        level={jsLevel}
        code={jsCode}
        state={jsState}
        previousEntryStringified={previousJsEntryStringified}
        currentEntryStringified={jsEntryStringified}
      />
      <_RuleCode
        entry={tsEntry}
        level={tsLevel}
        code={tsCode}
        state={tsState}
        previousEntryStringified={previousTsEntryStringified}
        currentEntryStringified={tsEntryStringified}
        ts
        className={cn({ "mt-12": jsState !== "none" })}
      />

      <H2 id={HEADINGS.history.id}>{HEADINGS.history.title}</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Version</TableHead>
            <TableHead>Changes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((RuleVersionHistoryEntry) => (
            <TableRow key={RuleVersionHistoryEntry.version}>
              <TableCell>
                <Code>
                  {RuleVersionHistoryEntry.version === "next"
                    ? "next"
                    : `v${RuleVersionHistoryEntry.version}`}
                </Code>
              </TableCell>
              <TableCell>
                <p>{getChangesString(RuleVersionHistoryEntry)}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
