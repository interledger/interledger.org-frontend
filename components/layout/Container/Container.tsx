import cn from 'classnames';
import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';

import styles from './Container.module.scss';

type AsProp<T extends ElementType> = {
  /**
   * The HTML element used for the root node.
   */
  as?: T;
};

export type ContainerProps<T extends ElementType> = PropsWithChildren<
  AsProp<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof AsProp<T>> & {
    /** Optional className for ContainerEdge, pass in a sass module class to override component default */
    className?: string;
    children: ReactNode;
  };

/**
 * Contains content using `var(--page-width)` and adds side gutters using `var(--page-gutter)`
 */

export const Container = <T extends ElementType = 'div'>({
  className,
  children,
  as,
  ...rest
}: ContainerProps<T>) => {
  const Component = as || 'div';
  const rootClassName = cn(styles.root, className);
  return (
    <Component className={rootClassName} {...rest}>
      <div className={styles.container}>{children}</div>
    </Component>
  );
};
