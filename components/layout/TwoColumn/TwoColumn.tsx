import cn from 'classnames';

import styles from './TwoColumn.module.scss';
import { ReactNode } from 'react';

export interface TwoColumnProps {
  /** Optional className for TwoColumn, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * TwoColumn description
 */

export const TwoColumn = ({ className, children }: TwoColumnProps) => {
  const rootClassName = cn(styles.root, className);

  return <div className={rootClassName}>{children}</div>;
};

interface ContentProps {
  /** Optional className for Content, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * Content description
 */

export const Content = ({ className, children }: ContentProps) => {
  const rootClassName = cn(styles.content, className);
  return <div className={rootClassName}>{children}</div>;
};
TwoColumn.Content = Content;

interface SideProps {
  /** Optional className for Side, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * Side description
 */

export const Side = ({ className, children }: ContentProps) => {
  const rootClassName = cn(styles.side, className);
  return <aside className={rootClassName}>{children}</aside>;
};
TwoColumn.Side = Side;
