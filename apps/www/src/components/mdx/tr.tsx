import { cn } from "@/lib/utils";

export const Tr = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
);
