import "server-only";
import React from "react";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link";
import { sidebarNavConfig } from "@/lib/nav/nav.config";
import { getBreadcrumbNavItems } from "@/lib/nav/nav.util";
import { cn } from "@/lib/utils";

export type BreadcrumbProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  href: string;
  title: string;
};

export const Breadcrumb = ({
  href,
  title,
  className,
  ...props
}: BreadcrumbProps) => {
  const breadcrumbNavItems = getBreadcrumbNavItems({
    navItems: sidebarNavConfig,
    pathname: href,
  });
  const parentNavItems = breadcrumbNavItems.filter(
    (item) => item.href !== href,
  );
  const currentNavItem = breadcrumbNavItems.filter(
    (item) => item.href === href,
  )?.[0];

  return (
    <div
      className={cn(
        "mb-4 flex items-center space-x-1 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {parentNavItems.map((item) => (
        <React.Fragment key={item.href}>
          <Link href={item.href || ""} className="truncate">
            {item.breadcrumbTitle || item.title}
          </Link>
          <Icon icon="chevron-right" className="h-4 w-4" />
        </React.Fragment>
      ))}
      <div className="font-medium text-foreground">
        {currentNavItem?.breadcrumbTitle || title}
      </div>
    </div>
  );
};
