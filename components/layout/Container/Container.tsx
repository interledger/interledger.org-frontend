import cn from 'classnames';

import styles from './Container.module.scss';

export interface ContainerProps {
  /** Optional className for Container, pass in a sass module class to override component default */
  className?: string;
  children: React.ReactNode;
}

/**
 * Contains content using `var(--page-width)` and adds side gutters using `var(--page-gutter)`
 */

export const Container = ({ className, children }: ContainerProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
