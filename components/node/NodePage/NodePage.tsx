import { Container } from '@components/layout/Container/Container';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { NodePageFragment } from '@models/operations';
import { ParagraphHeroHeader } from '@components/paragraph/ParagraphHeroHeader/ParagraphHeroHeader';
import cn from 'classnames';
import styles from './NodePage.module.scss';

export interface NodePageProps {
  /** Optional className for NodePage, pass in a sass module class to override component default */
  className?: string;
  node: NodePageFragment;
}

export const NodePage = ({ className, node }: NodePageProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <Container as="article" className={rootClassName}>
      {node.header && <ParagraphHeroHeader paragraph={node.header} />}
      {node.sections && <Paragraphs paragraphs={node.sections} />}
    </Container>
  );
};
