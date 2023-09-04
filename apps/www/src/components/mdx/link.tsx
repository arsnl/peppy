import OLink from "next/link";
import { cn } from "@/lib/utils";

export const Link = ({
  className,
  ...props
}: React.ComponentProps<typeof OLink>) => (
  <OLink
    className={cn("font-medium underline underline-offset-4", className)}
    {...props}
  />
);
