import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type IconName =
  | "check"
  | "chevron-right"
  | "circle"
  | "columns"
  | "copy"
  | "gem"
  | "github"
  | "javascript-outline"
  | "jest"
  | "laptop"
  | "layers"
  | "moon"
  | "nextjs"
  | "nodejs"
  | "peppy"
  | "prettier"
  | "react"
  | "search"
  | "shield-check"
  | "sparkles"
  | "sun"
  | "tailwindcss"
  | "terminal"
  | "typescript-outline"
  | "typescript"
  | "wand"
  | "x"
  | "zap";

export type IconProps = Omit<HTMLAttributes<SVGElement>, "children"> & {
  icon: IconName;
};
export const Icon = ({ icon, className, ...props }: IconProps) => (
  <svg
    role="presentation"
    className={cn("h-[1em] w-[1em]", className)}
    aria-hidden
    {...props}
  >
    <use xlinkHref={`/assets/icons.svg#${icon}`} />
  </svg>
);
