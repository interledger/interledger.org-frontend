import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuItem.module.scss';
import { Children, MouseEventHandler, ReactNode } from 'react';
import { m } from 'framer-motion';
import { Arrow } from '@components/icon/Arrow/Arrow';

export interface MenuItemProps {
  /** Optional className for MenuItem, pass in a sass module class to override component default */
  className?: string;
  menuItem: MenuItemFragment | null;
  type?: 'default' | 'main' | 'submain';
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  onClick,
}: MenuItemProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const rootClassName = cn(styles.root, className);

  if (!menuItem) {
    return null;
  }

  const hasChildren = !!Children.toArray(children).length;

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
            [styles.submain]: type === 'submain',
          })}
        >
          {menuItem.title}
        </Link>
      ) : (
        <button
          className={cn(styles.link, {
            [styles.active]: menuItem.url === currentRoute,
            [styles.main]: type === 'main',
            [styles.submain]: type === 'submain',
          })}
          onClick={onClick}
        >
          {menuItem.title}
          {hasChildren ? (
            <m.span
              className={styles.arrow}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Arrow />
            </m.span>
          ) : null}
        </button>
      )}
      {children}
    </m.li>
  );
};
