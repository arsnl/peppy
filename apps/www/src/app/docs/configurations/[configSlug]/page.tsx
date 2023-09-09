import "@/styles/mdx.css";
import { allESLintConfigs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/doc-layout";
import { Mdx } from "@/components/mdx";
import { H2 } from "@/components/mdx/h2";
import { Rules } from "@/components/rules";
import { siteConfig } from "@/lib/site/site.config";
import { getTableOfContents } from "@/lib/toc/toc.util";
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

  const computedToc = await getTableOfContents(eslintConfig.body.raw);
  const toc = {
    items: [...(computedToc.items || []), { title: "Rules", url: "#rules" }],
  };

  return (
    <DocLayout
      title={eslintConfig.name}
      href={eslintConfig.href}
      toc={toc}
      description={eslintConfig.description}
    >
      <div className="pb-12 pt-8">
        <Mdx code={eslintConfig.body.code} />
        <H2 id="rules">Rules</H2>
        <Rules configKey={eslintConfig.key} />
      </div>
    </DocLayout>
  );
};

export default ESLintConfigPage;
