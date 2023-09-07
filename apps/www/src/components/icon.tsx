import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type IconName =
  | "arrow-up-circle"
  | "check"
  | "chevron-right"
  | "circle-equal"
  | "circle"
  | "code"
  | "columns"
  | "copy"
  | "eslint"
  | "file-x"
  | "gem"
  | "github"
  | "jest"
  | "js-square"
  | "js"
  | "laptop"
  | "layers"
  | "minus-circle"
  | "moon"
  | "nextjs"
  | "nodejs"
  | "peppy"
  | "plus-circle"
  | "prettier"
  | "react"
  | "search"
  | "settings"
  | "shield-alert"
  | "shield-ban"
  | "shield-check"
  | "shield-minus"
  | "shield-off"
  | "shield-x"
  | "shield"
  | "sparkles"
  | "sun"
  | "tailwindcss"
  | "terminal"
  | "ts-square"
  | "ts"
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
    aria-hidden
    className={cn("h-[1em] w-[1em]", className)}
    {...props}
  >
    <use xlinkHref={`/assets/icons.svg#${icon}`} />
  </svg>
);
