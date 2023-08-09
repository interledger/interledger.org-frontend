import cn from 'classnames';

import styles from './SwiperNavButton.module.scss';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type SwiperNavButtonProps = {
  /** Optional className for SwiperNavButton, pass in a sass module class to override component default */
  className?: string;
  direction: 'prev' | 'next';
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * SwiperNavButton description
 */

export const SwiperNavButton = forwardRef<
  HTMLButtonElement,
  SwiperNavButtonProps
>(({ className, direction, ...rest }: SwiperNavButtonProps, ref) => {
  const rootClassName = cn(styles.root, styles[direction], className);
  return (
    <button className={rootClassName} {...rest}>
      {direction === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.779 76.069">
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="M36.036 75.4 1.364 36.865 36.036.692"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.779 76.069">
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="m.743.669 34.672 38.535L.743 75.377"
          />
        </svg>
      )}
    </button>
  );
});

SwiperNavButton.displayName = 'SwiperNavButton';
