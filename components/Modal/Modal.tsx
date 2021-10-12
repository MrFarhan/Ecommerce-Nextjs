import React, { useRef } from "react";
import UseOutsideClick from "../../hooks/UseOutsideClick";
import styles from "./Modal.module.scss";

interface Props {
  onClose: any;
  child: any;
  width?: string;
  height?: string;
  showCloseBtn?: boolean;
}

const Modal = ({ onClose, child, width, height, showCloseBtn }: Props) => {
  const ModalRef = useRef(null);
  UseOutsideClick(ModalRef, () => onClose());
  return (
    <div className={styles.ModalMainContainer}>
      <div
        className={styles.ModalContainer}
        ref={ModalRef}
        style={{ width: width, height: height }}
      >
        {child}
        {showCloseBtn && (
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
