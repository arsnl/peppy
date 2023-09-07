import { cn } from "@/lib/utils";

export const P = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
);