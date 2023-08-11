import { useRef } from 'react';
import cn from 'classnames';
import { ParagraphHighlightedSpeakersFragment } from '@models/operations';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { m, useTransform, useScroll, MotionValue } from 'framer-motion';
import styles from './ParagraphHighlightedSpeakers.module.scss';

export interface ParagraphHighlightedSpeakersProps {
  /** Optional className for ParagraphHighlightedSpeakers, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphHighlightedSpeakersFragment;
}

interface SpeakerProps {
  className?: string;
  speaker: any;
  // speaker: ParagraphHighlightedSpeakersFragment['speakers'][0];
}

/**
 * ParagraphHighlightedSpeakers description
 */

const useParallax = (
  value: MotionValue<number>,
  animateFromDistance: number,
  animateToDistance: number
) => useTransform(value, [0, 1], [animateFromDistance, animateToDistance]);

const getAnimationValues = (count: number) => {
  let animationValues = {};
  switch (count) {
    case 1:
      animationValues = {
        animateFromDistance: 150,
        animateToDistance: -450,
        animateFromOffset: 'end end',
        animateToOffset: 'end start',
      };
      break;
    case 2:
      animationValues = {
        animateFromDistance: 250,
        animateToDistance: -100,
        animateFromOffset: 'start end',
        animateToOffset: 'end start',
      };
      break;
    case 3:
      animationValues = {
        animateFromDistance: 250,
        animateToDistance: -300,
        animateFromOffset: 'start end',
        animateToOffset: 'end center',
      };
      break;
    case 4:
      animationValues = {
        animateFromDistance: 300,
        animateToDistance: -100,
        animateFromOffset: 'start end',
        animateToOffset: 'end start',
      };
      break;
  }

  return animationValues;
};

const Speaker = ({ className, speaker }: SpeakerProps) => {
  const speakerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: speakerRef,
    offset: [speaker.animateFromOffset, speaker.animateToOffset],
  });
  const y = useParallax(
    scrollYProgress,
    speaker.animateFromDistance,
    speaker.animateToDistance
  );

  return (
    <div className={className}>
      <m.div className={styles.speaker} ref={speakerRef} style={{ y }}>
        <MediaImage media={speaker.teaser.squareImage} />
        <h2>{speaker.title}</h2>
        <p>CEO, Coil</p>
      </m.div>
    </div>
  );
};

export const ParagraphHighlightedSpeakers = ({
  className,
  paragraph,
}: ParagraphHighlightedSpeakersProps) => {
  const rootClassName = cn(styles.root, className);

  let count = 0;
  const speakersWithAnimationValues = paragraph.speakers?.map((speaker) => {
    count += 1;
    if (count === 5) {
      count = 0;
    }
    const animationValues = getAnimationValues(count);

    return {
      ...speaker,
      ...animationValues,
    };
  });

  return (
    <section className={rootClassName}>
      {speakersWithAnimationValues?.map((speaker) => (
        <Speaker
          key={speaker.id}
          className={styles.speakerContainer}
          speaker={speaker}
        />
      ))}
    </section>
  );
};
