import cn from 'classnames';

import styles from './Arrow.module.scss';

export interface ArrowProps {
  /** Optional className for Arrow, pass in a sass module class to override component default */
  className?: string;

}

/**
 * Arrow description
 */

export const Arrow = ({ className }: ArrowProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg className={rootClassName} width="52" height="25.828" viewBox="0 0 52 25.828">
      <g id="Component_1_18" data-name="Component 1 – 18" transform="translate(1 1.414)">
        <path id="Path_96" data-name="Path 96" d="M0,0,11.5,11.631,23,0" transform="translate(38.369 23) rotate(-90)" fill="none" stroke="var(--color-primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_12" data-name="Line 12" x1="48.981" transform="translate(0 11.369)" fill="none" stroke="var(--color-primary)" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
};
