import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/doc-layout";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link";
import { Mdx } from "@/components/mdx";
import { getRuleInfoTOC } from "@/components/rule-infos";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getESlintConfigs } from "@/lib/eslint-config/eslint-config.content";
import { getRuleVersions } from "@/lib/rule-version/rule-version.content";
import { siteConfig } from "@/lib/site/site.config";
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

const RuleVersionPage = async ({ params }: RuleVersionPageProps) => {
  const ruleVersion = await getRuleVersionFromParams({ params });

  if (!ruleVersion) {
    notFound();
  }

  const { rule, eslintConfig } = ruleVersion;

  const pager = (
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
  );

  return (
    <DocLayout
      href={rule.href}
      title={rule.ruleKey}
      description={rule.description}
      toc={getRuleInfoTOC(rule)}
      pager={pager}
    >
      <div className="flex items-center space-x-2 pt-4">
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
    </DocLayout>
  );
};

export default RuleVersionPage;
