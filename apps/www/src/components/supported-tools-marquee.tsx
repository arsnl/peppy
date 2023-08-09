import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  type SupportedToolKey,
  supportedToolsConfig,
} from "@/config/supported-tools";
import { cn } from "@/lib/utils";

const Logo = ({
  toolKey,
  theme,
}: {
  toolKey: SupportedToolKey;
  theme: "dark" | "light";
}) => {
  const { logoFilename, name } = supportedToolsConfig[toolKey];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-12 cursor-pointer md:w-16">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={`/assets/supported-tools-logos/${theme}/${logoFilename}`}
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
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export type SupportedToolsMarqueeProps = {
  tools: SupportedToolKey[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export const SupportedToolsMarquee = ({
  tools,
  className,
  ...props
}: SupportedToolsMarqueeProps) => {
  const showcaseDark: JSX.Element[] = [];
  const showcaseLight: JSX.Element[] = [];

  tools.forEach((toolKey) => {
    showcaseDark.push(
      <li key={`${toolKey}-dark`} className="hidden px-4 dark:block">
        <Logo toolKey={toolKey} theme="dark" />
      </li>,
    );
    showcaseLight.push(
      <li key={`${toolKey}-light`} className="block px-4 dark:hidden">
        <Logo toolKey={toolKey} theme="light" />
      </li>,
    );
  });

  return (
    <TooltipProvider>
      <div
        role="presentation"
        aria-hidden
        className={cn("w-full py-16", className)}
        {...props}
      >
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground md:mb-8">
          Play well with
        </p>
        <div className="w-full md:mx-auto md:w-10/12">
          <div className="after:fade-to-r before:fade-to-l relative w-full">
            <div className="flex max-w-full overflow-x-clip whitespace-nowrap">
              <div className="group relative">
                <ul className="flex group-hover:paused motion-safe:animate-marquee-head">
                  {showcaseDark}
                  {showcaseDark}
                  {showcaseLight}
                  {showcaseLight}
                </ul>
                <ul className="absolute top-0 flex group-hover:paused motion-safe:animate-marquee-tail">
                  {showcaseDark}
                  {showcaseDark}
                  {showcaseLight}
                  {showcaseLight}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground md:mt-8">
          &#8230; and more to come
        </p>
      </div>
    </TooltipProvider>
  );
};
