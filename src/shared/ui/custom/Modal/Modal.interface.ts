import type { HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}
