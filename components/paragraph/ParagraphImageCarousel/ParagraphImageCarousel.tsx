import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { SwiperNavButton } from '@components/ui/SwiperNavButton/SwiperNavButton';
import { SwiperPagination } from '@components/ui/SwiperPagination/SwiperPagination';
import { ParagraphImageCarouselFragment } from '@models/operations';
import cn from 'classnames';
import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ParagraphImageCarousel.module.scss';

export interface ParagraphImageCarouselProps {
  /** Optional className for ParagraphImageCarousel, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphImageCarouselFragment;
}

/**
 * ParagraphImageCarousel description
 */

export const ParagraphImageCarousel = ({
  className,
  paragraph,
}: ParagraphImageCarouselProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <section className={rootClassName}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={28}
        navigation={{
          prevEl: `#prev${paragraph.id}`,
          nextEl: `#next${paragraph.id}`,
        }}
        threshold={10}
        speed={1000}
      >
        {paragraph?.carouselItem?.map((carouselItem) => (
          <SwiperSlide className={styles.slide} key={carouselItem.id}>
            <MediaImage
              className={styles.headerImage}
              media={carouselItem.image}
            />
          </SwiperSlide>
        ))}
        <SwiperPagination />
        <SwiperNavButton
          id={`prev${paragraph.id}`}
          className={cn(styles.prev)}
          direction="prev"
          aria-label="Previous"
        />
        <SwiperNavButton
          id={`next${paragraph.id}`}
          className={cn(styles.next)}
          direction="next"
          aria-label="Next"
        />
      </Swiper>
    </section>
  );
};
