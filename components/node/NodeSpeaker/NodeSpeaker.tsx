import cn from 'classnames';
import { NodeSpeakerFragment } from '@models/operations';
import styles from './NodeSpeaker.module.scss';
import { Container } from '@components/layout/Container/Container';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
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
    <Container className={rootClassName} as="article">
      <header className={styles.header}>
        <MediaImage className={styles.headerImage} media={node.image} />
        <Text variant="h1">{node.title}</Text>
        {node.role ? (
          <Text variant="body1" noMargin>
            {node.role}
          </Text>
        ) : null}
        {node.company ? (
          <Text variant="body1" noMargin>
            {node.company}
          </Text>
        ) : null}
      </header>
      <div>
        {node.summary?.value ? (
          <Text variant="body1" as="h1">
            {node.summary.value}
          </Text>
        ) : null}
        {node.biography?.processed ? (
          <RichText html={node.biography.processed} />
        ) : null}
      </div>
      <aside></aside>
    </Container>
  );
};
