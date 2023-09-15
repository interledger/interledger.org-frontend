import cn from 'classnames';
import {
  ParagraphLogoLinkFragment,
  ParagraphScrollingLogoCarouselFragment,
} from '@models/operations';
import styles from './ParagraphScrollingLogoCarousel.module.scss';
import Marquee from 'react-fast-marquee';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { ContainerEdge } from '@components/layout/ContainerEdge/ContainerEdge';
import Link from 'next/link';
import { VisuallyHidden } from '@components/util/VisuallyHidden/VisuallyHidden';
import { Grid } from '@components/layout/Grid/Grid';
import { Container } from '@components/layout/Container/Container';

export interface ParagraphLogoLinkProps {
  /** Optional className for ParagraphScrollingLogoCarousel, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphLogoLinkFragment;
}

/**
 * ParagraphScrollingLogoCarousel description
 */

export const ParagraphLogoLink = ({
  className,
  paragraph,
}: ParagraphLogoLinkProps) => {
  const rootClassName = cn(styles.logo, className);
  return paragraph.link.url ? (
    <Link className={rootClassName} href={paragraph.link.url} target="_blank">
      <MediaImage media={paragraph.singleImage} fit />
      {paragraph.link.title ? (
        <VisuallyHidden>{paragraph.link.title}</VisuallyHidden>
      ) : null}
    </Link>
  ) : (
    <MediaImage className={rootClassName} media={paragraph.singleImage} />
  );
};

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
  return !!paragraph.logos.length ? (
    <section className={rootClassName}>
      <Grid cols={1} colsTablet={2} colsDesktop={3}>
        {paragraph.logos.map((logo) => (
          <ParagraphLogoLink key={logo.id} paragraph={logo} />
        ))}
      </Grid>
    </section>
  ) : null;
};
