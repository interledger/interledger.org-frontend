import cn from 'classnames';
import { ParagraphContentTitleFragment } from '@models/operations';
import styles from './ParagraphContentTitle.module.scss';

export interface ParagraphContentTitleProps {
  /** Optional className for ParagraphContentTitle, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContentTitleFragment
}

/**
 * ParagraphContentTitle description
 */

export const ParagraphContentTitle = ({ className, paragraph }: ParagraphContentTitleProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <h2>{paragraph.title}</h2>
    </div>
  );
};
