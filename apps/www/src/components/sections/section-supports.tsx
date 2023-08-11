import Image from "next/image";
import { Heading, HeadingSubtext, HeadingTitle } from "@/components/heading";
import { Section } from "@/components/section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  type SupportedToolKey,
  supportedToolsConfig,
} from "@/config/supported-tools";
import { cn } from "@/lib/utils";

type _LogoProps = {
  toolKey: SupportedToolKey;
  theme: "dark" | "light";
};

const _Logo = ({ toolKey, theme }: _LogoProps) => {
  const { logoFilename, name } = supportedToolsConfig[toolKey];

  return (
    <div className="border-glass h-32 w-32 select-none rounded-4xl p-2">
      <div className="border-glass bg-glass h-full w-full rounded-3xl">
        <div className="w-full">
          <AspectRatio
            ratio={1 / 1}
            className="flex items-center justify-center"
          >
            <Image
              src={`/assets/supports/${theme}/${logoFilename}`}
              alt={`${name}'s Logo`}
              width={64}
              height={64}
              priority
              className={cn({
                "hidden dark:block": theme === "dark",
                "dark:hidden block": theme !== "dark",
              })}
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

type _MarqueeProps = {
  tools: SupportedToolKey[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

const _Marquee = ({ tools, className, ...props }: _MarqueeProps) => {
  const showcaseDark: JSX.Element[] = [];
  const showcaseLight: JSX.Element[] = [];

  tools.forEach((toolKey) => {
    showcaseDark.push(
      <li key={`${toolKey}-dark`} className="hidden px-4 dark:block">
        <_Logo toolKey={toolKey} theme="dark" />
      </li>,
    );
    showcaseLight.push(
      <li key={`${toolKey}-light`} className="block px-4 dark:hidden">
        <_Logo toolKey={toolKey} theme="light" />
      </li>,
    );
  });

  return (
    <div
      role="presentation"
      aria-hidden
      className={cn("w-full", className)}
      {...props}
    >
      <div className="after:fade-to-r before:fade-to-l relative w-full">
        <div className="flex overflow-x-clip whitespace-nowrap">
          <div className="relative">
            <ul className="flex motion-safe:animate-marquee-head">
              {showcaseDark}
              {showcaseDark}
              {showcaseLight}
              {showcaseLight}
            </ul>
            <ul className="absolute top-0 flex motion-safe:animate-marquee-tail">
              {showcaseDark}
              {showcaseDark}
              {showcaseLight}
              {showcaseLight}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionSupports = () => (
  <Section>
    <Heading direction="center">
      <HeadingTitle>Plays well with others</HeadingTitle>
      <HeadingSubtext>
        Effortlessly supports your favorite tools and frameworks, including
        TypeScript and Prettier, out of the box.
      </HeadingSubtext>
    </Heading>
    <_Marquee
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
  </Section>
);
