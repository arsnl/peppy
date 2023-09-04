/* eslint-disable jsx-a11y/anchor-has-content */
import { cn } from "@/lib/utils";

export const A = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cn("font-medium underline underline-offset-4", className)}
    {...props}
  />
);
