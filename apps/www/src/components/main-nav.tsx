"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";
import { siteConfig } from "@/config/site";
import { getClosestNavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export type MainNavProps = {
  navConfig: NavItem[];
};

export const MainNav = ({ navConfig = [] }: MainNavProps) => {
  const pathname = usePathname();
  const closestNavtItem = getClosestNavItem({ pathname, navItems: navConfig });
  const closestHref = closestNavtItem?.href ?? null;

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icon icon="peppy" className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navConfig.map(
          (item) =>
            item.href &&
            !item.disabled && (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  item.disabled && "cursor-not-allowed opacity-60",
                  item.href === closestHref
                    ? "text-foreground"
                    : "text-foreground/60",
                )}
                target={item.external ? "_blank" : ""}
                rel={item.external ? "noreferrer" : ""}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </div>
  );
};
