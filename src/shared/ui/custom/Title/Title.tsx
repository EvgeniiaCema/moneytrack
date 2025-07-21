import { clsx } from "clsx";
import type { TitleProps } from "./Title.interface";

import styles from "./Title.module.scss";

export const Title = ({ children, size = "large", className, ...props }: TitleProps) => {
	const Tag = size === "large" ? "h1" : size === "medium" ? "h2" : "h3";

	return (
		<Tag
			className={clsx(styles.title, className, {
				[styles.titleLarge]: size === "large",
				[styles.titleMedium]: size === "medium",
				[styles.titleSmall]: size === "small",
			})}
			{...props}
		>
			{children}
		</Tag>
	);
};
