import cn from 'classnames';
import { ParagraphSpeakersGridFragment } from '@models/operations';
import styles from './ParagraphSpeakersGrid.module.scss';

export interface ParagraphSpeakersGridProps {
  /** Optional className for ParagraphSpeakersGrid, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphSpeakersGridFragment
}

/**
 * ParagraphSpeakersGrid description
 */

export const ParagraphSpeakersGrid = ({ className }: ParagraphSpeakersGridProps) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
