import "server-only";
import * as React from "react";
import { Icon } from "@/components/icon";
import { Code } from "@/components/mdx/code";
import { H2 } from "@/components/mdx/h2";
import { Tabs } from "@/components/mdx/tabs";
import { TabsContent } from "@/components/mdx/tabs-content";
import { TabsList } from "@/components/mdx/tabs-list";
import { TabsTrigger } from "@/components/mdx/tabs-trigger";
import { RuleLevelIcon } from "@/components/rule-level-icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRuleVersions } from "@/config/rule-version";
import { type VersionType } from "@/config/version";

type RuleInfosProps = React.HTMLAttributes<HTMLTableElement> & {
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
    jsEntry,
    tsLevel,
    tsEntry,
    state,
    version: ruleVersion,
    history,
  } = rule;
  const [jsCode, tsCode] = children;

  return (
    <div {...props}>
      {state !== "removed" && (
        <Tabs defaultValue={jsEntry ? "js" : "ts"}>
          <TabsList>
            {jsEntry && (
              <TabsTrigger value="js">
                <div className="flex items-center gap-2">
                  <RuleLevelIcon level={jsLevel} />
                  <p>JavaScript</p>
                </div>
              </TabsTrigger>
            )}
            {tsEntry && (
              <TabsTrigger value="ts">
                <div className="flex items-center gap-2">
                  <RuleLevelIcon ts level={tsLevel} />
                  <p>TypeScript</p>
                </div>
              </TabsTrigger>
            )}
          </TabsList>

          {jsEntry && <TabsContent value="js">{jsCode}</TabsContent>}
          {tsEntry && <TabsContent value="ts">{tsCode}</TabsContent>}
        </Tabs>
      )}
      {state === "removed" && (
        <Alert>
          <Icon icon="file-x" className="h-4 w-4" />
          <AlertTitle className="mb-2">Rule removed</AlertTitle>
          <AlertDescription>
            The {ruleKey} rule was removed from the {configKey} configuration in
            the {ruleVersion} version.
          </AlertDescription>
        </Alert>
      )}

      <H2>Version History</H2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Version</TableHead>
            <TableHead>Changes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((historyEntry) => (
            <TableRow key={historyEntry.version}>
              <TableCell>
                <Code>
                  {historyEntry.version === "next"
                    ? "next"
                    : `v${historyEntry.version}`}
                </Code>
              </TableCell>
              <TableCell>
                {historyEntry.state === "new" ? (
                  <p>Rule introduced</p>
                ) : historyEntry.state === "updated" ? (
                  <p>Rule updated</p>
                ) : historyEntry.state === "removed" ? (
                  <p>Rule removed</p>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
