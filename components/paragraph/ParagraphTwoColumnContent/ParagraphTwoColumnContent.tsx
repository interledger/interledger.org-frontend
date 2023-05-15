import cn from 'classnames';
import { ParagraphTwoColumnContentFragment } from '@models/operations';
import styles from './ParagraphTwoColumnContent.module.scss';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';

export interface ParagraphTwoColumnContentProps {
  /** Optional className for ParagraphTwoColumnContent, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphTwoColumnContentFragment
}

/**
 * ParagraphTwoColumnContent description
 */

export const ParagraphTwoColumnContent = ({ className, paragraph }: ParagraphTwoColumnContentProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      {paragraph.firstColumn && (
        <div className={cn(styles.column, styles.firstColumn)}>
          <Paragraphs paragraphs={paragraph.firstColumn} />
        </div>
      )}
      {paragraph.secondColumn && (
        <div className={cn(styles.column, styles.secondColumn)}>
          <Paragraphs paragraphs={paragraph.secondColumn} />
        </div>
      )}
    </div>
  );
};
