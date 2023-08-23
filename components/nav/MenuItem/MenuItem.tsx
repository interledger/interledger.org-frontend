import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuItem.module.scss';
import { Children, MouseEventHandler, ReactNode } from 'react';
import { m } from 'framer-motion';
import { Arrow } from '@components/icon/Arrow/Arrow';
import { WrapLastWordInSpan } from '@components/util/WrapLastWordInSpan/WrapLastWordInSpan';

export interface MenuItemProps {
  /** Optional className for MenuItem, pass in a sass module class to override component default */
  className?: string;
  menuItem: MenuItemFragment | null;
  type?: 'default' | 'main' | 'submain';
  children?: ReactNode;
  parentSelected?: boolean;
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
  parentSelected,
  onClick,
}: MenuItemProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  if (!menuItem) {
    return null;
  }

  const rootClassName = cn(
    styles.root,
    {
      [styles.active]: menuItem.url === currentRoute,
      [styles.main]: type === 'main',
      [styles.submain]: type === 'submain',
    },

    className
  );

  const hasChildren = !!Children.toArray(children).length;

  return (
    <m.li
      className={rootClassName}
      variants={item}
      transition={{ type: 'spring' }}
    >
      {menuItem.url ? (
        <Link href={menuItem.url} className={cn(styles.link)}>
          {menuItem.title}
        </Link>
      ) : (
        <button className={cn(styles.link)} onClick={onClick}>
          {menuItem.title}
          {hasChildren ? (
            <span className={styles.arrow}>
              <m.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.045 25.829"
                animate={{ rotate: parentSelected ? 90 : 0 }}
              >
                <path
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1.414 24.414 11.631-11.5-11.631-11.5"
                />
              </m.svg>
            </span>
          ) : null}
        </button>
      )}
      {children}
    </m.li>
  );
};
