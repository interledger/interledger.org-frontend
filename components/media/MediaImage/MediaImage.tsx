import { MediaImageFragment } from '@models/operations';
import cn from 'classnames';
import styles from './MediaImage.module.scss';
import { Image, ImageProps } from '../Image/Image';

export interface MediaImageProps extends ImageProps {
  /** Optional className for MediaImage, pass in a sass module class to override component default */
  className?: string;
  media: MediaImageFragment;
  alt?: string;
}

/**
 * MediaImage description
 */

export const MediaImage = ({
  className,
  media,
  alt,
  ...rest
}: MediaImageProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <>
      {media.mediaImage.responsive ? (
        <Image
          className={rootClassName}
          responsiveImageStyle={media.mediaImage.responsive}
          alt={media.mediaImage.alt ?? ''}
          {...rest}
        />
      ) : media.mediaImage.style ? (
        <Image
          className={rootClassName}
          imageStyle={media.mediaImage.style}
          alt={media.mediaImage.alt ?? ''}
          {...rest}
        />
      ) : null}
    </>
  );
};
