import { type Doc, type ESLintConfig } from "contentlayer/generated";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import { sidebarNavConfig } from "@/config/nav";
import { getFlattenNavItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

type Document = Doc | ESLintConfig;

export type PagerProps = {
  doc: Document;
};

export const Pager = ({ doc }: PagerProps) => {
  const pager = getPager(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <Icon icon="chevron-right" className="mr-2 h-4 w-4 rotate-180" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <Icon icon="chevron-right" className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export const getPager = (doc: Document) => {
  const flattenedLinks = getFlattenNavItems(sidebarNavConfig).filter(
    (link) => !!link.href && !link?.disabled && !link?.external,
  );
  const activeIndex = flattenedLinks.findIndex(({ href }) => doc.href === href);
  const linksBeforeActive = flattenedLinks.slice(0, activeIndex);
  const linksAfterActive = flattenedLinks.slice(activeIndex + 1);
  const prev = linksBeforeActive.slice(-1)?.[0] || null;
  const next = linksAfterActive[0] || null;

  return { prev, next };
};
