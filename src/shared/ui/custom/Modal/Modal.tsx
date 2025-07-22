import { createPortal } from "react-dom";

import type { ModalProps } from "./Modal.interface";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

import { IoCloseSharp } from "react-icons/io5";

import styles from "./Modal.module.scss";

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <ButtonIcon Icon={IoCloseSharp} className={styles.modalCloseButton} onClick={onClose} aria-label="Close Modal" />
        {children}
      </div>
    </div>,
    document.body
  );
};
