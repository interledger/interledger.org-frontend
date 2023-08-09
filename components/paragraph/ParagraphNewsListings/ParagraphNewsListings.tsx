import cn from 'classnames';
import { ParagraphNewsListingsFragment } from '@models/operations';
import styles from './ParagraphNewsListings.module.scss';
import { CardNews } from '@components/layout/CardNews/CardNews';
import { useGetParagraphNewsListing } from '@graphql/hooks';
import Pagination from '@components/ui/Pagination/Pagination';
import { usePaginationQuery } from '@components/ui/Pagination/usePaginationQuery';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { Container } from '@components/layout/Container/Container';
import { Text } from '@components/ui/Text/Text';
import { DateFormat } from '@components/util/DateFormat/DateFormat';
import { RichText } from '@components/util/RichText/RichText';
import Link from 'next/link';

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

  let newsLatest;

  if (
    data.paragraphNewsListings.newsLatestView.__typename ===
      'NewsLatestResult' &&
    !!data.paragraphNewsListings.newsLatestView.results.length &&
    data.paragraphNewsListings.newsLatestView.results[0].__typename ===
      'NodeArticle'
  ) {
    newsLatest = data.paragraphNewsListings.newsLatestView.results[0];
  }

  return (
    <section className={rootClassName}>
      {newsLatest ? (
        <header className={styles.header}>
          <MediaImage
            className={styles.headerImage}
            media={newsLatest.teaser.squareImage}
            fit
          />
          <div className={styles.headerText}>
            <Container>
              <div className={styles.headerContent}>
                <Text variant="h1" noMargin>
                  {newsLatest.title}
                </Text>
                <Text variant="body1" noMargin>
                  <DateFormat
                    date={new Date(newsLatest.created.time)}
                    dateFormat={'dd.MM.yyyy'}
                  />
                </Text>
                {newsLatest.summary?.processed ? (
                  <div className={styles.summary}>
                    <RichText html={newsLatest.summary?.processed} />
                  </div>
                ) : null}

                <div className={styles.link}>
                  <Link href={newsLatest.path}>Read more</Link>
                </div>
              </div>
            </Container>
          </div>
        </header>
      ) : null}

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
