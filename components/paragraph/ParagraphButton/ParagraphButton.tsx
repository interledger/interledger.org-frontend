import cn from 'classnames';
import { ParagraphButtonFragment } from '@models/operations';
import { m } from 'framer-motion';
import { ButtonLink } from '@components/ui/Button/ButtonLink';
import { Arrow } from '@components/icon/Arrow/Arrow';
import styles from './ParagraphButton.module.scss';

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

  let titleMarkup;
  if (paragraph.link?.title) {
    const title = paragraph.link?.title;
    const titleSplit = title.split(' ');
    const titlePop = titleSplit.pop();
    const titleMinusLastWord = titleSplit.join(' ');
    const wrapTitlePop = `<span>${titlePop}</span>`

    titleMarkup = `${titleMinusLastWord} ${wrapTitlePop}`
  }

  return (
    <m.section
      className={rootClassName}
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px", amount: "all" }}
    >
      <ButtonLink href={paragraph.link.url}>
        {titleMarkup && (
          <span
            className={styles.titleMarkup}
            dangerouslySetInnerHTML={{ __html: titleMarkup }}
          />
        )}
        <Arrow />
      </ButtonLink>
    </m.section>
  );
};
