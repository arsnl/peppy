import Image from "next/image";
import Link from "next/link";
import { CopyCodeButton } from "@/components/copy-button";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const HomePage = () => (
  <div className="container relative">
    <PageHeader className="mx-auto flex items-center pb-8 text-center">
      <div className="relative my-5 aspect-video w-8/12 sm:w-6/12">
        <Image
          src="/assets/logo-with-glow.svg"
          alt="Peppy Logo"
          fill
          priority
        />
      </div>

      <PageHeaderHeading>
        Hassle-free ESLint configurations for peppier developers
      </PageHeaderHeading>
      <PageHeaderDescription>
        Collection of ESLint configurations with DX in mind that make your code
        impeccable, readable, and harmonious.
      </PageHeaderDescription>
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
    </PageHeader>

    <section className="col-span-12 grid grid-cols-12 items-start gap-4 overflow-x-hidden lg:items-center">
      <div className="col-span-full lg:col-end-7">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Typesafe From The Start
        </h2>
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

      <div className="relative col-span-full hidden after:absolute after:right-0 after:top-0 after:h-full after:w-8 after:bg-gradient-to-r after:from-transparent after:to-background lg:col-start-8 lg:block">
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

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default HomePage;
