import cn from 'classnames';
import { ParagraphImageFullWidthFragment } from '@models/operations';
import styles from './ParagraphImageFullWidth.module.scss';
import { MediaImage } from '@components/media/MediaImage/MediaImage';

export interface ParagraphImageFullWidthProps {
  /** Optional className for ParagraphImageFullWidth, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphImageFullWidthFragment;
}

/**
 * ParagraphImageFullWidth description
 */

export const ParagraphImageFullWidth = ({
  className,
  paragraph,
}: ParagraphImageFullWidthProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <section className={rootClassName}>
      <MediaImage media={paragraph.landscapeImage} fit />
    </section>
  );
};
