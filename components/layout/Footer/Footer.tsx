import { FooterMenuFragment } from '@models/operations';
import cn from 'classnames';
import { FooterMenu } from '@components/nav/FooterMenu/FooterMenu';
import styles from './Footer.module.scss';

export interface FooterProps {
  /** Optional className for Footer, pass in a sass module class to override component default */
  className?: string;
  footerMenu?: FooterMenuFragment | null;
}

export const Footer = ({ className, footerMenu }: FooterProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <footer className={rootClassName}>
      {footerMenu && <FooterMenu footerMenu={footerMenu} />}
    </footer>
  );
};
