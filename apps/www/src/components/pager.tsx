import Link from "next/link";
import { CaretRightIcon } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import { sidebarNavConfig } from "@/lib/nav/nav.config";
import { getFlattenNavItems } from "@/lib/nav/nav.util";
import { cn } from "@/lib/utils";

export type PagerProps = { href: string };

export const Pager = ({ href }: PagerProps) => {
  const pager = getPager(href);

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
          <CaretRightIcon className="mr-2 h-4 w-4 rotate-180" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <CaretRightIcon className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export const getPager = (href: string) => {
  const flattenedLinks = getFlattenNavItems(sidebarNavConfig).filter(
    (link) => !!link.href && !link?.disabled && !link?.external,
  );
  const activeIndex = flattenedLinks.findIndex(
    ({ href: linkHref }) => linkHref === href,
  );
  const linksBeforeActive = flattenedLinks.slice(0, activeIndex);
  const linksAfterActive = flattenedLinks.slice(activeIndex + 1);
  const prev = linksBeforeActive.slice(-1)?.[0] || null;
  const next = linksAfterActive[0] || null;

  return { prev, next };
};
