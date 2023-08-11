import cn from 'classnames';

import styles from './TableResponsive.module.scss';
import { ReactNode } from 'react';

export interface TableResponsiveProps {
  /** Optional className for TableResponsive, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * TableResponsive description
 */

export const TableResponsive = ({
  className,
  children,
}: TableResponsiveProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}>{children}</div>;
};
