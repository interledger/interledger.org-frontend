import { Container } from '@components/layout/Container/Container';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { Text } from '@components/ui/Text/Text';
import { NodeArticleFragment } from '@models/operations';
import cn from 'classnames';
import styles from './NodeArticle.module.scss';

export interface NodeArticleProps {
  /** Optional className for NodeArticle, pass in a sass module class to override component default */
  className?: string;
  node: NodeArticleFragment;
}

export const NodeArticle = ({ className, node }: NodeArticleProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Container className={rootClassName}>
      <Text variant="h1">{node.title}</Text>
      {node.sections && <Paragraphs paragraphs={node.sections} />}
    </Container>
  );
};
