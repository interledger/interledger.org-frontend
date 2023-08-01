import cn from 'classnames';
import { NodeSpeakerCardFragment } from '@models/operations';
import { Card, CardImage, CardContent, CardLink } from '../Card/Card';
import { Text } from '@components/ui/Text/Text';

export interface CardSpeakerProps {
  /** Optional className for CardSpeaker, pass in a sass module class to override component default */
  className?: string;
  speaker: NodeSpeakerCardFragment;
  layout?: 'square' | 'landscape';
}

/**
 * CardSpeaker description
 */

export const CardSpeaker = ({
  className,
  speaker,
  layout = 'square',
}: CardSpeakerProps) => {
  const rootClassName = cn(className);
  return (
    <Card className={rootClassName}>
      <CardImage
        media={
          layout === 'landscape'
            ? speaker.teaser.landscapeImage
            : speaker.teaser.squareImage
        }
      />
      <CardContent>
        <Text variant="h2">{speaker.title}</Text>
        <Text variant="body2">
          {speaker.role}
          {speaker.company ? (
            <>
              {', '}
              {speaker.company}
            </>
          ) : null}
        </Text>
      </CardContent>
      <CardLink link={speaker.path} />
    </Card>
  );
};
