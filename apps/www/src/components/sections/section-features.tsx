import {
  GemIcon,
  LayersIcon,
  type LucideIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";
import { Heading, HeadingSubtext, HeadingTitle } from "@/components/heading";
import { Section, type SectionProps } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Feature = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const features = [
  {
    id: "modern",
    title: "Modern and improved",
    description:
      "Peppy upgrades Airbnb's config with TypeScript, Prettier and modern ES support.",
    Icon: SparklesIcon,
  },
  {
    id: "versatile",
    title: "Versatile configurations",
    description:
      "React, Next, Jest, Tailwind CSS and more. Peppy's got your back.",
    Icon: LayersIcon,
  },
  {
    id: "lean",
    title: "Lean and powerful",
    description:
      "Comprehensive config without the bloated package.json. Small footprint, big impact.",
    Icon: ZapIcon,
  },
  {
    id: "cli",
    title: "Instant setup",
    description:
      "Breezy auto-installer gets you coding without delays or frustrations.",
    Icon: Wand2Icon,
  },
  {
    id: "prettier",
    title: "Code quality and beauty",
    description:
      "Peppy + Prettier ensure pristine code formatting and quality without the conflicts.",
    Icon: GemIcon,
  },
  {
    id: "typescript",
    title: "TypeScript made easy",
    description:
      "Seamless TypeScript support without extra plugins or setups needed. Just code.",
    Icon: ShieldCheckIcon,
  },
] satisfies Feature[];

export type SectionFeaturesProps = SectionProps;

export const SectionFeatures = (props: SectionFeaturesProps) => (
  <Section {...props}>
    <Heading direction="center">
      <HeadingTitle>Why Peppy?</HeadingTitle>
      <HeadingSubtext>
        Peppy boosts your development and simplifies setup for improved code
        quality and less hassle.
      </HeadingSubtext>
    </Heading>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(({ id, title, description, Icon }) => (
        <div key={id} className="flex flex-col">
          <div className="border-gradient relative z-10 -mb-12 h-24 w-24 shrink-0 self-center rounded-4xl p-2">
            <div className="border-glass bg-glass flex h-full w-full items-center justify-center rounded-3xl">
              <Icon className="h-8 w-8" />
            </div>
          </div>
          <Card className="border-glass bg-glass rounded-2xl p-3 pt-10">
            <CardHeader className="pb-[0.5em]">
              <CardTitle className="text-base md:text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>{description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </Section>
);
