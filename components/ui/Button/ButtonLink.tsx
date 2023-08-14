import cn from 'classnames';
import Link, { LinkProps } from 'next/link';

import styles from './Button.module.scss';
import { Arrow } from '@components/icon/Arrow/Arrow';

export interface ButtonLinkProps extends LinkProps {
  /** Optional className for Button, pass in a sass module class to override component default */
  className?: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  className,
  children,
  ...rest
}: ButtonLinkProps) => {
  const rootClassName = cn(styles.button, className);
  const externalLink = !rest.href.toString().startsWith('/');
  return (
    <Link
      className={rootClassName}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noreferrer' : undefined}
      {...rest}
    >
      <span className={styles.titleMarkup}>{children}</span>
      <Arrow />
    </Link>
  );
};
