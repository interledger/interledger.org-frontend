import cn from 'classnames';
import styles from './Grid.module.scss';

export interface GridProps {
  /** Optional className for Grid, pass in a sass module class to override component default */
  className?: string;
  children: React.ReactNode;
  /** Override the grid layout by setting display to list */
  display?: 'grid' | 'list';
  cols?: number;
  colsTablet?: number;
  colsDesktop?: number;
  fill?: boolean;
}

/**
 * Grid uses `var(--grid-horizontal-spacing)` and `var(--grid-vertical-spacing` with options for configuring mobile, tablet and desktop columns
 */

export const Grid = ({
  className,
  children,
  display = 'grid',
  cols = 1,
  colsTablet = 2,
  colsDesktop = 3,
  fill,
}: GridProps) => {
  const rootClassName = cn(
    styles.root,
    {
      [styles[`grid-${cols}-col`]]: display === 'grid',
      [styles[`grid-${colsTablet}-col-tablet`]]: display === 'grid',
      [styles[`grid-${colsDesktop}-col-desktop`]]: display === 'grid',
      [styles.fill]: fill,
    },
    className
  );
  return <div className={rootClassName}>{children}</div>;
};
