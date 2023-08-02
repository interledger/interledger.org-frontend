import { FooterMenuFragment } from '@models/operations';
import cn from 'classnames';
import { FooterMenu } from '@components/nav/FooterMenu/FooterMenu';
import styles from './Footer.module.scss';
import { Text } from '@components/ui/Text/Text';

export interface FooterProps {
  /** Optional className for Footer, pass in a sass module class to override component default */
  className?: string;
  foundationFooterMenu?: FooterMenuFragment | null;
  summitFooterMenu?: FooterMenuFragment | null;
}

export const Footer = ({
  className,
  foundationFooterMenu,
  summitFooterMenu,
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
