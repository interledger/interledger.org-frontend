import cn from 'classnames';
import { ParagraphAnchorFragment } from '@models/operations';
import styles from './ParagraphAnchor.module.scss';
import { Text } from '@components/ui/Text/Text';
import { dash } from 'radash';

export interface ParagraphAnchorProps {
  /** Optional className for ParagraphAnchor, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphAnchorFragment;
}

/**
 * ParagraphAnchor description
 */

export const ParagraphAnchor = ({
  className,
  paragraph,
}: ParagraphAnchorProps) => {
  const rootClassName = cn(styles.root, className);
  const id = dash(paragraph.title);
  return (
    <div id={id} className={rootClassName}>
      <Text variant="h2">{paragraph.title}</Text>
    </div>
  );
};
