import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import styles from './Header.module.scss';

export interface HeaderProps {
  /** Optional className for Header, pass in a sass module class to override component default */
  className?: string;
  mainMenu?: MainMenuFragment | null;
}

/**
 * Page header for logo and menus
 */

export const Header = ({ className, mainMenu }: HeaderProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <header className={rootClassName}>
      {mainMenu && <MainMenu mainMenu={mainMenu} />}
    </header>
  );
};
