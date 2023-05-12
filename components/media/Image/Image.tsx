/* eslint-disable @next/next/no-img-element */
import { Maybe } from '@models/graphql';
import {
  ImageStyleFragment,
  ResponsiveImageStyleFragment,
} from '@models/operations';
import cn from 'classnames';
import Head from 'next/head';
import styles from './Image.module.scss';
import { Img } from '@components/media/Img/Img';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Optional className for Image, pass in a sass module class to override component default */
  className?: string;
  imageStyle?: Maybe<ImageStyleFragment>;
  responsiveImageStyle?: Maybe<ResponsiveImageStyleFragment>;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  fit?: boolean;
}

export const Image = ({
  className,
  imageStyle,
  responsiveImageStyle,
  sizes = '100vw',
  priority,
  fit,
  alt = '',
  ...rest
}: ImageProps) => {
  if (!imageStyle && !responsiveImageStyle) {
    return null;
  }

  const rootClassName = cn(
    styles.root,
    { [styles.withPadding]: !fit },
    className
  );

  let aspectRatio = 1;
  if (imageStyle) {
    aspectRatio = Number(imageStyle.width) / Number(imageStyle.height);
  }
  if (responsiveImageStyle) {
    aspectRatio =
      Number(responsiveImageStyle.width) / Number(responsiveImageStyle.height);
  }

  const linkProps: React.DetailedHTMLProps<
    React.LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > = {
    imageSrcSet: responsiveImageStyle?.srcSetPath
      ? responsiveImageStyle.srcSetPath
      : undefined,
    imageSizes: sizes,
    crossOrigin: rest.crossOrigin,
  };

  return (
    <>
      <div
        className={rootClassName}
        style={!fit ? { aspectRatio: aspectRatio } : undefined}
      >
        <Img
          responsiveImageStyle={responsiveImageStyle}
          imageStyle={imageStyle}
          priority={priority}
          sizes={sizes}
          alt={alt}
          {...rest}
        />
      </div>
      {priority ? (
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would likely cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        <Head>
          <link
            rel="preload"
            as="image"
            href={
              responsiveImageStyle?.srcSetPath
                ? undefined
                : imageStyle?.path
                ? imageStyle.path
                : undefined
            }
            {...linkProps}
          />
        </Head>
      ) : null}
    </>
  );
};
