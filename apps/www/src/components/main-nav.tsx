"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLogo } from "@/components/icon-logo";
import { type NavItem } from "@/lib/nav/nav.type";
import { getClosestNavItem } from "@/lib/nav/nav.util";
import { siteConfig } from "@/lib/site/site.config";
import { cn } from "@/lib/utils";

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
        <IconLogo icon="peppy" className="h-6 w-6" />
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
