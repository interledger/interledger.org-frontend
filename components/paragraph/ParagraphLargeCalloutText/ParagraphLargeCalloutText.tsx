import cn from 'classnames';
import { m } from 'framer-motion';
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
      <m.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-300px 0px 0px 0px" }}
      >
        {paragraph.largeCalloutText}
      </m.h2>
    </div>
  );
};
