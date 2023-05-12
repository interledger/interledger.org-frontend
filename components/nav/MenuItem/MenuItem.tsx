import cn from 'classnames';
import { MenuItemFragment } from '@models/operations';
import styles from './MenuItem.module.scss';
import Link from 'next/link';
import { MenuList } from '../MenuList/MenuList';

export interface MenuItemProps {
  /** Optional className for MenuItem, pass in a sass module class to override component default */
  className?: string;
  menuItem: MenuItemFragment | null;
}

export const MenuItem = ({ className, menuItem }: MenuItemProps) => {
  const rootClassName = cn(styles.root, className);

  if (!menuItem) {
    return null;
  }

  return (
    <li>
      {menuItem.route?.__typename === 'RouteInternal' ||
      menuItem.route?.__typename === 'RouteExternal' ? (
        <Link href={menuItem.route.url} className={rootClassName}>
          {menuItem.title}
        </Link>
      ) : (
        <span className={rootClassName}> {menuItem.title}</span>
      )}
      {menuItem.children && menuItem.children.length > 0 ? (
        <MenuList menus={menuItem.children} />
      ) : null}
    </li>
  );
};
