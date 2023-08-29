/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';

import { Maybe } from '@models/graphql';
import {
  ImageStyleFragment,
  ResponsiveImageStyleFragment,
} from '@models/operations';
import styles from './Img.module.scss';

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Optional className for Img, pass in a sass module class to override component default */
  className?: string;
  imageStyle?: Maybe<ImageStyleFragment> | Maybe<ResponsiveImageStyleFragment>;
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
      {imageStyle?.__typename === 'ResponsiveImageStyleDerivative' ? (
        <img
          className={rootClassName}
          src={imageStyle.url ?? undefined}
          srcSet={imageStyle.srcSet ?? undefined}
          loading={loading}
          width={dimensions && imageStyle.width ? imageStyle.width : undefined}
          height={
            dimensions && imageStyle.height ? imageStyle.height : undefined
          }
          sizes={sizes}
          alt={alt}
          {...rest}
        />
      ) : imageStyle ? (
        <img
          className={rootClassName}
          src={imageStyle.url ?? undefined}
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
