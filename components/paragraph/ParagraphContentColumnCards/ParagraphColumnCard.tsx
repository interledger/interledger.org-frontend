import { ParagraphColumnCardFragment } from '@models/operations';
import cn from 'classnames';
import styles from './ParagraphContentColumnCards.module.scss';
import { CardColumn } from '@components/layout/CardColumn/CardColumn';

export interface ParagraphColumnCardProps {
  /** Optional className for ParagraphContentColumnCards, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphColumnCardFragment;
  layout: string;
}

/**
 * ParagraphColumnCard description
 */

export const ParagraphColumnCard = ({
  className,
  paragraph,
  layout,
}: ParagraphColumnCardProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <CardColumn className={rootClassName} content={paragraph} layout={layout} />
  );
};
