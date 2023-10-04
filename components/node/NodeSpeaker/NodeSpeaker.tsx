import cn from 'classnames';
import { NodeSpeakerFragment } from '@models/operations';
import styles from './NodeSpeaker.module.scss';
import { Container } from '@components/layout/Container/Container';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { TwoColumn } from '@components/layout/TwoColumn/TwoColumn';
import { CardTalk } from '@components/layout/CardTalk/CardTalk';
export interface NodeSpeakerProps {
  /** Optional className for NodeSpeaker, pass in a sass module class to override component default */
  className?: string;
  node: NodeSpeakerFragment;
}

/**
 * NodeSpeaker description
 */

export const NodeSpeaker = ({ className, node }: NodeSpeakerProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <article className={rootClassName}>
      <header className={styles.header}>
        <MediaImage
          className={styles.headerImage}
          media={node.squareImage}
          fit
        />
        <div className={styles.headerText}>
          <Container>
            <div className={styles.headerContent}>
              <Text variant="h1" noMargin>
                {node.title}
              </Text>

              <Text variant="body1" noMargin>
                {node.tagLine}
              </Text>
            </div>
          </Container>
        </div>
      </header>
      <Container>
        <TwoColumn>
          <TwoColumn.Content>
            {node.biography?.processed ? (
              <RichText html={node.biography.processed} />
            ) : null}
          </TwoColumn.Content>
          <TwoColumn.Side>
            {node.talks.__typename === 'TalksResult' &&
            !!node.talks.results.length
              ? node.talks.results.map((r) =>
                  r.__typename === 'NodeTalk' ? (
                    <CardTalk key={r.id} talk={r} hideImage />
                  ) : null,
                )
              : null}
          </TwoColumn.Side>
        </TwoColumn>
      </Container>
    </article>
  );
};
