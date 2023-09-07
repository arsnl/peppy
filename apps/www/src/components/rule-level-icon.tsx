import { type RuleVersion } from "contentlayer/generated";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { IconProps } from "@/components/icon";

export type RuleLevelIconProps = Omit<IconProps, "icon"> & {
  level: Required<RuleVersion>["jsLevel" | "tsLevel"];
};

export const RuleLevelIcon = ({
  level,
  className,
  ...props
}: RuleLevelIconProps) => (
  <Icon
    icon={
      level === "off"
        ? "shield-ban"
        : level === "warn"
        ? "shield-alert"
        : level === "error"
        ? "shield-x"
        : "shield"
    }
    className={cn(
      "h-6 w-6",
      {
        "text-yellow-500": level === "warn",
        "text-red-500": level === "error",
        "text-muted-foreground": level === "none" || level === "off",
      },
      className,
    )}
    {...props}
  />
);
