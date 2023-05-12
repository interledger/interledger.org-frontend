import cn from 'classnames';
import { ParagraphButtonFragment } from '@models/operations';
import styles from './ParagraphButton.module.scss';
import { ButtonLink } from '@components/ui/Button/ButtonLink';

export interface ParagraphButtonProps {
  /** Optional className for ParagraphButton, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphButtonFragment;
}

export const ParagraphButton = ({
  className,
  paragraph,
}: ParagraphButtonProps) => {
  const rootClassName = cn(styles.root, className);

  if (!paragraph?.link?.url) {
    return null;
  }

  return (
    <section className={rootClassName}>
      <ButtonLink href={paragraph.link.url}>{paragraph.link.title}</ButtonLink>
    </section>
  );
};
