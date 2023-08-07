import { HamburgerIcon } from '@components/icon/HamburgerIcon/HamburgerIcon';
import { Logo } from '@components/icon/Logo/Logo';
import { SummitLogo } from '@components/icon/SummitLogo/SummitLogo';
import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import { menuAtom, menuOpenAtom } from '@store/site';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';

import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useScrollLock } from '@hooks/useScrollLock';

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
  const [menuOpen] = useAtom(menuAtom);
  const [, setMenuOpen] = useAtom(menuOpenAtom);
  const [menuRef, setLock] = useScrollLock();
  const router = useRouter();

  useEffect(() => {
    setLock(menuOpen);
  }, [menuOpen, setLock]);

  useEffect(() => {
    // Close menu when navigation triggered
    const handleRouteChange = () => {
      setMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, setMenuOpen]);

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
        <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
          <HamburgerIcon />
        </button>
      </div>
      <div
        className={cn(styles.navWrapper, {
          [styles.menuOpen]: menuOpen,
          [styles.dark]: isSummit,
        })}
        ref={menuRef}
      >
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
