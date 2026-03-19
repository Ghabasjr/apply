'use client';

import { useRef } from 'react';
import { deletePost } from '../app/actions';
import styles from './DeleteButton.module.css';

export default function DeleteButton({ id, title }: { id: string; title: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" className={styles.deleteBtn} onClick={openModal}>
        Delete
      </button>

      <dialog ref={dialogRef} className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.iconWrap}>
            <span className={styles.icon}>⚠️</span>
          </div>
          <h3 className={styles.modalTitle}>Delete Listing?</h3>
          <p className={styles.modalText}>
            You are about to permanently delete:
          </p>
          <p className={styles.listingTitle}>"{title}"</p>
          <p className={styles.modalWarning}>This cannot be undone.</p>

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelBtn} onClick={closeModal}>
              Cancel
            </button>
            <form action={deletePost}>
              <input type="hidden" name="id" value={id} />
              <button type="submit" className={styles.confirmDeleteBtn}>
                Yes, Delete It
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
