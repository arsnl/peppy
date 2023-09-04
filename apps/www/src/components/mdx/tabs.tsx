import { Tabs as OTabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Tabs = ({
  className,
  ...props
}: React.ComponentProps<typeof OTabs>) => (
  <OTabs className={cn("relative mt-6 w-full", className)} {...props} />
);
