import cn from 'classnames';
import { NodeTalkFragment } from '@models/operations';
import styles from './NodeTalk.module.scss';
import { ParagraphTalkHeader } from '@components/paragraph/ParagraphTalkHeader/ParagraphTalkHeader';
import { Container } from '@components/layout/Container/Container';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import { TwoColumn } from '@components/layout/TwoColumn/TwoColumn';
import {
  Card,
  CardContent,
  CardImage,
  CardLink,
} from '@components/layout/Card/Card';
import { Duration } from '@components/ui/Duration/Duration';

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
      {node.header && (
        <ParagraphTalkHeader
          className={styles.header}
          paragraph={node.header}
        />
      )}
      {node.title ? <Text variant="h1">{node.title}</Text> : null}
      <Text variant="body2">
        <Duration duration={node.duration} />
      </Text>
      <TwoColumn className={styles.content}>
        <TwoColumn.Content>
          {node.description?.processed ? (
            <RichText html={node.description.processed} />
          ) : null}
        </TwoColumn.Content>
        <TwoColumn.Side className={styles.sideBar}>
          {!!node.speakers?.length ? (
            node.speakers.map((s) => (
              <Card key={s.id}>
                <CardImage media={s.teaser.squareImage} />
                <CardContent>
                  <Text variant="h2">{s.title}</Text>
                  <Text variant="body2">
                    {s.role}
                    {s.company ? (
                      <>
                        {' '}
                        {', '}
                        {s.company}
                      </>
                    ) : null}
                  </Text>
                </CardContent>
                <CardLink link={s.path} />
              </Card>
            ))
          ) : (
            <></>
          )}
        </TwoColumn.Side>
      </TwoColumn>
    </Container>
  );
};
