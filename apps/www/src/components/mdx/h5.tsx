/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H5 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    className={cn(
      "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);
