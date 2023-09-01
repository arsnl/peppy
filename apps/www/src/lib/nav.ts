import type { NavItem } from "@/types/nav";

export const getFlattenNavItems = (navItems: NavItem[] = []): NavItem[] =>
  navItems.reduce<NavItem[]>(
    (flat, { items, ...link }) =>
      flat.concat([{ ...link }, ...getFlattenNavItems(items)]),
    [],
  );

export const getClosestNavItem = ({
  pathname,
  navItems,
}: {
  pathname: string;
  navItems: NavItem[];
}) => {
  const matchingNavItems = getFlattenNavItems(navItems).filter(
    (navItem): navItem is NavItem & { href: string } =>
      !!navItem?.href && pathname.startsWith(navItem.href),
  );

  return !matchingNavItems.length
    ? null
    : matchingNavItems.reduce((closest, current) =>
        current.href.length > closest.href.length ? current : closest,
      );
};
