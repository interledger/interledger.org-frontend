import cn from 'classnames';
import { ParagraphContentColumnCardsFragment } from '@models/operations';
import styles from './ParagraphContentColumnCards.module.scss';
import { Grid } from '@components/layout/Grid/Grid';
import { ParagraphColumnCard } from './ParagraphColumnCard';

export interface ParagraphContentColumnCardsProps {
  /** Optional className for ParagraphContentColumnCards, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContentColumnCardsFragment;
}

/**
 * ParagraphContentColumnCards description
 */

export const ParagraphContentColumnCards = ({
  className,
  paragraph,
}: ParagraphContentColumnCardsProps) => {
  const rootClassName = cn(styles.root, className);

  const columns = paragraph.content?.length ?? 0;

  if (columns === 0) return null;

  return (
    <section className={rootClassName}>
      <Grid cols={1} colsTablet={columns} colsDesktop={columns}>
        {paragraph.content?.map((c) => (
          <ParagraphColumnCard
            key={c.id}
            paragraph={c}
            layout={paragraph.imageStyle}
          />
        ))}
      </Grid>
    </section>
  );
};
