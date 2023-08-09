import cn from 'classnames';
import { ParagraphFaqsFragment } from '@models/operations';
import styles from './ParagraphFaqs.module.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { m } from 'framer-motion';
import { RichText } from '@components/util/RichText/RichText';
import { Text } from '@components/ui/Text/Text';

export const Faq = ({
  faq,
  selected,
  setSelected,
}: {
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  faq: {
    id: string;
    __typename?: 'ParagraphFaq' | undefined;
    question: string;
    answer: {
      __typename?: 'Text' | undefined;
      processed?: any;
    };
  } | null;
}) => {
  if (!faq) {
    return null;
  }

  return (
    <div className={styles.faq}>
      <div
        className={styles.question}
        onClick={() => setSelected(selected ? '' : faq.id)}
      >
        <Text
          className={styles.questionTitle}
          variant="h2"
          as="h4"
          font="display"
          noMargin
        >
          {faq.question}
        </Text>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.071 9.31">
          <m.path
            d="M14.942 1.978c-.881-.631-1.744-1.291-2.653-1.877a.644.644 0 0 0-.914.26c-1.033 1.449-2.1 2.873-3.169 4.3-.443.592-1 .581-1.487-.048C5.672 3.256 4.643 1.886 3.611.519c-.439-.582-.789-.653-1.393-.241C1.578.715.947 1.165.313 1.61a.557.557 0 0 0-.113.928c.409.448.837.88 1.264 1.311Q3.779 6.191 6.1 8.527c1.042 1.045 1.793 1.043 2.828 0q2.945-2.965 5.885-5.933l.175-.176a.285.285 0 0 0-.046-.439"
            fill="#1B76D9"
            animate={{ rotate: selected ? -180 : -90 }}
          />
        </svg>
      </div>
      <m.div
        className={styles.answer}
        animate={{
          height: selected ? 'auto' : 0,
        }}
      >
        <RichText html={faq.answer.processed} />
      </m.div>
    </div>
  );
};

export interface ParagraphFaqsProps {
  /** Optional className for ParagraphFaqs, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphFaqsFragment;
}

/**
 * ParagraphFaqs description
 */

export const ParagraphFaqs = ({ className, paragraph }: ParagraphFaqsProps) => {
  const rootClassName = cn(styles.root, className);
  const [selected, setSelected] = useState<string>('');

  return (
    <section className={rootClassName}>
      {paragraph.faqs?.map((f) => (
        <Faq
          key={f?.id}
          faq={f}
          selected={selected === f?.id}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};
