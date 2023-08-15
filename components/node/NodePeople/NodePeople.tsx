import cn from 'classnames';
import { NodePeopleFragment } from '@models/operations';
import styles from './NodePeople.module.scss';

export interface NodePeopleProps {
  /** Optional className for NodePeople, pass in a sass module class to override component default */
  className?: string;
  node: NodePeopleFragment
}

/**
 * NodePeople description
 */

export const NodePeople = ({ className }: NodePeopleProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
