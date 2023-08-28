import React, { forwardRef, type ReactElement } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import type { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    newTab?: boolean;
  };

export const Link = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
>(({ newTab: newTabProp, className, ...props }, ref): ReactElement => {
  const isExternal = /^https?:\/\//.test(props?.href?.toString() || "");
  const newTab = newTabProp ?? isExternal;
  const newTabProps = newTab ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <NextLink
      className={cn("underline-offset-4 hover:underline", className)}
      ref={ref}
      {...newTabProps}
      {...props}
    />
  );
});
