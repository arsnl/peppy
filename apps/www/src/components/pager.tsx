import Link from "next/link";
import { Icon } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import type { Doc } from "contentlayer/generated";
import type { NavItem } from "@/types/nav";

type DocsPagerProps = {
  doc: Doc;
};

export const DocsPager = ({ doc }: DocsPagerProps) => {
  const pager = getPagerForDoc(doc);

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

export const getPagerForDoc = (doc: Doc) => {
  const flattenedLinks = [null, ...flatten(navConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
};

export const flatten = (links: NavItem[]): NavItem[] =>
  links
    .reduce<NavItem[]>(
      (flat, link) =>
        flat.concat(link.items?.length ? flatten(link.items) : link),
      [],
    )
    .filter((link) => !link?.disabled && !link?.external);
