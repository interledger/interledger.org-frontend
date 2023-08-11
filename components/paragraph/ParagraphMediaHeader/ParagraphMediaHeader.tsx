import cn from 'classnames';
import { ParagraphMediaHeaderFragment } from '@models/operations';
import styles from './ParagraphMediaHeader.module.scss';
import { VideoPlayer } from '@components/ui/VideoPlayer/VideoPlayer';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { MediaHeader } from '@components/ui/MediaHeader/MediaHeader';

export interface ParagraphMediaHeaderProps {
  /** Optional className for ParagraphMediaHeader, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphMediaHeaderFragment;
}

/**
 * ParagraphMediaHeader description
 */

export const ParagraphMediaHeader = ({
  className,
  paragraph,
}: ParagraphMediaHeaderProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <>
      <MediaHeader image={paragraph.image} video={paragraph.video} />
    </>
  );
};
