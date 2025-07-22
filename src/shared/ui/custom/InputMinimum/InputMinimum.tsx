import { forwardRef } from "react";

import type { InputMinimumProps } from "./InputMinimum.interface";

import { clsx } from "clsx";

import styles from "./InputMinimum.module.scss";

export const InputMinimum = forwardRef<HTMLInputElement, InputMinimumProps>(({ className, ...attributes }, ref) => {
  return (
    <label className={clsx(styles.label, className)}>
      <input ref={ref} className={styles.input} {...attributes} />
    </label>
  );
});
