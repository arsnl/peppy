import "server-only";
import { getESlintConfigs } from "@/lib/eslint-config/eslint-config.content";
import { type NavItem } from "@/lib/nav/nav.type";

export const mainNavConfig: NavItem[] = [
  {
    title: "Docs",
    href: "/docs",
    items: [],
  },
  {
    title: "Configurations",
    href: "/docs/configurations",
    items: [],
  },
];

const eslintConfigNavItems = getESlintConfigs().map((config) => ({
  title: config.name,
  href: config.href,
  items: [],
}));

export const sidebarNavConfig: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Quickstart",
        breadcrumbTitle: "Docs",
        href: "/docs",
        items: [],
      },
      {
        title: "Manual installation",
        href: "/docs/installation",
        items: [],
      },
      {
        title: "CLI",
        href: "/docs/cli",
        items: [],
      },
    ],
  },
  {
    title: "Configurations",
    items: [
      {
        title: "Overview",
        breadcrumbTitle: "Configurations",
        href: "/docs/configurations",
        items: [],
      },
      ...eslintConfigNavItems,
    ],
  },
  {
    title: "Reference",
    items: [
      {
        title: "Versioning",
        href: "/docs/versioning",
        items: [],
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
        items: [],
      },
      {
        title: "About",
        href: "/docs/about",
        items: [],
      },
    ],
  },
];
