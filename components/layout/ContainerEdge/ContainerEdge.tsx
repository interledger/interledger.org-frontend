import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './ContainerEdge.module.scss';

export interface ContainerEdgeProps {
  /** Optional className for ContainerEdge, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

/**
 * ContainerEdge addes a wrapper that will break out of container and display edge to edge;
 */

export const ContainerEdge = ({ className, children }: ContainerEdgeProps) => {
  const rootClassName = cn(styles.root, className);
  return <section className={rootClassName}>{children}</section>;
};
