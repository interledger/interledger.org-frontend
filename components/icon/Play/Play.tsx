import cn from 'classnames';

import styles from './Play.module.scss';

export interface PlayProps {
  /** Optional className for Play, pass in a sass module class to override component default */
  className?: string;

}

/**
 * Play description
 */

export const Play = ({ className }: PlayProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg className={rootClassName} xmlns="http://www.w3.org/2000/svg" width="64" height="76" viewBox="0 0 64 76">
      <path id="Polygon_1" data-name="Polygon 1" d="M38,0,76,64H0Z" transform="translate(64) rotate(90)" fill="#fff" />
    </svg>
  );
};
