import "server-only";
import * as React from "react";
import { Code } from "@/components/mdx/code";
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

type RuleHistoryProps = Omit<
  React.HTMLAttributes<HTMLTableElement>,
  "children"
> & {
  version?: VersionType;
  configKey: string;
  ruleKey: string;
};

export const RuleHistory = ({
  version = "current",
  configKey,
  ruleKey,
  className,
  ...props
}: RuleHistoryProps) => {
  const rule = getRuleVersions({ version, configKey, ruleKey })?.[0];
  const history = rule?.history || [];

  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>
          <TableHead>Version</TableHead>
          <TableHead>Changes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {history.map(({ version: v, state }) => (
          <TableRow key={v}>
            <TableCell>
              <Code>{v === "next" ? "next" : `v${v}`}</Code>
            </TableCell>
            <TableCell>
              {state === "new" ? (
                <p>
                  Rule <Code>{ruleKey}</Code> introduced.
                </p>
              ) : state === "updated" ? (
                <p>Rule updated.</p>
              ) : state === "removed" ? (
                <p>Rule removed.</p>
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
