import { createPortal } from "react-dom";

import { IoCloseSharp } from "react-icons/io5";
import type { ModalProps } from "./Modal.interface";

import styles from "./Modal.module.scss";

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
	if (!isOpen) return null;

	return createPortal(
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.closeButton} onClick={onClose}>
					<IoCloseSharp />
				</div>
				{children}
			</div>
		</div>,
		document.body
	);
};
