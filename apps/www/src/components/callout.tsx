import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CalloutProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
}

export const Callout = ({ title, children, icon, ...props }: CalloutProps) => (
  <Alert {...props}>
    {icon && <span className="mr-4 text-2xl">{icon}</span>}
    {title && <AlertTitle>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
  </Alert>
);
