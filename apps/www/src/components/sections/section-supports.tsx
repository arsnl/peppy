import { Heading, HeadingSubtext, HeadingTitle } from "@/components/heading";
import { Icon, type IconName } from "@/components/icon";
import { Section } from "@/components/section";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type SupportedTool = { name: string; icon: IconName };

const SUPPORTED_TOOLS: SupportedTool[] = [
  { name: "Jest", icon: "jest" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Peppy", icon: "peppy" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Prettier", icon: "prettier" },
  { name: "TypeScript", icon: "typescript" },
];

export const SectionSupports = () => {
  const showcase = SUPPORTED_TOOLS.map(({ icon }) => (
    <li key={icon} className="px-4">
      <div className="border-glass h-32 w-32 select-none rounded-4xl p-2">
        <div className="border-glass bg-glass h-full w-full rounded-3xl">
          <div className="w-full">
            <AspectRatio
              ratio={1 / 1}
              className="flex items-center justify-center"
            >
              <Icon icon={icon} className="h-16 w-16" />
            </AspectRatio>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <Section>
      <Heading direction="center">
        <HeadingTitle>Plays well with others</HeadingTitle>
        <HeadingSubtext>
          Effortlessly supports your favorite tools and frameworks, including
          TypeScript and Prettier, out of the box.
        </HeadingSubtext>
      </Heading>
      <div role="presentation" aria-hidden className="w-full">
        <div className="after:fade-to-r before:fade-to-l relative w-full">
          <div className="flex overflow-x-clip whitespace-nowrap">
            <div className="relative">
              <ul className="flex motion-safe:animate-marquee-head">
                {showcase}
                {showcase}
              </ul>
              <ul className="absolute top-0 flex motion-safe:animate-marquee-tail">
                {showcase}
                {showcase}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
