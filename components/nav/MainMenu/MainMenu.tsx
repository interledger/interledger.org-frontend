import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import { MainMenuFragment } from '@models/operations';
import { menuAtom } from '@store/site';
import cn from 'classnames';
import { Variants, m } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './MainMenu.module.scss';

export interface MainMenuProps {
  /** Optional className for MainMenu, pass in a sass module class to override component default */
  className?: string;
  mainMenu: MainMenuFragment;
}

const container: Variants = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const submenu: Variants = {
  slideUp: {
    height: 0,
  },
  slideDown: {
    height: 'auto',
  },
};

export const MainMenu = ({ className, mainMenu }: MainMenuProps) => {
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [staggerComplete, setStaggerComplete] = useState(false);
  const [menuOpen] = useAtom(menuAtom);
  const isTablet = useMediaQuery('(min-width: 980px)');
  const rootClassName = cn(styles.root, className);

  const handleAnimationComplete = (state: string) => {
    setStaggerComplete(state === 'show');
  };

  useEffect(() => {
    if (!menuOpen) {
      setCurrentMenu(null);
    }
  }, [menuOpen]);

  return (
    <m.nav
      key={mainMenu.id}
      className={rootClassName}
      animate={isTablet ? 'show' : !isTablet && menuOpen ? 'show' : 'hide'}
      onAnimationComplete={handleAnimationComplete}
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
                onClick={() => setCurrentMenu(menu.id)}
                parentSelected={currentMenu === menu.id}
              >
                {!!menu.children?.length ? (
                  <m.div
                    className={styles.dropdownMenu}
                    variants={submenu}
                    animate={
                      isTablet
                        ? undefined
                        : !isTablet && currentMenu === menu.id
                        ? 'slideDown'
                        : 'slideUp'
                    }
                  >
                    {staggerComplete ? (
                      <>
                        <ul role="list">
                          {menu.children.map((menu) =>
                            menu ? (
                              <MenuItem
                                key={menu.url}
                                menuItem={menu}
                                type={'submain'}
                              />
                            ) : null
                          )}
                        </ul>
                      </>
                    ) : null}
                  </m.div>
                ) : null}
              </MenuItem>
            ) : null
          )}
        </m.ul>
      )}
    </m.nav>
  );
};
