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
        <Text className={styles.questionTitle} variant="h2" as="h4" noMargin>
          {faq.question}
        </Text>
        <m.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.045 25.829"
          animate={{ rotate: selected ? 90 : 0 }}
        >
          <path
            fill="none"
            stroke="var(--color-primary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1.414 24.414 11.631-11.5-11.631-11.5"
          />
        </m.svg>
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
