import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import { MenuItem } from '@components/nav/MenuItem/MenuItem';

import styles from './MenuList.module.scss';

export interface MenuListProps {
  /** Optional className for MenuList, pass in a sass module class to override component default */
  className?: string;
  menus: Array<MenuItemFragment | null>;
  type?: 'default' | 'main';
}

const container = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/**
 * Returns a list of MenuItems
 */

export const MenuList = ({
  className,
  menus,
  type = 'default',
}: MenuListProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <ul className={rootClassName} role="list">
      {menus.map((m) =>
        m ? <MenuItem key={m.url} menuItem={m} type={type} /> : null
      )}
    </ul>
  );
};
