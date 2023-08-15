import cn from 'classnames';

import { RichText } from '@components/util/RichText/RichText';
import { ParagraphColumnCardFragment } from '@models/operations';
import Link from 'next/link';
import { Card, CardContent, CardImage } from '../Card/Card';
import styles from './CardColumn.module.scss';

export interface CardColumnProps {
  /** Optional className for CardColumn, pass in a sass module class to override component default */
  className?: string;
  content: ParagraphColumnCardFragment;
  layout: string;
}

/**
 * CardColumn description
 */

export const CardColumn = ({ className, content, layout }: CardColumnProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Card className={rootClassName}>
      <CardImage
        media={
          layout === 'landscape' ? content.landscapeImage : content.squareImage
        }
      />
      <CardContent>
        <RichText html={content.text.processed} />
        {content.link.url ? (
          <Link href={content.link.url}>{content.link.title}</Link>
        ) : null}
      </CardContent>
    </Card>
  );
};
