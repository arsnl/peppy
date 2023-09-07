/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H4 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn(
      "mt-8 scroll-m-20 font-heading text-lg font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);