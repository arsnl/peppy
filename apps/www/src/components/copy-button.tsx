"use client";

import * as React from "react";
import { CheckIcon, CopyIcon, TerminalIcon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Event } from "@/lib/event/event.type";
import { trackEvent } from "@/lib/event/event.util";
import { cn } from "@/lib/utils";
import type { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import type { NpmCommands } from "@/types/unist";

type CopyButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  value: string;
  src?: string;
  event?: Event["name"];
};

const copyToClipboardWithMeta = async (value: string, event?: Event) => {
  navigator.clipboard.writeText(value);
  if (event) {
    trackEvent(event);
  }
};

export const CopyButton = ({
  value,
  className,
  src,
  event,
  ...props
}: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("relative z-10 h-6 w-6 text-foreground", className)}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined,
        );
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="h-3 w-3" />
      ) : (
        <CopyIcon className="h-3 w-3" />
      )}
    </Button>
  );
};

type CopyWithClassNamesProps = DropdownMenuTriggerProps & {
  value: string;
  classNames: string;
  className?: string;
};

export const CopyWithClassNames = ({
  value,
  classNames,
  className,
}: CopyWithClassNamesProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((valueToCopy: string) => {
    copyToClipboardWithMeta(valueToCopy);
    setHasCopied(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn("relative z-10 h-6 w-6 text-foreground", className)}
        >
          {hasCopied ? (
            <CheckIcon className="h-3 w-3" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(value)}>
          Component
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
          Classname
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type CopyNpmCommandButtonProps = DropdownMenuTriggerProps & {
  commands: Required<NpmCommands>;
};

export const CopyNpmCommandButton = ({
  commands,
  className,
}: CopyNpmCommandButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyCommand = React.useCallback(
    (value: string, pm: "npm" | "pnpm" | "yarn") => {
      copyToClipboardWithMeta(value, {
        name: "copy_npm_command",
        properties: {
          command: value,
          pm,
        },
      });
      setHasCopied(true);
    },
    [],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
            className,
          )}
        >
          {hasCopied ? (
            <CheckIcon className="h-3 w-3" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__npmCommand__, "npm")}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}
        >
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}
        >
          pnpm
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type CopyCodeButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  value: string;
  event?: Event["name"];
};

export const CopyCodeButton = ({
  value,
  className,
  event,
  ...props
}: CopyCodeButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      variant="outline"
      className={cn(
        "relative flex h-auto cursor-pointer flex-row items-center gap-4 rounded-md border p-3 px-4 text-base transition-colors duration-300 hover:bg-background/90 md:text-lg lg:p-4 lg:px-5 lg:text-xl",
        className,
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined,
        );
        setHasCopied(true);
      }}
      {...props}
    >
      <TerminalIcon />
      <code>{value}</code>
      {hasCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};
