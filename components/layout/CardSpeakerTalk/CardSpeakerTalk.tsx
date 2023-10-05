import cn from 'classnames';
import styles from './CardSpeakerTalk.module.scss';
import { NodeTalkCardFragment } from '@models/operations';
import { Card, CardContent, CardLink } from '../Card/Card';
import { Text } from '@components/ui/Text/Text';

export interface CardSpeakerTalkProps {
  /** Optional className for CardSpeakerTalk, pass in a sass module class to override component default */
  className?: string;
  talk: NodeTalkCardFragment;
}

/**
 * CardSpeakerTalk description
 */

export const CardSpeakerTalk = ({ className, talk }: CardSpeakerTalkProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Card className={rootClassName}>
      <CardContent className={styles.content}>
        <Text variant="h2" as="h1" noMargin>
          Talk
        </Text>
        <Text variant="h3" as="h2" noMargin>
          {talk.title}
        </Text>
      </CardContent>
      <CardLink link={talk.path} />
    </Card>
  );
};
