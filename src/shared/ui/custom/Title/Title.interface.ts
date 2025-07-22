import type { HTMLAttributes, ReactNode } from "react";

type TitleSize = "large" | "medium" | "small";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  size?: TitleSize;
}
