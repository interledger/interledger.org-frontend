import cn from 'classnames';
import { ParagraphContentTitleFragment } from '@models/operations';
import styles from './ParagraphContentTitle.module.scss';
import { Text } from '@components/ui/Text/Text';

export interface ParagraphContentTitleProps {
  /** Optional className for ParagraphContentTitle, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContentTitleFragment;
}

/**
 * ParagraphContentTitle description
 */

export const ParagraphContentTitle = ({
  className,
  paragraph,
}: ParagraphContentTitleProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <Text variant="h2" as="h1">
        {paragraph.title}
      </Text>
    </div>
  );
};
