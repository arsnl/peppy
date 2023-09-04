/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export const Img = ({
  className,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img className={cn("rounded-md", className)} alt={alt} {...props} />
);
