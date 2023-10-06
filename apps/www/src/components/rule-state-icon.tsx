import { type RuleVersion } from "contentlayer/generated";
import {
  ArrowCircleUpIcon,
  CheckCircleIcon,
  CircleIcon,
  type IconProps,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@/components/icon";
import { cn } from "@/lib/utils";

export type RuleStateIconProps = Omit<IconProps, "icon"> & {
  state: Required<RuleVersion>["jsState" | "tsState"];
};

export const RuleStateIcon = ({
  state,
  className,
  ...props
}: RuleStateIconProps) => {
  const Icon =
    state === "introduced"
      ? PlusCircleIcon
      : state === "removed"
      ? MinusCircleIcon
      : state === "updated"
      ? ArrowCircleUpIcon
      : state === "unchanged"
      ? CheckCircleIcon
      : CircleIcon;

  return (
    <Icon
      className={cn(
        "h-6 w-6",
        {
          "text-green-500": state === "introduced",
          "text-red-500": state === "removed",
          "text-sky-500": state === "updated",
          "text-muted-foreground": state === "none" || state === "unchanged",
        },
        className,
      )}
      {...props}
    />
  );
};
