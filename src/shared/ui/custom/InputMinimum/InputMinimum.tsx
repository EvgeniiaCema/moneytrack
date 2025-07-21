import { forwardRef } from "react";
import { clsx } from "clsx";
import type { InputMinimumProps } from "./InputMinimum.interface";

import styles from "./InputMinimum.module.scss";

export const InputMinimum = forwardRef<HTMLInputElement, InputMinimumProps>(({ className, type, ...attributes }, ref) => {
	return (
		<label className={clsx(styles.label, className)}>
			<input ref={ref} type={type} className={styles.input} {...attributes} />
		</label>
	);
});
