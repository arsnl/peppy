import "@/styles/mdx.css";
import { allESLintConfigs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { Icon } from "@/components/icon";
import { Mdx } from "@/components/mdx-components";
import { Pager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { getTableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

type ESLintConfigPageProps = {
  params: {
    configName: string;
  };
};

const getESLintConfigFromParams = async ({ params }: ESLintConfigPageProps) => {
  const configName = params.configName || "";
  const eslintConfig = allESLintConfigs.find(
    ({ nameKey }) => nameKey === configName,
  );

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
      url: eslintConfig.slug,
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
> =>
  allESLintConfigs.map((eslintConfig) => ({
    configName: eslintConfig.nameKey,
  }));

const ESLintConfigPage = async ({ params }: ESLintConfigPageProps) => {
  const eslintConfig = await getESLintConfigFromParams({ params });

  if (!eslintConfig) {
    notFound();
  }

  const toc = await getTableOfContents(eslintConfig.body.raw);

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
