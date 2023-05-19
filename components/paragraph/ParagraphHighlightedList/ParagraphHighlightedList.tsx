import cn from 'classnames';
import { m } from 'framer-motion';
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
        <m.h2
          key={index}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, margin: "-200px" }}
        >
          {item}
        </m.h2>
      ))}
    </div>
  );
};
