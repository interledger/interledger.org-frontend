/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';

import styles from './Img.module.scss';
import {
  ImageStyleFragment,
  ResponsiveImageStyleFragment,
} from '@models/operations';
import { Maybe } from '@models/graphql';

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Optional className for Img, pass in a sass module class to override component default */
  className?: string;
  imageStyle?: Maybe<ImageStyleFragment>;
  responsiveImageStyle?: Maybe<ResponsiveImageStyleFragment>;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  dimensions?: boolean;
}

/**
 * Img description
 */

export const Img = ({
  className,
  imageStyle,
  responsiveImageStyle,
  sizes = '100vw',
  priority,
  alt = '',
  dimensions = true,
  ...rest
}: ImgProps) => {
  const rootClassName = cn(styles.root, className);
  const loading = priority ? 'eager' : 'lazy';

  return (
    <>
      {responsiveImageStyle ? (
        <img
          className={rootClassName}
          src={responsiveImageStyle.path ?? undefined}
          srcSet={responsiveImageStyle.srcSetPath ?? undefined}
          loading={loading}
          width={
            dimensions && responsiveImageStyle.width
              ? responsiveImageStyle.width
              : undefined
          }
          height={
            dimensions && responsiveImageStyle.height
              ? responsiveImageStyle.height
              : undefined
          }
          sizes={sizes}
          alt={alt}
          {...rest}
        />
      ) : imageStyle ? (
        <img
          className={rootClassName}
          src={imageStyle.path ?? undefined}
          loading={loading}
          width={dimensions && imageStyle.width ? imageStyle.width : undefined}
          height={
            dimensions && imageStyle.height ? imageStyle.height : undefined
          }
          alt={alt}
          {...rest}
        />
      ) : null}
    </>
  );
};
