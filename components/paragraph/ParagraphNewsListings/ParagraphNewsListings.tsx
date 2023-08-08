import cn from 'classnames';
import { ParagraphNewsListingsFragment } from '@models/operations';
import styles from './ParagraphNewsListings.module.scss';
import { CardNews } from '@components/layout/CardNews/CardNews';

export interface ParagraphNewsListingsProps {
  /** Optional className for ParagraphNewsListings, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphNewsListingsFragment;
}

/**
 * ParagraphNewsListings description
 */

export const ParagraphNewsListings = ({
  className,
  paragraph,
}: ParagraphNewsListingsProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <section className={rootClassName}>
      {paragraph.newsView.__typename === 'NewsResult' &&
        paragraph.newsView.results.map((r) =>
          r.__typename === 'NodeArticle' ? <CardNews article={r} /> : null
        )}
    </section>
  );
};
