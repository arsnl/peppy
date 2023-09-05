import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link";
import { Mdx } from "@/components/mdx";
import { RuleStateBadge } from "@/components/rule-state-badge";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getESlintConfigs } from "@/config/eslint-config";
import { getRuleVersions } from "@/config/rule-version";
import { siteConfig } from "@/config/site";
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
    description: rule.descriptionString,
    openGraph: {
      title: rule.ruleKey,
      description: rule.descriptionString,
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
      description: rule.descriptionString,
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

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumb href={rule.href} title={rule.ruleKey} />
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {rule.ruleKey}
          </h1>
          <Mdx
            code={rule.description.code}
            className="text-lg text-muted-foreground"
          />
        </div>

        <div className="flex items-center space-x-2 pt-4">
          <RuleStateBadge state={rule.state} stateLabel={rule.stateLabel} />
          {rule.docUrl && (
            <Link
              href={rule.docUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                badgeVariants({ variant: "outline" }),
                "flex gap-2 rounded-full bg-background p-1 px-2 text-xs hover:bg-muted hover:no-underline",
              )}
              alt-text={`Check the documentation of the rule ${rule.ruleKey} on the official plugin documentation`}
            >
              <Icon icon="eslint" className="h-3 w-3" />
              API Reference
            </Link>
          )}
        </div>

        <Mdx code={rule.body.code} className="pb-12 pt-8" />
        <div className="flex flex-row items-center justify-between">
          <Link
            href={eslintConfig.href}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hover:no-underline",
            )}
          >
            <Icon icon="chevron-right" className="mr-2 h-4 w-4 rotate-180" />
            {`${eslintConfig.name}`}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ESLintConfigPage;
