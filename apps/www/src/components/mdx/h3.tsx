/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H3 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);
