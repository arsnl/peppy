import "@/styles/globals.css";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.description}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Peppy",
    "ESLint",
    "Prettier",
    "Typescript",
    "Tailwind",
    "NextJS",
    "Jest",
    "DX",
  ],
  authors: [
    {
      name: "arsnl",
      url: "https://arsnl.dev",
    },
  ],
  creator: "arsnl",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@im_arsnl",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        rel: "icon",
        media: "(prefers-color-scheme:light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        rel: "icon",
        media: "(prefers-color-scheme:dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        rel: "alternate icon",
        media: "(prefers-color-scheme:light)",
      },
      {
        url: "/favicon-dark.ico",
        type: "image/x-icon",
        rel: "alternate icon",
        media: "(prefers-color-scheme:dark)",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: `/manifest.webmanifest`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontMono.variable,
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <TailwindIndicator />
      </ThemeProvider>
      <Analytics />
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
