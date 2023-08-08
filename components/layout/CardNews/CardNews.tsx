import cn from 'classnames';

import styles from './CardNews.module.scss';
import { NodeArticleCardFragment } from '@models/operations';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import Link from 'next/link';
import { DateFormat } from '@components/util/DateFormat/DateFormat';

export interface CardNewsProps {
  /** Optional className for CardNews, pass in a sass module class to override component default */
  className?: string;
  article: NodeArticleCardFragment;
}

/**
 * CardNews description
 */

export const CardNews = ({ className, article }: CardNewsProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <article className={rootClassName}>
      <div className={styles.image}>
        <MediaImage media={article.teaser.squareImage} />
      </div>
      <div className={styles.content}>
        <Text variant="h2">{article.title}</Text>
        <Text variant="body1" noMargin>
          <DateFormat
            date={new Date(article.created.time)}
            dateFormat={'dd.MM.yyyy'}
          />
        </Text>
        {article.summary?.processed ? (
          <div className={styles.summary}>
            <RichText html={article.summary?.processed} />
          </div>
        ) : null}

        <div className={styles.link}>
          <Link href={article.path}>Read more</Link>
        </div>
      </div>
    </article>
  );
};
