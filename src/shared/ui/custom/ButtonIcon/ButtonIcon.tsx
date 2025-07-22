import { clsx } from "clsx";

import type { ButtonIconProps } from "./ButtonIcon.interface";

import styles from "./ButtonIcon.module.scss";

export const ButtonIcon = ({ Icon, className, form = "pill", variant = "red", ...attributes }: ButtonIconProps) => {
  return (
    <button
      className={clsx(styles.buttonIcon, className, {
        [styles.buttonIconPill]: form === "pill",
        [styles.buttonIconCircle]: form === "circle",
        [styles.buttonIconRed]: variant === "red",
        [styles.buttonIconBlack]: variant === "black",
      })}
      {...attributes}
    >
      <Icon size={19} />
    </button>
  );
};
