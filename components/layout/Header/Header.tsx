import { Logo } from '@components/icon/Logo/Logo';
import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';
import { SummitLogo } from '@components/icon/SummitLogo/SummitLogo';
import { HamburgerIcon } from '@components/icon/HamburgerIcon/HamburgerIcon';

export interface HeaderProps {
  /** Optional className for Header, pass in a sass module class to override component default */
  className?: string;
  mainMenu?: MainMenuFragment | null;
  isSummit?: boolean;
}

/**
 * Page header for logo and menus
 */

export const Header = ({ className, mainMenu, isSummit }: HeaderProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <header className={rootClassName}>
      <div className={styles.logoWrapper}>
        <Link href={isSummit ? '/summit' : '/'} aria-label="Home">
          {isSummit ? (
            <SummitLogo className={styles.logo} />
          ) : (
            <Logo className={styles.logo} />
          )}
        </Link>
      </div>
      <div className={styles.hamburgerWrapper}>
        <button className={styles.menuButton}>
          <HamburgerIcon />
        </button>
      </div>
      <div className={styles.navWrapper}>
        {mainMenu && (
          <div className={styles.menuWrapper}>
            <MainMenu mainMenu={mainMenu} />
          </div>
        )}
        <div className={styles.siteWrapper}>
          {isSummit ? (
            <Link href="/">Interledger Foundation Website</Link>
          ) : (
            <Link href="/summit">Interledger Summit Website</Link>
          )}
        </div>
      </div>
    </header>
  );
};
