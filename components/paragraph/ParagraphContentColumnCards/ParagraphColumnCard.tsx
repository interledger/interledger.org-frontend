import { ParagraphColumnCardFragment } from '@models/operations';
import cn from 'classnames';
import styles from './ParagraphContentColumnCards.module.scss';

export interface ParagraphColumnCardProps {
  /** Optional className for ParagraphContentColumnCards, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphColumnCardFragment;
}

/**
 * ParagraphContentColumnCards description
 */

export const ParagraphContentColumnCards = ({
  className,
  paragraph,
}: ParagraphColumnCardProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
