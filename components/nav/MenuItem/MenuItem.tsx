import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuItem.module.scss';
import { ReactNode } from 'react';
import { m } from 'framer-motion';

export interface MenuItemProps {
  /** Optional className for MenuItem, pass in a sass module class to override component default */
  className?: string;
  menuItem: MenuItemFragment | null;
  type?: 'default' | 'main';
  children?: ReactNode;
}

const item = {
  hide: { opacity: 0, scale: 0.8, y: 30 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export const MenuItem = ({
  className,
  menuItem,
  type = 'default',
  children,
}: MenuItemProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const rootClassName = cn(styles.root, className);

  if (!menuItem) {
    return null;
  }

  return (
    <m.li
      className={rootClassName}
      variants={item}
      transition={{ type: 'spring' }}
    >
      {menuItem.url ? (
        <Link
          href={menuItem.url}
          className={cn(styles.link, {
            [styles.active]: menuItem.url === currentRoute,
            [styles.main]: type === 'main',
          })}
        >
          {menuItem.title}
        </Link>
      ) : (
        <span
          className={cn(styles.link, {
            [styles.active]: menuItem.url === currentRoute,
            [styles.main]: type === 'main',
          })}
        >
          {menuItem.title}
        </span>
      )}
      {children}
    </m.li>
  );
};
