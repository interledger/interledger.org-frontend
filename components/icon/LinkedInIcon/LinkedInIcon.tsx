import cn from 'classnames';

import styles from './LinkedInIcon.module.scss';

export interface LinkedInIconProps {
  /** Optional className for LinkedInIcon, pass in a sass module class to override component default */
  className?: string;
}

/**
 * LinkedInIcon description
 */

export const LinkedInIcon = ({ className }: LinkedInIconProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.378 35.377"
    >
      <path d="M7.919 35.377H.584v-23.62h7.335ZM4.248 8.535A4.268 4.268 0 1 1 8.5 4.247a4.284 4.284 0 0 1-4.252 4.288ZM35.37 35.377h-7.319V23.879c0-2.74-.055-6.254-3.813-6.254-3.813 0-4.4 2.977-4.4 6.057v11.7h-7.325V11.757h7.034v3.222h.1a7.707 7.707 0 0 1 6.94-3.814c7.423 0 8.788 4.888 8.788 11.237v12.975Z" />
    </svg>
  );
};
