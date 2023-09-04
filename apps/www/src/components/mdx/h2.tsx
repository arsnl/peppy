/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      "mt-12 scroll-m-20 border-b pb-2 font-heading text-2xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  />
);
