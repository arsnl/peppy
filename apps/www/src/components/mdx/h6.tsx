/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H6 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h6
    className={cn(
      "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);
