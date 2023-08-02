import cn from 'classnames';

import styles from './HamburgerIcon.module.scss';

export interface HamburgerIconProps {
  /** Optional className for HamburgerIcon, pass in a sass module class to override component default */
  className?: string;
}

/**
 * HamburgerIcon description
 */

export const HamburgerIcon = ({ className }: HamburgerIconProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g>
        <path d="M20 0v4H0V0z" />
        <path d="M20 8v4H0V8z" />
        <path d="M20 16v4H0v-4z" />
      </g>
    </svg>
  );
};
