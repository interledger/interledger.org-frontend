import { useRef } from 'react';
import cn from 'classnames';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { m, useTransform, useScroll, MotionValue } from 'framer-motion';
import { ParagraphImageGalleryFragment } from '@models/operations';
import styles from './ParagraphImageGallery.module.scss';

export interface ParagraphImageGalleryProps {
  /** Optional className for ParagraphImageGallery, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphImageGalleryFragment
}

/**
 * ParagraphImageGallery description
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
        animateFromDistance: 200,
        animateToDistance: 0,
        animateFromOffset: "start end",
        animateToOffset: "end start"
      }
      break;
    case 2:
      animationValues = {
        animateFromDistance: 350,
        animateToDistance: -50,
        animateFromOffset: "start end",
        animateToOffset: "end start"
      }
      break;
    case 3:
      animationValues = {
        animateFromDistance: 450,
        animateToDistance: -150,
        animateFromOffset: "start end",
        animateToOffset: "end start"
      }
      break;
    case 4:
      animationValues = {
        animateFromDistance: 100,
        animateToDistance: -100,
        animateFromOffset: "start end",
        animateToOffset: "end start"
      }
      break;
  }

  return animationValues;
}

const GalleryImage = ({ className, image }: any) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: [image.animateFromOffset, image.animateToOffset]
  });
  const y = useParallax(
    scrollYProgress,
    image.animateFromDistance,
    image.animateToDistance
  );

  return (
    <div className={className}>
      <m.div
        className={styles.image}
        ref={imageRef}
        style={{ y }}
      >
        <MediaImage media={image} className={styles.mediaImage} />
      </m.div>
    </div>
  )
}

export const ParagraphImageGallery = ({ className, paragraph }: ParagraphImageGalleryProps) => {
  const rootClassName = cn(styles.root, className);

  let count = 0;
  const imagesWithAnimationValues = paragraph.multipleImages?.map(image => {
    count += 1;
    if (count === 5) {
      count = 1;
    }

    const animationValues = getAnimationValues(count);

    return (
      {
        ...image,
        ...animationValues,
      }
    )
  });

  return (
    <div className={rootClassName}>
      {imagesWithAnimationValues?.map(image => (
        <GalleryImage
          key={image.id}
          className={styles.imageContainer}
          image={image}
        />
      ))}
    </div>
  );
};
