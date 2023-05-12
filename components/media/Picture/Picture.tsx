import cn from 'classnames';

import styles from './Picture.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export interface PictureProps extends HTMLAttributes<HTMLElement> {
  /** Optional className for Picture, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * Picture description
 */

export const Picture = ({ className, children }: PictureProps) => {
  const rootClassName = cn(styles.root, className);

  return <picture className={rootClassName}>{children}</picture>;
};
