import "server-only";
import { sortedESLintConfig } from "@/config/eslint-config";
import type { NavItem } from "@/types/nav";

export type NavConfig = {
  sidebarNav: NavItem[];
};

const eslintConfigNavItems = sortedESLintConfig.map((config) => ({
  title: config.name,
  href: config.href,
  items: [],
}));

export const navConfig: NavConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Quickstart",
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
  ],
};
