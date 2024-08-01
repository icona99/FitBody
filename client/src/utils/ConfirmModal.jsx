import React from 'react';
import Modal from 'react-modal';
import styles from './ConfirmModal.module.css';

Modal.setAppElement('#root');

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Confirm</h2>
      <p>{message}</p>
      <div className={styles.buttons}>
        <button onClick={onConfirm} className={styles.confirmButton}>Yes</button>
        <button onClick={onRequestClose} className={styles.cancelButton}>No</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
