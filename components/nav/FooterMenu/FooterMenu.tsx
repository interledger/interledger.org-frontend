import { FooterMenuFragment } from '@models/operations';
import cn from 'classnames';
import { MenuList } from '../MenuList/MenuList';
import styles from './FooterMenu.module.scss';
import { Text } from '@components/ui/Text/Text';

export interface FooterMenuProps {
  /** Optional className for FooterMenu, pass in a sass module class to override component default */
  className?: string;
  footerMenu: FooterMenuFragment;
}

export const FooterMenu = ({ className, footerMenu }: FooterMenuProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <nav className={rootClassName}>
      {footerMenu.name && <Text variant="h3">{footerMenu.name}</Text>}
      {footerMenu?.items && <MenuList menus={footerMenu.items} />}
    </nav>
  );
};
