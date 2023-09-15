import { MenuItemFragment } from '@models/operations';
import cn from 'classnames';
import { MenuItem } from '@components/nav/MenuItem/MenuItem';
import { m } from 'framer-motion';
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
    <m.ul className={rootClassName} role="list" variants={container}>
      {menus.map((menu) =>
        menu ? <MenuItem key={menu.id} menuItem={menu} type={type} /> : null
      )}
    </m.ul>
  );
};
