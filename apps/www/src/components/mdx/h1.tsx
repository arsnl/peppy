/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from "@/lib/utils";

export const H1 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "mt-2 scroll-m-20 font-heading text-4xl font-bold",
      className,
    )}
    {...props}
  />
);
