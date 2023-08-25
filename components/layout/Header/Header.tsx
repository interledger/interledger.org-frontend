import { HamburgerIcon } from '@components/icon/HamburgerIcon/HamburgerIcon';
import { Logo } from '@components/icon/Logo/Logo';
import { SummitLogo } from '@components/icon/SummitLogo/SummitLogo';
import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import { MainMenuFragment } from '@models/operations';
import { menuAtom, menuOpenAtom } from '@store/site';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';

import { CloseIcon } from '@components/icon/CloseIcon/CloseIcon';
import { useScrollLock } from '@hooks/useScrollLock';
import { m } from 'framer-motion';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
  const [menuOpen] = useAtom(menuAtom);

  const [, setMenuOpen] = useAtom(menuOpenAtom);
  const [menuRef, setLock] = useScrollLock();
  const router = useRouter();

  const rootClassName = cn(styles.root, className);

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
        <m.button
          key={menuOpen ? 'open' : 'close'}
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </m.button>
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
          <Link href={isSummit ? '/' : '/summit'} aria-label="Home">
            <span className={styles.visitLable}>Visit</span>
            {isSummit ? (
              <Logo className={styles.visitLogo} />
            ) : (
              <SummitLogo className={styles.visitLogo} />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
