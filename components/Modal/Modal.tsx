import React, { useRef } from "react";
import UseOutsideClick from "../../hooks/UseOutsideClick";
import styles from "./Modal.module.scss";

const Modal = ({ onClose, child }) => {
  const ModalRef = useRef(null);

  UseOutsideClick(ModalRef, () => onClose());
  return (
    <div className={styles.ModalMainContainer}>
      <div className={styles.ModalContainer} ref={ModalRef}>
        {child}
        <button className={styles.closeBtn} onClick={onClose} style={{display:"none"}}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
