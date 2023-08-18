import { CardSpeaker } from '@components/layout/CardSpeaker/CardSpeaker';
import { Container } from '@components/layout/Container/Container';
import { TwoColumn } from '@components/layout/TwoColumn/TwoColumn';
import { ParagraphTalkHeader } from '@components/paragraph/ParagraphTalkHeader/ParagraphTalkHeader';
import { Duration } from '@components/ui/Duration/Duration';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import { NodeTalkFragment } from '@models/operations';
import cn from 'classnames';
import styles from './NodeTalk.module.scss';

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
      {/* {node.header && (
        <ParagraphTalkHeader
          className={styles.header}
          paragraph={node.header}
        />
      )} */}
      {node.title ? (
        <Text variant="h1" className={styles.title}>
          {node.title}
        </Text>
      ) : null}
      {/* <Text variant="body2">
        <Duration duration={node.duration} />
      </Text> */}
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
