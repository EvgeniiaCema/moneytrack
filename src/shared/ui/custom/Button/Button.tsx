import { clsx } from "clsx";
import type { ButtonProps } from "./Button.interface";

import styles from "./Button.module.scss";

export const Button = ({ className, children, ...attributes }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, className)} {...attributes}>
			{children}
		</button>
	);
};
