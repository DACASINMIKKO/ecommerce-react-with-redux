import React from "react";
import styles from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ isOpen, onRemove, item, onChange, value }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h1>{item.name}</h1>
            <h2>Quantity:</h2>
            <input value={value} type="number" onChange={onChange} />
            <button onClick={onRemove}>Remove</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
