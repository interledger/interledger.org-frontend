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
      {!!media.mediaImage.responsiveVariations?.length ? (
        <Image
          className={rootClassName}
          imageStyle={media.mediaImage.responsiveVariations[0]}
          alt={media.mediaImage.alt ?? ''}
          {...rest}
        />
      ) : !!media.mediaImage.variations?.length ? (
        <Image
          className={rootClassName}
          imageStyle={media.mediaImage.variations[0]}
          alt={media.mediaImage.alt ?? ''}
          {...rest}
        />
      ) : null}
    </>
  );
};
