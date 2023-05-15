import cn from 'classnames';
import { ParagraphHighlightedListFragment } from '@models/operations';
import styles from './ParagraphHighlightedList.module.scss';

export interface ParagraphHighlightedListProps {
  /** Optional className for ParagraphHighlightedList, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphHighlightedListFragment
}

/**
 * ParagraphHighlightedList description
 */

export const ParagraphHighlightedList = ({ className, paragraph }: ParagraphHighlightedListProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      {paragraph.listItem?.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};
