import cn from 'classnames';

import styles from './CardTalk.module.scss';
import { NodeTalkCardFragment } from '@models/operations';
import { Card, CardImage, CardContent, CardLink } from '../Card/Card';
import { Text } from '@components/ui/Text/Text';

export interface CardTalkProps {
  /** Optional className for CardTalk, pass in a sass module class to override component default */
  className?: string;
  talk: NodeTalkCardFragment;
  hideImage?: boolean;
}

/**
 * CardTalk description
 */

export const CardTalk = ({ className, talk, hideImage }: CardTalkProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Card className={rootClassName}>
      {!!talk.speakers?.length && !hideImage ? (
        <CardImage media={talk.speakers[0].squareImage} />
      ) : null}

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
