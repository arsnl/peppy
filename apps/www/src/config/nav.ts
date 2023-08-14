import type { NavItem } from "@/types/nav";

interface NavConfig {
  sidebarNav: NavItem[];
}

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
        {
          title: "Base",
          href: "/docs/configurations/base",
          items: [],
        },
        {
          title: "React",
          href: "/docs/configurations/react",
          items: [],
        },
        {
          title: "Next",
          href: "/docs/configurations/next",
          items: [],
        },
        {
          title: "Jest",
          href: "/docs/configurations/jest",
          items: [],
        },
        {
          title: "Tailwind CSS",
          href: "/docs/configurations/tailwindcss",
          items: [],
        },
        {
          title: "Prettier",
          href: "/docs/configurations/prettier",
          items: [],
        },
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
