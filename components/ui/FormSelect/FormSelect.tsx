import cn from 'classnames';

import styles from './FormSelect.module.scss';
import { ReactNode } from 'react';

export interface FormSelectProps {
  /** Optional className for FormSelect, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * FormSelect description
 */

export const FormSelect = ({ className, children }: FormSelectProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}>{children}</div>;
};
