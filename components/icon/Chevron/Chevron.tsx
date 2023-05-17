import cn from 'classnames';

import styles from './Chevron.module.scss';

export interface ChevronProps {
  /** Optional className for Chevron, pass in a sass module class to override component default */
  className?: string;

}

/**
 * Chevron description
 */

export const Chevron = ({ className }: ChevronProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg className={rootClassName} xmlns="http://www.w3.org/2000/svg" width="32.828" height="17.414" viewBox="0 0 32.828 17.414">
      <path id="Path_97" data-name="Path 97" d="M4856.024,5866.089l15,15,15-15" transform="translate(-4854.61 -5864.675)" fill="none" stroke="var(--color-primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
