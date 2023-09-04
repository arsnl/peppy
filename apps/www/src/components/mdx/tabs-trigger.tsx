import { TabsTrigger as OTabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof OTabsTrigger>) => (
  <OTabsTrigger
    className={cn(
      "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
      className,
    )}
    {...props}
  />
);
