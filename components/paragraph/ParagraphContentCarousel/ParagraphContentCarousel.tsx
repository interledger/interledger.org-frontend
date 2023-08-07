import cn from 'classnames';
import { ParagraphContentCarouselFragment } from '@models/operations';

import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ParagraphContentCarousel.module.scss';
import { SwiperPagination } from '@components/ui/SwiperPagination/SwiperPagination';
import { SwiperNavButton } from '@components/ui/SwiperNavButton/SwiperNavButton';

export interface ParagraphContentCarouselProps {
  /** Optional className for ParagraphContentCarousel, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContentCarouselFragment;
}

/**
 * ParagraphContentCarousel description
 */

export const ParagraphContentCarousel = ({
  className,
  paragraph,
}: ParagraphContentCarouselProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <section className={rootClassName}>
      <div className={styles.content}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={28}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          threshold={10}
          speed={1000}
        >
          {paragraph.carouselItem?.map((ci) => (
            <SwiperSlide key={ci.id} className={styles.slide}>
              <Paragraphs paragraphs={[ci]} />
            </SwiperSlide>
          ))}
          <SwiperPagination />
        </Swiper>
        <SwiperNavButton
          className={cn('prev', styles.prev)}
          direction="prev"
          aria-label="Previous"
        />
        <SwiperNavButton
          className={cn('next', styles.next)}
          direction="next"
          aria-label="Next"
        />
      </div>
    </section>
  );
};
