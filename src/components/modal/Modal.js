import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onRemove, item, setQuantity }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h1>{item.name}</h1>
            <h2>Quantity:</h2>
            <input
              placeholder={item.quantity}
              type="number"
              onChange={setQuantity}
            />
            <button onClick={onRemove}>Remove</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
