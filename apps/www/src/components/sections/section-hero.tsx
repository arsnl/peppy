import Image from "next/image";
import Link from "next/link";
import { CopyCodeButton } from "@/components/copy-button";
import { Heading, HeadingSubtext, HeadingTitle } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const SectionHero = () => (
  <Section className="flex flex-col items-center text-center">
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
        Hassle-free ESLint configurations for peppier development
      </HeadingTitle>
      <HeadingSubtext>
        Collection of ESLint configurations with DX in mind that make your code
        impeccable, readable, and harmonious.
      </HeadingSubtext>
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
        <Icon icon="github" className="mr-2 h-4 w-4" />
        GitHub
      </Link>
    </div>

    <div className="flex flex-col items-center pb-8 md:pb-10">
      <CopyCodeButton
        className="border-gradient"
        value="npx peppy@latest init"
      />
    </div>
  </Section>
);
