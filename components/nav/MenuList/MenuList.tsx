import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import { MenuItem } from '@components/nav/MenuItem/MenuItem';

import styles from './MenuList.module.scss';

export interface MenuListProps {
  /** Optional className for MenuList, pass in a sass module class to override component default */
  className?: string;
  menus: Array<MenuItemFragment | null>;
}

/**
 * Returns a list of MenuItems
 */

export const MenuList = ({ className, menus }: MenuListProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <ul className={rootClassName} role="list">
      {menus.map((m) => {
        if (
          m?.route?.__typename === 'RouteInternal' ||
          m?.route?.__typename === 'RouteExternal'
        ) {
          return <MenuItem key={m?.route.url} menuItem={m} />;
        }
      })}
    </ul>
  );
};
