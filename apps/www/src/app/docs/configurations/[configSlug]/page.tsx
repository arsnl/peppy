import "@/styles/mdx.css";
import { allESLintConfigs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Mdx } from "@/components/mdx";
import { H2 } from "@/components/mdx/h2";
import { Pager } from "@/components/pager";
import { Rules } from "@/components/rules";
import { TOC } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/lib/site/site.config";
import { getTableOfContents } from "@/lib/toc/toc.util";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

type ESLintConfigPageProps = {
  params: {
    configSlug: string;
  };
};

const getESLintConfigFromParams = async ({ params }: ESLintConfigPageProps) => {
  const configSlug = decodeURIComponent(params.configSlug || "");
  const eslintConfig = allESLintConfigs.find(({ slug }) => slug === configSlug);

  if (!eslintConfig) {
    return null;
  }

  return eslintConfig;
};

export const generateMetadata = async ({
  params,
}: ESLintConfigPageProps): Promise<Metadata> => {
  const eslintConfig = await getESLintConfigFromParams({ params });

  if (!eslintConfig) {
    return {};
  }

  return {
    title: eslintConfig.name,
    description: eslintConfig.description,
    openGraph: {
      title: eslintConfig.name,
      description: eslintConfig.description,
      type: "article",
      url: eslintConfig.href,
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
      title: eslintConfig.name,
      description: eslintConfig.description,
      images: [siteConfig.ogImage],
      creator: "@im_arsnl",
    },
  };
};

export const generateStaticParams = async (): Promise<
  ESLintConfigPageProps["params"][]
> => allESLintConfigs.map(({ slug: configSlug }) => ({ configSlug }));

const ESLintConfigPage = async ({ params }: ESLintConfigPageProps) => {
  const eslintConfig = await getESLintConfigFromParams({ params });

  if (!eslintConfig) {
    notFound();
  }

  const processedToc = await getTableOfContents(eslintConfig.body.raw);
  const toc = {
    items: [...(processedToc.items || []), { title: "Rules", url: "#rules" }],
  };

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumb href={eslintConfig.href} title={eslintConfig.name} />
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {eslintConfig.name}
          </h1>
          {eslintConfig.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{eslintConfig.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={eslintConfig.body.code} />
          <H2 id="rules">Rules</H2>
          <Rules configKey={eslintConfig.key} />
        </div>
        <Pager href={eslintConfig.href} />
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

export default ESLintConfigPage;
