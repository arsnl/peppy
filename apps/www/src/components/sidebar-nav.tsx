"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getClosestNavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

type _SidebarNavItemsProps = {
  items: NavItem[];
  closestHref: string | null;
};

const _SidebarNavItems = ({ items, closestHref }: _SidebarNavItemsProps) =>
  items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              item.href === closestHref
                ? "font-medium text-foreground"
                : "text-muted-foreground",
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;

export type SidebarNavProps = {
  navConfig: NavItem[];
};

export const SidebarNav = ({ navConfig }: SidebarNavProps) => {
  const pathname = usePathname();
  const closestNavtItem = getClosestNavItem({ pathname, navItems: navConfig });
  const closestHref = closestNavtItem?.href ?? null;

  return navConfig.length ? (
    <div className="w-full">
      {navConfig.map((navItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {navItem.title}
          </h4>
          {navItem?.items?.length && (
            <_SidebarNavItems items={navItem.items} closestHref={closestHref} />
          )}
        </div>
      ))}
    </div>
  ) : null;
};
