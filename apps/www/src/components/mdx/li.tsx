import { cn } from "@/lib/utils";

export const Li = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <li className={cn("mt-2", className)} {...props} />
);
