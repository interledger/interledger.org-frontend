import cn from 'classnames';
import { HTMLAttributes } from 'react';

import styles from './VisuallyHidden.module.scss';

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  /** Optional className for VisuallyHidden, pass in a sass module class to override component default */
  className?: string;
}

/**
 * VisuallyHidden description
 */

export const VisuallyHidden = ({
  className,
  children,
  ...rest
}: VisuallyHiddenProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <span className={rootClassName} {...rest}>
      {children}
    </span>
  );
};
