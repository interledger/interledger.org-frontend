import cn from 'classnames';
import { ParagraphTextFragment } from '@models/operations';
import styles from './ParagraphText.module.scss';
import { RichText } from '@components/util/RichText/RichText';

export interface ParagraphTextProps {
  /** Optional className for ParagraphText, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphTextFragment;
}

export const ParagraphText = ({ className, paragraph }: ParagraphTextProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <section className={rootClassName}>
      {paragraph.text?.processed && (
        <RichText html={paragraph.text.processed} />
      )}
    </section>
  );
};
