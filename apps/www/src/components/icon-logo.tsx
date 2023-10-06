"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type IconLogoName =
  | "eslint"
  | "github"
  | "jest"
  | "nextjs"
  | "nodejs"
  | "peppy"
  | "prettier"
  | "react"
  | "tailwindcss"
  | "typescript";

export type IconLogoProps = Omit<HTMLAttributes<SVGElement>, "children"> & {
  icon: IconLogoName;
};
export const IconLogo = ({ icon, className, ...props }: IconLogoProps) => (
  <svg
    role="presentation"
    aria-hidden
    className={cn("h-[1em] w-[1em]", className)}
    {...props}
  >
    <use xlinkHref={`/assets/icon-logo.svg#${icon}`} />
  </svg>
);
