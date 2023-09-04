import { TabsList as OTabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof OTabsList>) => (
  <OTabsList
    className={cn(
      "w-full justify-start rounded-none border-b bg-transparent p-0",
      className,
    )}
    {...props}
  />
);
