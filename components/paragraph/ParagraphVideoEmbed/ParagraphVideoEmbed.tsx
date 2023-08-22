import cn from 'classnames';
import { ParagraphVideoEmbedFragment } from '@models/operations';
import styles from './ParagraphVideoEmbed.module.scss';
import { Video } from '@components/ui/VideoPlayer/VideoPlayer';

export interface ParagraphVideoEmbedProps {
  /** Optional className for ParagraphVideoEmbed, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphVideoEmbedFragment;
}

/**
 * ParagraphVideoEmbed description
 */

export const ParagraphVideoEmbed = ({
  className,
  paragraph,
}: ParagraphVideoEmbedProps) => {
  const rootClassName = cn(styles.root, className);

  return paragraph.remoteVideo?.mediaOembedVideo ? (
    <section className={rootClassName}>
      <Video url={paragraph.remoteVideo.mediaOembedVideo} />
    </section>
  ) : null;
};
