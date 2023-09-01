/* eslint-disable jsx-a11y/heading-has-content */
import "server-only";
import * as React from "react";
import { type MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { CopyButton, CopyNpmCommandButton } from "@/components/copy-button";
import { ESLintConfigCards } from "@/components/eslint-config-cards";
import { Icon } from "@/components/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Event } from "@/lib/events";
import type { NpmCommands } from "@/types/unist";

export const MdxComponents = {
  Accordion: (props) => <Accordion {...props} />,
  AccordionContent: (props) => <AccordionContent {...props} />,
  AccordionItem: (props) => <AccordionItem {...props} />,
  AccordionTrigger: (props) => <AccordionTrigger {...props} />,
  Alert: (props) => <Alert {...props} />,
  AlertTitle: (props) => <AlertTitle {...props} />,
  AlertDescription: (props) => <AlertDescription {...props} />,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 font-heading text-4xl font-bold",
        className,
      )}
      {...props}
    />
  ),
  H1: (props) => MdxComponents.h1(props),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 border-b pb-2 font-heading text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  H2: (props) => MdxComponents.h2(props),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  H3: (props) => MdxComponents.h3(props),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 font-heading text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  H4: (props) => MdxComponents.h4(props),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  H5: (props) => MdxComponents.h5(props),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  H6: (props) => MdxComponents.h6(props),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  A: (props) => MdxComponents.A(props),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  P: (props) => MdxComponents.P(props),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  Ul: (props) => MdxComponents.Ul(props),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  Ol: (props) => MdxComponents.Ol(props),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  Li: (props) => MdxComponents.Li(props),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  Blockquote: (props) => MdxComponents.Blockquote(props),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  Img: (props) => MdxComponents.Img(props),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  Hr: (props) => MdxComponents.Hr(props),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  Table: (props) => MdxComponents.Table(props),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  Tr: (props) => MdxComponents.Tr(props),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  Th: (props) => MdxComponents.Th(props),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  Td: (props) => MdxComponents.Td(props),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    __withMeta__,
    __src__,
    __event__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __withMeta__?: boolean;
    __src__?: string;
    __event__?: Event["name"];
  } & NpmCommands) => (
    <>
      <pre
        className={cn(
          "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-muted/30 py-4",
          className,
        )}
        {...props}
      />
      {__rawString__ && !__npmCommand__ && (
        <CopyButton
          value={__rawString__}
          src={__src__}
          event={__event__}
          className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
        />
      )}
      {__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && (
        <CopyNpmCommandButton
          commands={{
            __npmCommand__,
            __pnpmCommand__,
            __yarnCommand__,
          }}
          className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
        />
      )}
    </>
  ),
  Pre: (props) => MdxComponents.Pre(props),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  Code: (props) => MdxComponents.Code(props),
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props) => <Image {...props} />,
  AspectRatio: (props) => <AspectRatio {...props} />,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className,
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  ESLintConfigCards: (props) => <ESLintConfigCards {...props} />,
  Todo: ({ children, className, ...props }) => (
    <Alert className={cn("my-4", className)} {...props}>
      <Icon icon="terminal" className="h-4 w-4" />
      <AlertTitle className="mb-2 font-semibold">We need your help!</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <p>
          Hey there, coding champs! Our documentation is in need of a little
          extra love, and we&apos;re inviting you to be the heroes it deserves.
        </p>
        <p>
          This part of the documentation need to be written and your expertise
          can help complete our documentation puzzle and empower fellow devs.
        </p>
      </AlertDescription>
    </Alert>
  ),
  Badge: (props) => <Badge {...props} />,
} satisfies MDXComponents;

type MdxProps = React.HTMLAttributes<HTMLDivElement> & {
  code: string;
};

export const Mdx = ({ code, className, ...props }: MdxProps) => {
  const Component = getMDXComponent(code);

  return (
    <div className={cn("mdx", className)} {...props}>
      <Component components={MdxComponents} />
    </div>
  );
};
