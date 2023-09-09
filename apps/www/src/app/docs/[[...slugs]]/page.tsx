import "@/styles/mdx.css";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { DocLayout } from "@/components/doc-layout";
import { Mdx } from "@/components/mdx";
import { siteConfig } from "@/lib/site/site.config";
import { getTableOfContents } from "@/lib/toc/toc.util";
import type { Metadata } from "next";

type DocPageProps = {
  params: {
    slugs: string[];
  };
};

const getDocFromParams = async ({ params }: DocPageProps) => {
  const keyParam = params.slugs?.join("/") || "";
  const doc = allDocs.find(({ key }) => key === keyParam);

  if (!doc) {
    return null;
  }

  return doc;
};

export const generateMetadata = async ({
  params,
}: DocPageProps): Promise<Metadata> => {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: doc.href,
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
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@im_arsnl",
    },
  };
};

export const generateStaticParams = async (): Promise<
  DocPageProps["params"][]
> =>
  allDocs.map((doc) => ({
    slugs: doc.key.split("/"),
  }));

const DocPage = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <DocLayout
      href={doc.href}
      title={doc.title}
      description={doc.description}
      toc={doc.toc ? toc : undefined}
    >
      <Mdx code={doc.body.code} className="pb-12 pt-8" />
    </DocLayout>
  );
};

export default DocPage;
