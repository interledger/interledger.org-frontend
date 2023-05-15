import cn from 'classnames';
import { ParagraphImageFragment } from '@models/operations';
import styles from './ParagraphImage.module.scss';
import { MediaImage } from '@components/media/MediaImage/MediaImage';

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
  console.log({ paragraph });
  return <MediaImage className={rootClassName} media={paragraph.image} fit />
};
