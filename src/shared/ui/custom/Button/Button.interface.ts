import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "small" | "medium" | "big";

type ButtonVariant = "dark" | "transparent" | "yellow" | "red";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isFullWidth?: boolean;
}
