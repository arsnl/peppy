import "server-only";
import { cn } from "@/lib/utils";

export type ChangelogProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

export const Changelog = ({ className, ...props }: ChangelogProps) => {
  const test = "";

  return <div className={cn("relative", className)} {...props} />;
};
