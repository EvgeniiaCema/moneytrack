import { forwardRef } from "react";

import type { InputProps } from "./Input.interface";

import { clsx } from "clsx";

import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...attributes }, ref) => {
  return (
    <label className={clsx(styles.label, className)}>
      <input ref={ref} className={styles.input} {...attributes} />
    </label>
  );
});
