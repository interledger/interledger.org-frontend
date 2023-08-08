import cn from 'classnames';
import { ParagraphNewsListingsFragment } from '@models/operations';
import styles from './ParagraphNewsListings.module.scss';
import { CardNews } from '@components/layout/CardNews/CardNews';
import { useGetParagraphNewsListing } from '@graphql/hooks';
import Pagination from '@components/ui/Pagination/Pagination';
import { usePaginationQuery } from '@components/ui/Pagination/usePaginationQuery';

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
  const [page] = usePaginationQuery('np');

  const { data } = useGetParagraphNewsListing(
    { id: paragraph.id, newsListingPage: page - 1 },
    { initialData: { paragraphNewsListings: paragraph }, staleTime: 0 }
  );

  if (data?.paragraphNewsListings?.newsView.__typename !== 'NewsResult') {
    return null;
  }

  const news = data.paragraphNewsListings.newsView;

  return (
    <section className={rootClassName}>
      {news.results.map((r) =>
        r.__typename === 'NodeArticle' ? (
          <CardNews key={r.id} article={r} />
        ) : null
      )}
      <Pagination
        totalCount={news.pageInfo.total}
        pageSize={news.pageInfo.pageSize}
        param="np"
      />
    </section>
  );
};
