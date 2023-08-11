import cn from 'classnames';

import styles from './Table.module.scss';
import { ReactNode } from 'react';

export interface TableProps {
  /** Optional className for Table, pass in a sass module class to override component default */
  className?: string;
  children?: ReactNode;
}

/**
 * Table description
 */

export const Table = ({ className, children }: TableProps) => {
  const rootClassName = cn(styles.root, className);
  return <table className={rootClassName}>{children}</table>;
};
