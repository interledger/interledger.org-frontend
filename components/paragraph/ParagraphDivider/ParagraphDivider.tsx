import cn from 'classnames';
import { ParagraphDividerFragment } from '@models/operations';
import styles from './ParagraphDivider.module.scss';

export interface ParagraphDividerProps {
  /** Optional className for ParagraphDivider, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphDividerFragment
}

/**
 * ParagraphDivider description
 */

export const ParagraphDivider = ({ className }: ParagraphDividerProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
