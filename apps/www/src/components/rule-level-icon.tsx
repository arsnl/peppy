import { type HTMLAttributes } from "react";
import { type RuleVersion } from "contentlayer/generated";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type RuleLevelIconProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  level?: Required<RuleVersion>["jsLevel" | "tsLevel"];
  ts?: boolean;
};

export const RuleLevelIcon = ({
  level,
  ts,
  className,
  ...props
}: RuleLevelIconProps) =>
  level ? (
    <div className={cn("relative", className)} {...props}>
      <Icon
        icon={ts ? "typescript-outline" : "javascript-outline"}
        className="h-6 w-6"
      />
      <span
        className={cn(
          "absolute right-0 top-0 block h-2 w-2 -translate-y-1/3 translate-x-1/3 rounded-full",
          {
            "bg-muted-foreground": level === "off",
            "bg-yellow-500": level === "warn",
            "bg-red-500": level === "error",
          },
        )}
      />
    </div>
  ) : null;
