import { Container } from '@components/layout/Container/Container';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { Text } from '@components/ui/Text/Text';
import { NodePageFragment } from '@models/operations';
import cn from 'classnames';
import styles from './NodePage.module.scss';
import { ParagraphTeaser } from '@components/paragraph/ParagraphTeaser/ParagraphTeaser';

export interface NodePageProps {
  /** Optional className for NodePage, pass in a sass module class to override component default */
  className?: string;
  node: NodePageFragment;
}

export const NodePage = ({ className, node }: NodePageProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Container className={rootClassName}>
      <Text variant="h1">{node.title}</Text>
      {node.sections && <Paragraphs paragraphs={node.sections} />}
    </Container>
  );
}; 
