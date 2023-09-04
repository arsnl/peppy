import { cn } from "@/lib/utils";

export const Hr = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) => (
  <hr className={cn("my-4 md:my-8", className)} {...props} />
);
