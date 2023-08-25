import cn from 'classnames';

import styles from './FormLabel.module.scss';
import { LabelHTMLAttributes } from 'react';

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Optional className for FormLabel, pass in a sass module class to override component default */
  className?: string;
  required?: boolean;
}

/**
 * FormLabel description
 */

export const FormLabel = ({
  className,
  required,
  children,
  ...rest
}: FormLabelProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <label className={rootClassName} {...rest}>
      {required ? <span className={styles.required}>*</span> : null}
      {children}
    </label>
  );
};
