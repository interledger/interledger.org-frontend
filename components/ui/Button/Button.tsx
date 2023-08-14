import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';
import { Arrow } from '@components/icon/Arrow/Arrow';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional className for Button, pass in a sass module class to override component default */
  className?: string;
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  const rootClassName = cn(styles.button, className);
  return (
    <button className={rootClassName} {...rest}>
      <span className={styles.titleMarkup}>{children}</span>
      <Arrow />
    </button>
  );
};
