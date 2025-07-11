import { clsx } from "clsx";

import type { InputProps } from "./Input.interface";

import styles from "./Input.module.scss";

export const Input = ({ className, ...attributes }: InputProps) => {
	return (
		<label className={clsx(styles.label, className)}>
			<input className={styles.input} {...attributes} />
		</label>
	);
};
