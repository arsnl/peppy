import "@/styles/mdx.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Icon } from "@/components/icon";
import { Mdx } from "@/components/mdx-components";
import { DashboardTableOfContents } from "@/components/toc";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getESlintConfigs } from "@/config/eslint-config";
import { getRuleVersions } from "@/config/rule-version";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

type RuleVersionPageProps = {
  params: {
    configSlug: string;
    ruleSlug: string;
  };
};

const getRuleVersionFromParams = async ({ params }: RuleVersionPageProps) => {
  const configSlug = decodeURIComponent(params.configSlug || "");
  const ruleSlug = decodeURIComponent(params.ruleSlug || "");
  const ruleVersion = getRuleVersions({ configSlug, ruleSlug })?.[0];
  const eslintConfig = getESlintConfigs({ configSlug })?.[0];

  if (!ruleVersion || !eslintConfig) {
    return null;
  }

  return { rule: ruleVersion, eslintConfig };
};

export const generateMetadata = async ({
  params,
}: RuleVersionPageProps): Promise<Metadata> => {
  const ruleVersion = await getRuleVersionFromParams({ params });

  if (!ruleVersion) {
    return {};
  }

  const { rule } = ruleVersion;

  return {
    title: rule.ruleKey,
    description: rule.description,
    openGraph: {
      title: rule.ruleKey,
      description: rule.description,
      type: "article",
      url: rule.href,
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
      title: rule.ruleKey,
      description: rule.description,
      images: [siteConfig.ogImage],
      creator: "@im_arsnl",
    },
  };
};

export const generateStaticParams = async (): Promise<
  RuleVersionPageProps["params"][]
> =>
  getRuleVersions().map(({ configSlug, slug: ruleSlug }) => ({
    configSlug,
    ruleSlug,
  }));

const ESLintConfigPage = async ({ params }: RuleVersionPageProps) => {
  const ruleVersion = await getRuleVersionFromParams({ params });

  if (!ruleVersion) {
    notFound();
  }

  const { rule, eslintConfig } = ruleVersion;
  const toc = await getTableOfContents(rule.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">Docs</div>
          <Icon icon="chevron-right" className="h-4 w-4" />
          <div className="font-medium text-foreground">{rule.ruleKey}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {rule.ruleKey}
          </h1>
          {rule.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{rule.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={rule.body.code} />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Link
            href={eslintConfig.href}
            className={buttonVariants({ variant: "outline" })}
          >
            <Icon icon="chevron-right" className="mr-2 h-4 w-4 rotate-180" />
            {eslintConfig.name}
          </Link>
        </div>
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <DashboardTableOfContents toc={toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default ESLintConfigPage;
