import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import { MenuList } from '../MenuList/MenuList';
import styles from './MainMenu.module.scss';
import { m } from 'framer-motion';
import { menuAtom } from '@store/site';
import { useAtom } from 'jotai';
import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';

export interface MainMenuProps {
  /** Optional className for MainMenu, pass in a sass module class to override component default */
  className?: string;
  mainMenu: MainMenuFragment;
}

export const MainMenu = ({ className, mainMenu }: MainMenuProps) => {
  const [menuOpen] = useAtom(menuAtom);
  const isTablet = useMediaQuery('(min-width: 910px)');
  const rootClassName = cn(styles.root, className);
  return (
    <m.nav
      className={rootClassName}
      animate={isTablet ? 'show' : !isTablet && menuOpen ? 'show' : 'hide'}
    >
      {mainMenu?.items && <MenuList menus={mainMenu.items} type="main" />}
    </m.nav>
  );
};
