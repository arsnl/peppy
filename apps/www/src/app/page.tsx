import Image from "next/image";
import Link from "next/link";
import { CopyCodeButton } from "@/components/copy-button";
import {
  Heading,
  HeadingDescription,
  HeadingTitle,
} from "@/components/heading";
import { Icons } from "@/components/icons";
import { SupportedToolsMarquee } from "@/components/supported-tools-marquee";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const HomePage = () => (
  <div className="container relative">
    <section className="mx-auto flex flex-col items-center pb-8 text-center">
      <Heading gap="tight">
        <div className="relative aspect-video w-8/12 sm:w-6/12">
          <Image
            src="/assets/logos/logotype.svg"
            alt="Peppy Logo"
            fill
            priority
          />
        </div>
        <HeadingTitle tag="h1">
          Hassle-free ESLint configurations for peppier developers
        </HeadingTitle>
        <HeadingDescription>
          Collection of ESLint configurations with DX in mind that make your
          code impeccable, readable, and harmonious.
        </HeadingDescription>
      </Heading>
      <div className="flex items-center space-x-4 pb-8 pt-4 md:pb-10">
        <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <Icons.GitHub className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </div>

      <div className="flex flex-col items-center pb-8 md:pb-10">
        <CopyCodeButton value="npx peppy@latest init" />
      </div>

      <SupportedToolsMarquee
        className="max-w-5xl"
        tools={[
          "jest",
          "nextjs",
          "nodejs",
          "typescript",
          "prettier",
          "react",
          "tailwindcss",
        ]}
      />
    </section>

    <section className="col-span-12 grid grid-cols-12 items-start gap-4 overflow-x-hidden lg:items-center">
      <div className="col-span-full lg:col-end-7">
        <Heading direction="left">
          <HeadingTitle>Typesafe From The Start</HeadingTitle>
        </Heading>

        <p className="mb-4 text-base md:text-xl">
          We made create-t3-app to do one thing: Streamline the setup of
          typesafe Next.js apps WITHOUT compromising modularity.
        </p>
        <p className="mb-4 text-base md:text-xl ">
          After countless projects and many years on this tech, we have lots of
          opinions and insights. We&apos;ve done our best to encode them into
          this CLI.
        </p>
        <p className="mb-4 text-base md:text-xl">
          This is NOT an all-inclusive template. We expect you to bring your own
          libraries. Check out our other recommendations for things like state
          management and deployment.{" "}
        </p>
      </div>

      <div className="after:fade-to-r relative col-span-full hidden lg:col-start-8 lg:block">
        <div className="w-[50vw] space-y-8 rounded-2xl border p-8">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full border" />
            <div className="h-4 w-4 rounded-full border" />
            <div className="h-4 w-4 rounded-full border" />
          </div>
          <div className="pl-7">
            <div aria-hidden="true" className="pb-2">
              <pre>
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch delete beam
                fix-timestamps
                <br />
                <span className="text-brand">?</span>{" "}
                <span className="font-semibold">
                  <span className="text-muted-foreground">
                    Please type{" "}
                    <span className="font-semibold">beam/fix-timestamps</span>{" "}
                    to confirm:
                  </span>
                </span>{" "}
                <span className="text-primary">beam/fix-timestamps</span>
                <br />
                <span className="text-muted-foreground">
                  Branch <span className="font-semibold">fix-timestamps</span>{" "}
                  was successfully deleted from{/* */}{" "}
                  <span className="font-semibold">beam</span>.
                </span>
                <br />
                <br />
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch create beam
                add-upvotes
                <br />
                <span className="text-muted-foreground">
                  Branch <span className="font-semibold">add-upvotes</span> was
                  successfully created.
                </span>
                <br />
                <br />
                <span className="text-brand">$</span>{" "}
                <span className="text-brand">pscale</span> branch list beam
                <br />
                <span className="text-muted-foreground">
                  NAME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;PARENT
                  &nbsp; &nbsp; PRODUCTION &nbsp; CREATED AT
                  <br />
                  <span className="text-muted-foreground">
                    ----------------- ---------- ------------ ---------------
                  </span>
                  <br />
                  main &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;n/a
                  &nbsp; &nbsp; &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;4 months ago
                  <br />
                  add-upvotes &nbsp; &nbsp; &nbsp; main &nbsp; &nbsp; &nbsp; No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 minute ago
                  <br />
                  user-index &nbsp; &nbsp; &nbsp; &nbsp;main &nbsp; &nbsp;
                  &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 days ago
                  <br />
                  revert-comments &nbsp; main &nbsp; &nbsp; &nbsp; No &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; 8 days ago
                  <br />
                  more-timestamps &nbsp; main &nbsp; &nbsp; &nbsp; No &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; 2 weeks ago
                  <br />
                  staging &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n/a &nbsp; &nbsp;
                  &nbsp; &nbsp;Yes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 months
                  ago
                  <br />
                  perf-testing &nbsp; &nbsp; &nbsp;staging &nbsp; &nbsp;No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4 days ago
                  <br />
                  drop-unreads &nbsp; &nbsp; &nbsp;staging &nbsp; &nbsp;No
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 month ago
                </span>
              </pre>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        className="flex flex-col items-center gap-5 md:gap-6"
        style={{ opacity: 1, transform: "none" }}
      >
        <Heading direction="center">
          <HeadingTitle>Why Peppy?</HeadingTitle>
          <HeadingDescription>
            Turborepo reimagines build system techniques used by Facebook and
            Google to remove maintenance burden and overhead.
          </HeadingDescription>
        </Heading>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Incremental by design",
            description:
              "Building once is enough work—once Turbopack performs a task, it never does it again.",
          },
          {
            title: "Ecosystem-friendly",
            description:
              "Get out-of-the-box support for TypeScript, JSX, CSS, CSS Modules, WebAssembly, and more.",
          },
          {
            title: "Lightning fast HMR",
            description:
              "Hot Module Replacement (HMR) stays fast regardless of the size of your app.",
          },
          {
            title: "React Server Components",
            description:
              "Get native support for React Server Components when using Turbopack.",
          },
          {
            title: "Simultaneous Multiple Env Targets",
            description:
              "Build and optimize for multiple environments together (Browser, Server, Edge, SSR, React Server Components).",
          },
          {
            title: "Next.js support",
            description:
              "Turbopack will also power Next.js production builds, both locally and in the cloud.",
          },
        ].map(({ title, description }) => (
          <Card className="p-3">
            <CardHeader className="pb-[0.5em]">
              <Image
                aria-hidden="true"
                alt=""
                width={64}
                height={64}
                className="hidden dark:block"
                src="https://turbo.build/_next/static/media/bars-dark.1ff18ac9.svg"
              />
              <Image
                aria-hidden="true"
                alt=""
                width={64}
                height={64}
                className="block dark:hidden"
                src="https://turbo.build/_next/static/media/bars-light.df490fb6.svg"
              />
              <CardTitle className="pt-3 text-base md:text-lg">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
