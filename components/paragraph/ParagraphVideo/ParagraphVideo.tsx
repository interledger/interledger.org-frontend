import cn from 'classnames';
import { ParagraphVideoFragment } from '@models/operations';
import styles from './ParagraphVideo.module.scss';
import { VideoPlayer } from '@components/ui/VideoPlayer/VideoPlayer';
import { ContainerEdge } from '@components/layout/ContainerEdge/ContainerEdge';

export interface ParagraphVideoProps {
  /** Optional className for ParagraphVideo, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphVideoFragment
}

/**
 * ParagraphVideo description
 */

export const ParagraphVideo = ({ className, paragraph }: ParagraphVideoProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <ContainerEdge className={rootClassName}>
      {paragraph.video && (
        <VideoPlayer
          className={styles.headerMedia}
          video={paragraph.video}
          image={paragraph.image}
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
          controls={false}
          setHeight
        />
      )}
    </ContainerEdge>
  );
};
