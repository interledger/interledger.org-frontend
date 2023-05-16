import cn from 'classnames';
import { ParagraphImageCarouselFragment } from '@models/operations';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperPagination } from '@components/ui/SwiperPagination/SwiperPagination';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import 'swiper/css';
import styles from './ParagraphImageCarousel.module.scss';

export interface ParagraphImageCarouselProps {
  /** Optional className for ParagraphImageCarousel, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphImageCarouselFragment
}

/**
 * ParagraphImageCarousel description
 */

export const ParagraphImageCarousel = ({ className, paragraph }: ParagraphImageCarouselProps) => {
  const rootClassName = cn(styles.root, className);
  console.log({ paragraph });
  return (
    <Swiper
      className={rootClassName}
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
      {paragraph?.multipleImages?.map(image => (
        <SwiperSlide className={styles.slide} key={image.id}>
          <MediaImage className={styles.headerImage} media={image} key={image.id} />
        </SwiperSlide>
      ))}
      <SwiperPagination />
    </Swiper>
  );
};
