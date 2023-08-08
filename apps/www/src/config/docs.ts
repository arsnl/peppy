import type { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Configurations",
      href: "/docs/configurations",
    },
    {
      title: "GitHub",
      href: "https://github.com/arsnl/peppy",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
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
    {
      title: "Configurations",
      items: [
        {
          title: "Base",
          href: "/docs/configurations",
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
  ],
};
