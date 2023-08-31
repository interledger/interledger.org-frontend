import {
  MediaImage,
  MediaImageProps,
} from '@components/media/MediaImage/MediaImage';
import { VisuallyHidden } from '@components/util/VisuallyHidden/VisuallyHidden';
import { externalLink } from '@lib/helpers';
import { MediaImageFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

export interface CardImageProps extends MediaImageProps {
  /** Optional className for Card, pass in a sass module class to override component default */
  className?: string;
  media: MediaImageFragment;
}

export const CardImage = ({ className, media, ...rest }: CardImageProps) => {
  const rootClassName = cn(styles.image, className);
  return <MediaImage className={rootClassName} media={media} {...rest} />;
};

export interface CardContentProps {
  /** Optional className for Card, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

export const CardContent = ({ className, children }: CardContentProps) => {
  const rootClassName = cn(styles.content, className);
  return <div className={rootClassName}>{children}</div>;
};

export interface CardLinkProps {
  /** Optional className for Card, pass in a sass module class to override component default */
  className?: string;
  link: string;
  title?: string;
}

export const CardLink = ({ className, title, link }: CardLinkProps) => {
  const rootClassName = cn(styles.link, className);
  return (
    <Link href={link} passHref legacyBehavior>
      <a
        className={rootClassName}
        target={externalLink(link) ? '_blank' : undefined}
        rel={externalLink(link) ? 'noreferrer' : undefined}
      >
        <VisuallyHidden>{title || 'Read more'}</VisuallyHidden>
      </a>
    </Link>
  );
};

export interface CardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional className for Card, pass in a sass module class to override component default */
  className?: string;
  title?: string;
}

export const CardButton = ({ className, title, ...rest }: CardButtonProps) => {
  const rootClassName = cn(styles.link, className);
  return (
    <button className={rootClassName} {...rest}>
      <VisuallyHidden>{title || 'Select'}</VisuallyHidden>
    </button>
  );
};

export interface CardProps {
  /** Optional className for Card, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  const rootClassName = cn(styles.root, className);
  return <article className={rootClassName}>{children}</article>;
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Link = CardLink;
Card.Button = CardButton;
