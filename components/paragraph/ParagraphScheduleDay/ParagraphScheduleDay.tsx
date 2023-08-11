import cn from 'classnames';
import { ParagraphScheduleDayFragment } from '@models/operations';
import styles from './ParagraphScheduleDay.module.scss';

export interface ParagraphScheduleDayProps {
  /** Optional className for ParagraphScheduleDay, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphScheduleDayFragment
}

/**
 * ParagraphScheduleDay description
 */

export const ParagraphScheduleDay = ({ className }: ParagraphScheduleDayProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
