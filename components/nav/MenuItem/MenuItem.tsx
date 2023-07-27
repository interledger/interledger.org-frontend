import cn from 'classnames';
import { MenuItemFragment } from '@models/operations';
import styles from './MenuItem.module.scss';
import Link from 'next/link';
import { MenuList } from '../MenuList/MenuList';
import { useRouter } from 'next/router';

export interface MenuItemProps {
  /** Optional className for MenuItem, pass in a sass module class to override component default */
  className?: string;
  menuItem: MenuItemFragment | null;
}

export const MenuItem = ({ className, menuItem }: MenuItemProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const rootClassName = cn(styles.root, className);

  if (!menuItem) {
    return null;
  }

  return (
    <li>
      {menuItem.url ? (
        <Link
          href={menuItem.url}
          className={cn(rootClassName, {
            [styles.active]: menuItem.url === currentRoute,
          })}
        >
          {menuItem.title}
        </Link>
      ) : (
        <span className={rootClassName}> {menuItem.title}</span>
      )}
      {/* {!!menuItem.children.length ? (
        <MenuList menus={menuItem.children} />
      ) : null} */}
    </li>
  );
};
