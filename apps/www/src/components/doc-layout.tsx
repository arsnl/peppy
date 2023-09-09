import "server-only";
import { type MDX } from "contentlayer/core";
import Balancer from "react-wrap-balancer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Mdx } from "@/components/mdx";
import { Pager } from "@/components/pager";
import { TOC } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type TocItems } from "@/lib/toc/toc.type";
import { cn } from "@/lib/utils";

export type DocLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  breadcrumbTitle?: string;
  description?: string | MDX;
  href: string;
  toc?: TocItems;
  pager?: boolean | React.ReactNode;
};

export const DocLayout = async ({
  title,
  breadcrumbTitle,
  description,
  href,
  toc,
  pager = true,
  children,
  className,
  ...props
}: DocLayoutProps) => {
  const descriptionJsx =
    typeof description === "string" ? (
      <p className="text-lg text-muted-foreground">
        <Balancer>{description}</Balancer>
      </p>
    ) : typeof description?.code === "string" ? (
      <Mdx className="text-lg text-muted-foreground" code={description.code} />
    ) : null;

  const pagerJsx = !pager ? null : pager === true ? (
    <Pager href={href} />
  ) : (
    pager
  );

  return (
    <main
      className={cn(
        "relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full min-w-0">
        <Breadcrumb href={href} title={breadcrumbTitle || title} />
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {title}
          </h1>
          {descriptionJsx}
        </div>
        {children}
        {pagerJsx}
      </div>

      {toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <TOC toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
};
