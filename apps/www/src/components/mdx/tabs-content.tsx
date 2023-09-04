import { TabsContent as OTabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof OTabsContent>) => (
  <OTabsContent
    className={cn(
      "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
      className,
    )}
    {...props}
  />
);
