/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';

import styles from './BackgroundSwirl.module.scss';
import { menuAtom } from '@store/site';
import { useAtom } from 'jotai';

export interface BackgroundSwirlProps {
  /** Optional className for BackgroundSwirl, pass in a sass module class to override component default */
  className?: string;
}

/**
 * BackgroundSwirl description
 */

export const BackgroundSwirl = ({ className }: BackgroundSwirlProps) => {
  const [menuOpen] = useAtom(menuAtom);
  const rootClassName = cn(styles.root, className);

  if (menuOpen) {
    return null;
  }

  return <div className={rootClassName} />;
};
