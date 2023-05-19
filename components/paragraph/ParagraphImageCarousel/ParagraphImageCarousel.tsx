import cn from 'classnames';
import { ParagraphImageCarouselFragment } from '@models/operations';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperPagination } from '@components/ui/SwiperPagination/SwiperPagination';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { ButtonLink } from '@components/ui/Button/ButtonLink';
import { VisuallyHidden } from '@components/util/VisuallyHidden/VisuallyHidden';
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
      {paragraph?.carouselItem?.map(carouselItem => (
        <SwiperSlide className={styles.slide} key={carouselItem.id}>
          <MediaImage className={styles.headerImage} media={carouselItem.image} />
          {carouselItem?.link?.url && (
            <ButtonLink href={carouselItem.link.url}>
              <VisuallyHidden>
                {carouselItem.link?.title}
              </VisuallyHidden>
            </ButtonLink>
          )}
        </SwiperSlide>
      ))}
      <SwiperPagination />
    </Swiper>
  );
};
