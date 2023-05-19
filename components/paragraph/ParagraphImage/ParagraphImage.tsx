import cn from 'classnames';
import { ParagraphImageFragment } from '@models/operations';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import styles from './ParagraphImage.module.scss';

export interface ParagraphImageProps {
  /** Optional className for ParagraphImage, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphImageFragment
}

/**
 * ParagraphImage description
 */

export const ParagraphImage = ({ className, paragraph }: ParagraphImageProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <MediaImage media={paragraph.landscapeImage} fit />
    </div>
  )
};
