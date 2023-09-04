import { CodeBlockWrapper as OCodeBlockWrapper } from "@/components/code-block-wrapper";

export const CodeBlockWrapper = ({ ...props }) => (
  <OCodeBlockWrapper className="rounded-md border" {...props} />
);
