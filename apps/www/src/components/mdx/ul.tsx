import { cn } from "@/lib/utils";

export const Ul = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
);
