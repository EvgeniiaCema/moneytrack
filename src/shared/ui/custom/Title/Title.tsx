import { clsx } from "clsx";

import type { TitleProps } from "./Title.interface";

import styles from "./Title.module.scss";

export const Title = ({ children, size = "large", className, ...attributes }: TitleProps) => {
  switch (size) {
    case "large":
      return (
        <h1 className={clsx(styles.large, className)} {...attributes}>
          {children}
        </h1>
      );
    case "medium":
      return (
        <h2 className={clsx(styles.medium, className)} {...attributes}>
          {children}
        </h2>
      );
    case "small":
      return (
        <h3 className={clsx(styles.small, className)} {...attributes}>
          {children}
        </h3>
      );
    default:
      return (
        <h1 className={clsx(styles.large, className)} {...attributes}>
          {children}
        </h1>
      );
  }
};
