import cn from 'classnames';
import { ParagraphTeaserFragment } from '@models/operations';
import styles from './ParagraphTeaser.module.scss';
import { MediaImage } from '@components/media/MediaImage/MediaImage';

export interface ParagraphTeaserProps {
  /** Optional className for ParagraphTeaser, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphTeaserFragment;
  imageType: 'squareImage' | 'landscapeImage';
}

/**
 * ParagraphTeaser description
 */

export const ParagraphTeaser = ({ className, paragraph, imageType }: ParagraphTeaserProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <MediaImage media={paragraph[imageType]} fit />
    </div>
  );
};
