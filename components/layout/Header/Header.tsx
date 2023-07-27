import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import styles from './Header.module.scss';
import { Logo } from '@components/icon/Logo/Logo';
import Link from 'next/link';

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
      <div className={cn(styles.headerItem, styles.logoWrapper)}>
        <Link href="/" aria-label="Home">
          <Logo className={styles.logo} />
        </Link>
      </div>
      {mainMenu && (
        <div className={cn(styles.headerItem, styles.menuWrapper)}>
          <MainMenu mainMenu={mainMenu} />
        </div>
      )}
      <div className={cn(styles.headerItem)}></div>
    </header>
  );
};
