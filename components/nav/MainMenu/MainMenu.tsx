import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import { MenuList } from '../MenuList/MenuList';
import styles from './MainMenu.module.scss';
import { m } from 'framer-motion';
import { menuAtom } from '@store/site';
import { useAtom } from 'jotai';
import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import { MenuItem } from '../MenuItem/MenuItem';

export interface MainMenuProps {
  /** Optional className for MainMenu, pass in a sass module class to override component default */
  className?: string;
  mainMenu: MainMenuFragment;
}

const container = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const MainMenu = ({ className, mainMenu }: MainMenuProps) => {
  const [menuOpen] = useAtom(menuAtom);
  const isTablet = useMediaQuery('(min-width: 910px)');
  const rootClassName = cn(styles.root, className);
  return (
    <m.nav
      className={rootClassName}
      animate={isTablet ? 'show' : !isTablet && menuOpen ? 'show' : 'hide'}
    >
      {mainMenu?.items && (
        <m.ul role="list" variants={container}>
          {mainMenu?.items.map((menu) =>
            menu ? (
              <MenuItem
                className={cn({
                  [styles.dropdown]: !!menu.children?.length,
                })}
                key={menu.url}
                menuItem={menu}
                type={'main'}
              >
                {!!menu.children?.length ? (
                  <div className={styles.dropdownMenu}>
                    <m.ul role="list" variants={container}>
                      {menu.children.map((menu) =>
                        menu ? (
                          <MenuItem key={menu.url} menuItem={menu} />
                        ) : null
                      )}
                    </m.ul>
                  </div>
                ) : null}
              </MenuItem>
            ) : null
          )}
        </m.ul>
      )}
    </m.nav>
  );
};
