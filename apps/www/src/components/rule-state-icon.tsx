import { type RuleVersion } from "contentlayer/generated";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { IconProps } from "@/components/icon";

export type RuleStateIconProps = Omit<IconProps, "icon"> & {
  state: Required<RuleVersion>["jsState" | "tsState"];
};

export const RuleStateIcon = ({
  state,
  className,
  ...props
}: RuleStateIconProps) => (
  <Icon
    icon={
      state === "new"
        ? "plus-circle"
        : state === "removed"
        ? "minus-circle"
        : state === "updated"
        ? "arrow-up-circle"
        : state === "unchanged"
        ? "circle-equal"
        : "circle"
    }
    className={cn(
      "h-6 w-6",
      {
        "text-green-500": state === "new",
        "text-red-500": state === "removed",
        "text-sky-500": state === "updated",
        "text-muted-foreground": state === "none" || state === "unchanged",
      },
      className,
    )}
    {...props}
  />
);
