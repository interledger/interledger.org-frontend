import cn from 'classnames';
import { DeveloperToolsMenuFragment } from '@models/operations';
import styles from './DeveloperToolsMenu.module.scss';
import { MenuList } from '../MenuList/MenuList';
import { MenuItem } from '../MenuItem/MenuItem';

export interface DeveloperToolsMenuProps {
  /** Optional className for DeveloperToolsMenu, pass in a sass module class to override component default */
  className?: string;
  developerToolsMenu: DeveloperToolsMenuFragment;
}

/**
 * DeveloperToolsMenu description
 */

export const DeveloperToolsMenu = ({
  className,
  developerToolsMenu,
}: DeveloperToolsMenuProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <nav className={rootClassName}>
      <ul role="list">
        {developerToolsMenu?.items.map((m) =>
          m ? (
            <MenuItem key={m.id} menuItem={m}>
              {!!m.children.length ? (
                <ul>
                  {m.children.map((m) => (
                    <MenuItem key={m.id} menuItem={m} />
                  ))}
                </ul>
              ) : null}
            </MenuItem>
          ) : null
        )}
      </ul>
    </nav>
  );
};
