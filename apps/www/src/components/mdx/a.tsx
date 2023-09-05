import { Link } from "@/components/link";
import { cn } from "@/lib/utils";

export const A = ({
  href,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    className={cn("font-medium underline underline-offset-4", className)}
    href={href || ""}
    {...props}
  />
);
