import cn from 'classnames';

import styles from './Modal.module.scss';
import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CloseIcon } from '@components/icon/CloseIcon/CloseIcon';
import { useScrollLock } from '@hooks/useScrollLock';
import { createPortal } from 'react-dom';
import { m } from 'framer-motion';

export interface ModalProps {
  /** Optional className for Modal, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
  show: boolean;
  closeAriaLabel: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Modal description
 */

export const Modal = ({
  className,
  children,
  show,
  closeAriaLabel,
  onClose,
}: ModalProps) => {
  const rootClassName = cn(styles.root, className);
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [modalRef, setLock] = useScrollLock();

  useEffect(() => {
    if (show) {
      ref.current = document.querySelector<HTMLElement>('#modal');
      setMounted(true);
    }
  }, [show]);

  useEffect(() => {
    setLock(show);
    return () => {
      setLock(false);
    };
  }, [show, setLock]);

  return show && mounted && ref.current
    ? createPortal(
        <div className={rootClassName} ref={modalRef}>
          <m.div
            role="dialog"
            className={styles.content}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring' }}
            aria-modal="true"
          >
            <button
              className={styles.closeButton}
              aria-label={closeAriaLabel}
              onClick={onClose}
            >
              <CloseIcon />
            </button>
            {children}
          </m.div>
        </div>,
        ref.current
      )
    : null;
};
