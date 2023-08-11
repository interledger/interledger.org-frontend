import cn from 'classnames';

import styles from './CardTalk.module.scss';
import { NodeTalkCardFragment } from '@models/operations';
import { Card, CardImage, CardContent, CardLink } from '../Card/Card';
import { Text } from '@components/ui/Text/Text';

export interface CardTalkProps {
  /** Optional className for CardTalk, pass in a sass module class to override component default */
  className?: string;
  talk: NodeTalkCardFragment;
  layout?: 'square' | 'landscape';
}

/**
 * CardTalk description
 */

export const CardTalk = ({
  className,
  talk,
  layout = 'landscape',
}: CardTalkProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Card className={rootClassName}>
      <CardImage
        media={
          layout === 'landscape'
            ? talk.teaser.landscapeImage
            : talk.teaser.squareImage
        }
      />
      <CardContent>
        <Text variant="h2" noMargin>
          {talk.title}
        </Text>
        <Text variant="body2">
          {!!talk.speakers?.length ? talk.speakers[0].title : null}
        </Text>
      </CardContent>
      <CardLink link={talk.path} />
    </Card>
  );
};
