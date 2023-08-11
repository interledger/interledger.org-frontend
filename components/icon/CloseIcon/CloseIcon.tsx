import cn from 'classnames';

import styles from './CloseIcon.module.scss';

export interface CloseIconProps {
  /** Optional className for CloseIcon, pass in a sass module class to override component default */
  className?: string;
}

/**
 * CloseIcon description
 */

export const CloseIcon = ({ className }: CloseIconProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.799 19.799"
    >
      <g>
        <path d="m19.799 16.97-2.828 2.828L0 2.828 2.828-.001z" />
        <path d="m16.971 0 2.828 2.828L2.83 19.8 0 16.971z" />
      </g>
    </svg>
  );
};
