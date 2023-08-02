import cn from 'classnames';

import styles from './TwitterIcon.module.scss';

export interface TwitterIconProps {
  /** Optional className for TwitterIcon, pass in a sass module class to override component default */
  className?: string;
}

/**
 * TwitterIcon description
 */

export const TwitterIcon = ({ className }: TwitterIconProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46.261 36.085"
    >
      <path d="M41.506 8.993c.029.395.029.789.029 1.184 0 12.038-9.54 25.908-26.976 25.908A27.6 27.6 0 0 1 0 31.997a20.416 20.416 0 0 0 2.29.113 19.491 19.491 0 0 0 11.77-3.891 9.459 9.459 0 0 1-8.86-6.314 12.438 12.438 0 0 0 1.791.141 10.418 10.418 0 0 0 2.5-.31 9.208 9.208 0 0 1-7.6-8.937v-.113a9.848 9.848 0 0 0 4.286 1.156 9.011 9.011 0 0 1-4.24-7.584 8.766 8.766 0 0 1 1.292-4.6 27.332 27.332 0 0 0 19.55 9.529 9.889 9.889 0 0 1-.235-2.086 9.3 9.3 0 0 1 9.481-9.106 9.644 9.644 0 0 1 6.927 2.876 19.142 19.142 0 0 0 6.018-2.2 9.158 9.158 0 0 1-4.17 5.023 19.628 19.628 0 0 0 5.46-1.41 19.961 19.961 0 0 1-4.755 4.708Z" />
    </svg>
  );
};
