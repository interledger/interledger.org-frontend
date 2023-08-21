import cn from 'classnames';
import { ParagraphScrollingLogoCarouselFragment } from '@models/operations';
import styles from './ParagraphScrollingLogoCarousel.module.scss';
import Marquee from 'react-fast-marquee';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { ContainerEdge } from '@components/layout/ContainerEdge/ContainerEdge';

export interface ParagraphScrollingLogoCarouselProps {
  /** Optional className for ParagraphScrollingLogoCarousel, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphScrollingLogoCarouselFragment;
}

/**
 * ParagraphScrollingLogoCarousel description
 */

export const ParagraphScrollingLogoCarousel = ({
  className,
  paragraph,
}: ParagraphScrollingLogoCarouselProps) => {
  const rootClassName = cn(styles.root, className);
  return !!paragraph.images.length ? (
    <ContainerEdge className={rootClassName}>
      <Marquee pauseOnHover>
        {paragraph.images.map((i) => (
          <MediaImage className={styles.logo} key={i.id} media={i} />
        ))}
      </Marquee>
    </ContainerEdge>
  ) : null;
};
