import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { ParagraphHeroHeaderFragment } from '@models/operations';
import { Text } from '@components/ui/Text/Text';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { Chevron } from '@components/icon/Chevron/Chevron';
import styles from './ParagraphHeroHeader.module.scss';
import { VideoPlayer } from '@components/ui/VideoPlayer/VideoPlayer';

export interface ParagraphHeroHeaderProps {
  /** Optional className for ParagraphHeroHeader, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphHeroHeaderFragment
}

/**
 * ParagraphHeroHeader description
 */

export const ParagraphHeroHeader = ({ className, paragraph }: ParagraphHeroHeaderProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerEl = useRef<HTMLDivElement>(null);
  const rootClassName = cn(styles.root, className);
  useEffect(() => {
    if (headerEl?.current) {
      setHeaderHeight(headerEl?.current?.clientHeight);
    }
  }, [headerEl]);

  return (
    <div className={rootClassName} ref={headerEl}>
      <MediaImage className={styles.headerImage} media={paragraph.image} />
      <div className={styles.overlayContent}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <Text variant="h1">{paragraph.title}</Text>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.when}>
              <Text className={styles.infoTitle} variant="body1">When</Text>
              <Text className={styles.infoText} variant="body1">
                {paragraph.whenText}
              </Text>
            </div>
            <div className={styles.where}>
              <Text className={styles.infoTitle} variant="body1">Where</Text>
              <Text className={styles.infoText} variant="body1">
                {paragraph.whereText}
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.scrollChevron}>
          <button
            className={styles.scrollButton}
            onClick={() => window.scrollTo({
              top: headerHeight,
              left: 0,
              behavior: 'smooth'
            })}
          >
            <Chevron />
          </button>
        </div>
      </div>
    </div>
  );
};
