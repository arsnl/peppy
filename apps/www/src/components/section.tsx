import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    container: {
      full: "w-full",
      normal: "container",
    },
    pt: {
      none: "",
      normal: "pt-16 md:pt-24 lg:pt-32",
    },
    pb: {
      none: "",
      normal: "pb-16 md:pb-24 lg:pb-32",
    },
  },
  defaultVariants: {
    container: "normal",
    pt: "normal",
    pb: "normal",
  },
});

export type SectionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionVariants>;

export const Section = ({
  className,
  container,
  pt,
  pb,
  ...props
}: SectionProps) => (
  <section
    className={cn(sectionVariants({ container, pt, pb }), className)}
    {...props}
  />
);
