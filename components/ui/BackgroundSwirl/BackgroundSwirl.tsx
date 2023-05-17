import cn from 'classnames';

import styles from './BackgroundSwirl.module.scss';

export interface BackgroundSwirlProps {
  /** Optional className for BackgroundSwirl, pass in a sass module class to override component default */
  className?: string;
  theme?: string;
}

/**
 * BackgroundSwirl description
 */

export const BackgroundSwirl = ({ className, theme }: BackgroundSwirlProps) => {
  const rootClassName = cn(
    styles.root,
    className,
    theme && styles[theme],
  );

  return (
    <div className={rootClassName}>
      <img src="/logo-swirl-large.svg" alt="" />
      <img src="/logo-swirl-large.svg" alt="" />
      <img src="/logo-swirl-large.svg" alt="" />
      <img src="/logo-swirl-large.svg" alt="" />
      <img src="/logo-swirl-large.svg" alt="" />
      <img src="/logo-swirl-large.svg" alt="" />
    </div>
  );
};
