import Image from "next/image";
import {
  Heading,
  HeadingDescription,
  HeadingTitle,
} from "@/components/heading";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SectionWhy = () => (
  <Section>
    <Heading direction="center">
      <HeadingTitle>Why Peppy?</HeadingTitle>
      <HeadingDescription>
        Peppy boosts your development and simplifies setup for improved code
        quality and less hassle.
      </HeadingDescription>
    </Heading>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Modern and improved",
          description:
            "Peppy upgrades Airbnb's config with TypeScript, Prettier and modern ES support.",
        },
        {
          title: "Versatile configurations",
          description:
            "React, Next, Jest, Tailwind CSS and more. Peppy's got your back.",
        },
        {
          title: "Lean and powerful",
          description:
            "Comprehensive config without the bloated package.json. Small footprint, big impact.",
        },
        {
          title: "Instant setup",
          description:
            "Breezy auto-installer gets you coding without delays or frustrations.",
        },
        {
          title: "Code quality and beauty",
          description:
            "Peppy + Prettier ensure pristine code formatting and quality without the conflicts.",
        },
        {
          title: "TypeScript made easy",
          description:
            "Seamless TypeScript support without extra plugins or setups needed. Just code.",
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
            <CardTitle className="pt-3 text-base md:text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);
