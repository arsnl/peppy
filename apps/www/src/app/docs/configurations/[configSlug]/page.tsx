import "@/styles/mdx.css";
import { allESLintConfigs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Icon } from "@/components/icon";
import { Mdx, MdxComponents } from "@/components/mdx";
import { Pager } from "@/components/pager";
import { Rules } from "@/components/rules";
import { DashboardTableOfContents } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
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
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">Docs</div>
          <Icon icon="chevron-right" className="h-4 w-4" />
          <div className="font-medium text-foreground">{eslintConfig.name}</div>
        </div>
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
          <MdxComponents.H2 id="rules">Rules</MdxComponents.H2>
          <Rules configKey={eslintConfig.key} />
        </div>
        <Pager doc={eslintConfig} />
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
