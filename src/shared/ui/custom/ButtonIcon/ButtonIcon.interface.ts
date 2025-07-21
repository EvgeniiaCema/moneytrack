import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { IconType } from "react-icons";

type ButtonForm = "pill" | "circle";
type ButtonColor = "red" | "black";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	form?: ButtonForm;
	variant?: ButtonColor;
	Icon?: IconType;
	iconSize?: number;
}
