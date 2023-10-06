import "server-only";
import * as React from "react";
import { type MDXComponents } from "mdx/types";
import Image from "next/image";
import { getMDXComponent } from "next-contentlayer/hooks";
import { ESLintConfigCards } from "@/components/eslint-config-cards";
import { A } from "@/components/mdx/a";
import { Blockquote } from "@/components/mdx/blockquote";
import { Code } from "@/components/mdx/code";
import { CodeBlockWrapper } from "@/components/mdx/code-block-wrapper";
import { H1 } from "@/components/mdx/h1";
import { H2 } from "@/components/mdx/h2";
import { H3 } from "@/components/mdx/h3";
import { H4 } from "@/components/mdx/h4";
import { H5 } from "@/components/mdx/h5";
import { H6 } from "@/components/mdx/h6";
import { Hr } from "@/components/mdx/hr";
import { Img } from "@/components/mdx/img";
import { Li } from "@/components/mdx/li";
import { Link } from "@/components/mdx/link";
import { Ol } from "@/components/mdx/ol";
import { P } from "@/components/mdx/p";
import { Pre } from "@/components/mdx/pre";
import { Step } from "@/components/mdx/step";
import { Steps } from "@/components/mdx/steps";
import { Table } from "@/components/mdx/table";
import { Tabs } from "@/components/mdx/tabs";
import { TabsContent } from "@/components/mdx/tabs-content";
import { TabsList } from "@/components/mdx/tabs-list";
import { TabsTrigger } from "@/components/mdx/tabs-trigger";
import { Td } from "@/components/mdx/td";
import { Th } from "@/components/mdx/th";
import { Todo } from "@/components/mdx/todo";
import { Tr } from "@/components/mdx/tr";
import { Ul } from "@/components/mdx/ul";
import { RuleInfos } from "@/components/rule-infos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const MdxComponents = {
  Accordion: (props) => <Accordion {...props} />,
  AccordionContent: (props) => <AccordionContent {...props} />,
  AccordionItem: (props) => <AccordionItem {...props} />,
  AccordionTrigger: (props) => <AccordionTrigger {...props} />,
  Alert: (props) => <Alert {...props} />,
  AlertTitle: (props) => <AlertTitle {...props} />,
  AlertDescription: (props) => <AlertDescription {...props} />,
  a: (props) => <A {...props} />,
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  p: (props) => <P {...props} />,
  ul: (props) => <Ul {...props} />,
  ol: (props) => <Ol {...props} />,
  li: (props) => <Li {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  img: (props) => <Img {...props} />,
  hr: (props) => <Hr {...props} />,
  table: (props) => <Table {...props} />,
  tr: (props) => <Tr {...props} />,
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
  pre: (props) => <Pre {...props} />,
  code: (props) => <Code {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props) => <Image {...props} />,
  AspectRatio: (props) => <AspectRatio {...props} />,
  CodeBlockWrapper: (props) => <CodeBlockWrapper {...props} />,
  Step: (props) => <Step {...props} />,
  Steps: (props) => <Steps {...props} />,
  Tabs: (props) => <Tabs {...props} />,
  TabsList: (props) => <TabsList {...props} />,
  TabsTrigger: (props) => <TabsTrigger {...props} />,
  TabsContent: (props) => <TabsContent {...props} />,
  Link: (props) => <Link {...props} />,
  ESLintConfigCards: (props) => <ESLintConfigCards {...props} />,
  Todo: (props) => <Todo {...props} />,
  Badge: (props) => <Badge {...props} />,
  RuleInfos: (props) => <RuleInfos {...props} />,
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
