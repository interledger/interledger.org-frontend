import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import { MenuList } from '../MenuList/MenuList';
import styles from './MainMenu.module.scss';

export interface MainMenuProps {
  /** Optional className for MainMenu, pass in a sass module class to override component default */
  className?: string;
  mainMenu: MainMenuFragment;
}

export const MainMenu = ({ className, mainMenu }: MainMenuProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <nav className={rootClassName}>
      {mainMenu?.items && <MenuList menus={mainMenu.items} type="main" />}
    </nav>
  );
};
