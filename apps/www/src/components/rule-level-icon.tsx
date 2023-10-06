import { type RuleVersion } from "contentlayer/generated";
import {
  type IconProps,
  ShieldIcon,
  ShieldSlashIcon,
  ShieldStarIcon,
  ShieldWarningIcon,
} from "@/components/icon";
import { cn } from "@/lib/utils";

export type RuleLevelIconProps = IconProps & {
  level: Required<RuleVersion>["jsLevel" | "tsLevel"];
};

export const RuleLevelIcon = ({
  level,
  className,
  ...props
}: RuleLevelIconProps) => {
  const Icon =
    level === "off"
      ? ShieldSlashIcon
      : level === "warn"
      ? ShieldWarningIcon
      : level === "error"
      ? ShieldStarIcon
      : ShieldIcon;

  return (
    <Icon
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
};
