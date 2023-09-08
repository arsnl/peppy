import "@/styles/mdx.css";
import { Fragment } from "react";
import Balancer from "react-wrap-balancer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Icon } from "@/components/icon";
import { Mdx } from "@/components/mdx";
import { Code } from "@/components/mdx/code";
import { H2 } from "@/components/mdx/h2";
import { H3 } from "@/components/mdx/h3";
import { Pager } from "@/components/pager";
import { RuleStateIcon } from "@/components/rule-state-icon";
import { TOC } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRuleChangesString } from "@/lib/changelog/changelog.util";
import { siteConfig } from "@/lib/site/site.config";
import { cn, formatMonth } from "@/lib/utils";
import { getVersions } from "@/lib/version/version.content";
import type { Metadata } from "next";

const pageConfig = {
  title: "Changelog",
  description: "Latest updates and improvements.",
  href: "/docs/changelog",
};

export const generateMetadata = async (): Promise<Metadata> => ({
  title: pageConfig.title,
  description: pageConfig.description,
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
    type: "article",
    url: pageConfig.href,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageConfig.title,
    description: pageConfig.description,
    images: [siteConfig.ogImage],
    creator: "@im_arsnl",
  },
});

const ChangelogPage = async () => {
  const versions = getVersions();
  const toc = {
    items: versions.map(({ version }) => ({
      title: version === "next" ? "Next" : version,
      url: `#${version}`,
    })),
  };

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumb href={pageConfig.href} title={pageConfig.title} />
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            Changelog
          </h1>

          <p className="text-lg text-muted-foreground">
            <Balancer>{pageConfig.description}</Balancer>
          </p>
        </div>
        <div className="pb-12 pt-8">
          {versions.map(({ version, body, publishedDate, ruleChanges }) => (
            <Fragment key={version}>
              <H2 id={version}>
                <Code className="mr-2 text-[1em]">{`${
                  version === "next" ? "Next" : version
                }`}</Code>
                {`${formatMonth(publishedDate)}`}
              </H2>
              <Mdx code={body.code} className="mt-6" />
              {!!ruleChanges?.length && (
                <>
                  <H3 className="border-b border-border pb-2">Rule changes</H3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Configuration</TableHead>
                        <TableHead>Rule</TableHead>
                        <TableHead>Changes</TableHead>
                        <TableHead>
                          <Icon icon="js-square" className="h-6 w-6" />
                        </TableHead>
                        <TableHead>
                          <Icon icon="ts-square" className="h-6 w-6" />
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ruleChanges.map((change) => (
                        <TableRow key={`${change.configKey}_${change.ruleKey}`}>
                          <TableCell>
                            <p>{change.configKey}</p>
                          </TableCell>
                          <TableCell>
                            <p>{change.ruleKey}</p>
                          </TableCell>
                          <TableCell>
                            <p>{getRuleChangesString(change)}</p>
                          </TableCell>
                          <TableCell>
                            <RuleStateIcon state={change.jsState} />
                          </TableCell>
                          <TableCell>
                            <RuleStateIcon state={change.tsState} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </Fragment>
          ))}
        </div>
        <Pager href={pageConfig.href} />
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <TOC toc={toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default ChangelogPage;
