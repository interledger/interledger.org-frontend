import { Logo } from '@components/icon/Logo/Logo';
import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';
import { SummitLogo } from '@components/icon/SummitLogo/SummitLogo';

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
      <div className={cn(styles.headerItem, styles.logoWrapper)}>
        <Link href="/" aria-label="Home">
          {isSummit ? (
            <SummitLogo className={styles.logo} />
          ) : (
            <Logo className={styles.logo} />
          )}
        </Link>
      </div>
      {mainMenu && (
        <div className={cn(styles.headerItem, styles.menuWrapper)}>
          <MainMenu mainMenu={mainMenu} />
        </div>
      )}
      <div className={cn(styles.headerItem, styles.siteWrapper)}>
        {isSummit ? (
          <Link href="/">Interledger Foundation Website</Link>
        ) : (
          <Link href="/summit">Interledger Summit Website</Link>
        )}
      </div>
    </header>
  );
};
