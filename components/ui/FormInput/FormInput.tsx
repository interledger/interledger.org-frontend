import cn from 'classnames';

import styles from './FormInput.module.scss';
import { ReactNode } from 'react';

export interface FormInputProps {
  /** Optional className for FormInput, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * FormInput description
 */

export const FormInput = ({ className, children }: FormInputProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}>{children}</div>;
};
