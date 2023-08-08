export const siteConfig = {
  url: process.env.NEXT_PUBLIC_APP_URL || "",
  name: "Peppy",
  ogImage: "/og.jpg",
  description: "Brilliant ESLint configurations for happier developers.",
  links: {
    arsnl: "https://www.arsnl.dev",
    github: "https://github.com/arsnl/peppy",
  },
};

export type SiteConfig = typeof siteConfig;
