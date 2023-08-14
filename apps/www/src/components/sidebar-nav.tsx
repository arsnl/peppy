"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export interface DocsSidebarNavProps {
  items: NavItem[];
}

export const DocsSidebarNav = ({ items }: DocsSidebarNavProps) => {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null;
};

interface DocsSidebarNavItemsProps {
  items: NavItem[];
  pathname: string | null;
}

export const DocsSidebarNavItems = ({
  items,
  pathname,
}: DocsSidebarNavItemsProps) =>
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
              pathname === item.href
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
