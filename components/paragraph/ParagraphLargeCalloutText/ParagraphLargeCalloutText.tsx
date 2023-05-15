import cn from 'classnames';
import { ParagraphLargeCalloutTextFragment } from '@models/operations';
import styles from './ParagraphLargeCalloutText.module.scss';

export interface ParagraphLargeCalloutTextProps {
  /** Optional className for ParagraphLargeCalloutText, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphLargeCalloutTextFragment
}

/**
 * ParagraphLargeCalloutText description
 */

export const ParagraphLargeCalloutText = ({ className, paragraph }: ParagraphLargeCalloutTextProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <h2>{paragraph.largeCalloutText}</h2>
    </div>
  );
};
