import cn from 'classnames';
import { ParagraphSpacerFragment } from '@models/operations';
import styles from './ParagraphSpacer.module.scss';

export interface ParagraphSpacerProps {
  /** Optional className for ParagraphSpacer, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphSpacerFragment;
}

/**
 * ParagraphSpacer description
 */

export const ParagraphSpacer = ({
  className,
  paragraph,
}: ParagraphSpacerProps) => {
  const rootClassName = cn(
    styles[paragraph.spacerSize],
    { [styles.spacerLine]: paragraph.spacerLine },
    className
  );
  return (
    <div className={rootClassName}>
      {paragraph.spacerLine && <div className={styles.line} />}
    </div>
  );
};
