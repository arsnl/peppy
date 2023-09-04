import { type RuleVersion } from "contentlayer/generated";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/components/ui/badge";

export type RuleStateBadgeProps = Omit<BadgeProps, "children"> &
  Pick<RuleVersion, "state" | "stateLabel">;

export const RuleStateBadge = ({
  state,
  stateLabel,
  className,
  ...props
}: RuleStateBadgeProps) =>
  state && state !== "unchanged" ? (
    <Badge
      variant="outline"
      className={cn(
        "flex gap-2 rounded-full bg-background p-1 px-2 text-xs",
        className,
      )}
      {...props}
    >
      <span
        className={cn("block h-2 w-2 rounded-full", {
          "bg-green-500": state === "new",
          "bg-red-500": state === "removed",
          "bg-sky-500": state === "updated",
        })}
      />
      {stateLabel}
    </Badge>
  ) : null;
