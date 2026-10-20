import { Fragment } from 'react';
import styles from './Modal.module.css';

export function Modal({ isOpen, onClose, children, title, description, size = 'md' }) {
  if (!isOpen) return null;

  return (
    <Fragment>
      <div
        className={styles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.modal} ${styles[size]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {(title || description) && (
          <header className={styles.header}>
            {title && (
              <h2 id="modal-title" className={styles.title}>{title}</h2>
            )}
            {description && (
              <p id="modal-description" className={styles.description}>{description}</p>
            )}
          </header>
        )}

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;