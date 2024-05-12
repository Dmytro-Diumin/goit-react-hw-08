import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";

const DeleteContactModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <div className={styles.modalWrap}>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default DeleteContactModal;
