import cn from 'classnames';

import styles from './FormFieldError.module.scss';

export interface FormFieldErrorProps {
  /** Optional className for FormFieldError, pass in a sass module class to override component default */
  className?: string;
  message?: string;
}

/**
 * FormFieldError description
 */

export const FormFieldError = ({ className, message }: FormFieldErrorProps) => {
  const rootClassName = cn(styles.root, className);
  return message ? (
    <span className={rootClassName} role="alert">
      {message}
    </span>
  ) : null;
};
