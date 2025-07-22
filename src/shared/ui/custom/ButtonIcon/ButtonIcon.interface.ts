import type { IconType } from "react-icons";
import type { ButtonHTMLAttributes } from "react";

type ButtonForm = "pill" | "circle";

type ButtonVariant = "red" | "black";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  form?: ButtonForm;
  variant?: ButtonVariant;
}
