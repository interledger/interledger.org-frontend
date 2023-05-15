import cn from 'classnames';

import styles from './BackgroundSwirl.module.scss';

export interface BackgroundSwirlProps {
  /** Optional className for BackgroundSwirl, pass in a sass module class to override component default */
  className?: string;

}

/**
 * BackgroundSwirl description
 */

export const BackgroundSwirl = ({ className }: BackgroundSwirlProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <img src="/logo-swirl-large.svg" alt="" />
    </div>
  );
};
