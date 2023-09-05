import { CopyButton, CopyNpmCommandButton } from "@/components/copy-button";
import { type Event } from "@/lib/events";
import { cn } from "@/lib/utils";
import { type NpmCommands } from "@/types/unist";

export const Pre = ({
  className,
  __rawString__,
  __npmCommand__,
  __pnpmCommand__,
  __yarnCommand__,
  __withMeta__,
  __src__,
  __event__,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  __rawString__?: string;
  __withMeta__?: boolean;
  __src__?: string;
  __event__?: Event["name"];
} & NpmCommands) => (
  <div className="relative mb-4 mt-6 overflow-hidden rounded-lg border bg-muted/30">
    <pre
      className={cn("max-h-[650px] overflow-x-auto py-4", className)}
      {...props}
    />
    {__rawString__ && !__npmCommand__ && (
      <CopyButton
        value={__rawString__}
        src={__src__}
        event={__event__}
        className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
      />
    )}
    {__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && (
      <CopyNpmCommandButton
        commands={{
          __npmCommand__,
          __pnpmCommand__,
          __yarnCommand__,
        }}
        className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
      />
    )}
  </div>
);
