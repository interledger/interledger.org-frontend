import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SwiperPagination.module.scss';

export interface SwiperPaginationProps {
  /** Optional className for SwiperPagination, pass in a sass module class to override component default */
  className?: string;
}

/**
 * SwiperPagination description
 */

export const SwiperPagination = ({ className }: SwiperPaginationProps) => {
  const rootClassName = cn(styles.root, className);
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex);

  const bullets = Array.from({ length: swiper.snapGrid.length }, (x, i) => i);

  useEffect(() => {
    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });
  }, [swiper]);

  const goToSlide = (index: number) => {
    swiper.slideTo(index);
  };

  if (swiper.isLocked) return null;

  return (
    <div className={rootClassName}>
      {bullets.map((b, i) => (
        <button
          key={i}
          className={cn(styles.bullet, {
            [styles.bulletActive]: i === activeIndex,
          })}
          onClick={() => goToSlide(i)}
        ></button>
      ))}
    </div>
  );
};