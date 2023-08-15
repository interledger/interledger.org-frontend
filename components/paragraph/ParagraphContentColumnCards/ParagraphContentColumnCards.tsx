import cn from 'classnames';
import { ParagraphContentColumnCardsFragment } from '@models/operations';
import styles from './ParagraphContentColumnCards.module.scss';

export interface ParagraphContentColumnCardsProps {
  /** Optional className for ParagraphContentColumnCards, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContentColumnCardsFragment;
}

/**
 * ParagraphContentColumnCards description
 */

export const ParagraphContentColumnCards = ({
  className,
  paragraph,
}: ParagraphContentColumnCardsProps) => {
  const rootClassName = cn(styles.root, className);
  return <section className={rootClassName}></section>;
};
