import cn from 'classnames';

import styles from './Pause.module.scss';

export interface PauseProps {
  /** Optional className for Pause, pass in a sass module class to override component default */
  className?: string;

}

/**
 * Pause description
 */

export const Pause = ({ className }: PauseProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg className={rootClassName} id="Component_11_2" data-name="Component 11 – 2" xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23">
      <rect id="Rectangle_100" data-name="Rectangle 100" width="5" height="23" fill="#fff" />
      <rect id="Rectangle_101" data-name="Rectangle 101" width="5" height="23" transform="translate(9)" fill="#fff" />
    </svg>
  );
};
