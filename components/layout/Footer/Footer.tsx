import { FooterMenuFragment, SocialFragment } from '@models/operations';
import cn from 'classnames';
import { FooterMenu } from '@components/nav/FooterMenu/FooterMenu';
import styles from './Footer.module.scss';
import { Text } from '@components/ui/Text/Text';
import { Social } from '@components/nav/Social/Social';

export interface FooterProps {
  /** Optional className for Footer, pass in a sass module class to override component default */
  className?: string;
  foundationFooterMenu?: FooterMenuFragment | null;
  summitFooterMenu?: FooterMenuFragment | null;
  social?: SocialFragment | null;
}

export const Footer = ({
  className,
  foundationFooterMenu,
  summitFooterMenu,
  social,
}: FooterProps) => {
  const rootClassName = cn(styles.root, className);
  const year = new Date().getFullYear();
  return (
    <footer className={rootClassName}>
      <div className={styles.legal}>
        <Text variant="body2">
          Documentation licensed under CC BY 4.0.
          <br />
          &copy; {year}, Interledger Foundation
        </Text>
      </div>
      {social && <Social className={styles.social} social={social} />}
      {foundationFooterMenu && (
        <FooterMenu
          className={styles.foundationMenu}
          footerMenu={foundationFooterMenu}
        />
      )}
      {summitFooterMenu && (
        <FooterMenu
          className={styles.summitMenu}
          footerMenu={summitFooterMenu}
        />
      )}
    </footer>
  );
};
