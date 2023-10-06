import { TerminalIcon } from "@/components/icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export const Todo = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Alert>) => (
  <Alert className={cn("my-4", className)} {...props}>
    <TerminalIcon className="h-4 w-4" />
    <AlertTitle className="mb-2 font-semibold">We need your help!</AlertTitle>
    <AlertDescription className="flex flex-col gap-2">
      <p>
        Hey there, coding champs! Our documentation is in need of a little extra
        love, and we&apos;re inviting you to be the heroes it deserves.
      </p>
      <p>
        This part of the documentation need to be written and your expertise can
        help complete our documentation puzzle and empower fellow devs.
      </p>
    </AlertDescription>
  </Alert>
);
