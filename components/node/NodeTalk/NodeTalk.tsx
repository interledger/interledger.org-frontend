import { CardSpeaker } from '@components/layout/CardSpeaker/CardSpeaker';
import { Container } from '@components/layout/Container/Container';
import { TwoColumn } from '@components/layout/TwoColumn/TwoColumn';
import { Duration } from '@components/ui/Duration/Duration';
import { Text } from '@components/ui/Text/Text';
import { DateFormat } from '@components/util/DateFormat/DateFormat';
import { RichText } from '@components/util/RichText/RichText';
import { NodeTalkFragment } from '@models/operations';
import cn from 'classnames';
import styles from './NodeTalk.module.scss';
import { Video, VideoPlayer } from '@components/ui/VideoPlayer/VideoPlayer';

export interface NodeTalkProps {
  /** Optional className for NodeTalk, pass in a sass module class to override component default */
  className?: string;
  node: NodeTalkFragment;
}

/**
 * NodeTalk description
 */

export const NodeTalk = ({ className, node }: NodeTalkProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Container as="article" className={rootClassName}>
      {node.recordingVideo ? (
        <div className={styles.video}>
          <Video url={node.recordingVideo.mediaOembedVideo} controls />
        </div>
      ) : node.liveVideo ? (
        <div className={styles.video}>
          <Video url={node.liveVideo.mediaOembedVideo} controls />
        </div>
      ) : null}
      {node.title ? (
        <Text variant="h1" className={styles.title}>
          {node.title}
        </Text>
      ) : null}
      {node.startsAt && node.endsAt ? (
        <Text variant="body2">
          <>
            <DateFormat
              date={new Date(node.startsAt.time)}
              dateFormat={'dd.MM.yy h:mmaaa '}
            />
            -{' '}
            <Duration
              startsAt={new Date(node.startsAt.time)}
              endsAt={new Date(node.endsAt.time)}
            />
          </>
        </Text>
      ) : null}
      <TwoColumn className={styles.content}>
        <TwoColumn.Content>
          {node.description?.processed ? (
            <RichText html={node.description.processed} />
          ) : null}
        </TwoColumn.Content>
        <TwoColumn.Side className={styles.sideBar}>
          {!!node.speakers?.length ? (
            node.speakers.map((s) => <CardSpeaker key={s.id} speaker={s} />)
          ) : (
            <></>
          )}
        </TwoColumn.Side>
      </TwoColumn>
    </Container>
  );
};
