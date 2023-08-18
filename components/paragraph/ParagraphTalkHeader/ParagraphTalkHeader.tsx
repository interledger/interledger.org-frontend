import cn from 'classnames';
import { ParagraphTalkHeaderFragment } from '@models/operations';
import styles from './ParagraphTalkHeader.module.scss';
import { ParagraphMediaHeader } from '../ParagraphMediaHeader/ParagraphMediaHeader';
import { MediaHeader } from '@components/ui/MediaHeader/MediaHeader';

export interface ParagraphTalkHeaderProps {
  /** Optional className for ParagraphTalkHeader, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphTalkHeaderFragment;
}

/**
 * ParagraphTalkHeader description
 */

export const ParagraphTalkHeader = ({
  className,
  paragraph,
}: ParagraphTalkHeaderProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <header className={rootClassName}>
      {paragraph.liveVideo && <MediaHeader video={paragraph.liveVideo} />}
    </header>
  );
};
