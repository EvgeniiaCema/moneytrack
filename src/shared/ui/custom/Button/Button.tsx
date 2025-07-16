import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import styles from "./Button.module.scss";

export const Button = ({ className, children, variant = "dark", size = "big", isFullWidth = false, ...attributes }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.buttonRed]: variant === "red",
        [styles.buttonDark]: variant === "dark",
        [styles.buttonYellow]: variant === "yellow",
        [styles.buttonTransparent]: variant === "transparent",
        [styles.buttonSmall]: size === "small",
        [styles.buttonMedium]: size === "medium",
        [styles.buttonBig]: size === "big",
        [styles.buttonFullWidth]: isFullWidth,
      })}
      {...attributes}
    >
      {children}
    </button>
  );
};
