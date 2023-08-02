import cn from 'classnames';
import { NodeFoundationPageFragment } from '@models/operations';
import styles from './NodeFoundationPage.module.scss';
import { Container } from '@components/layout/Container/Container';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { ParagraphHeroHeader } from '@components/paragraph/ParagraphHeroHeader/ParagraphHeroHeader';

export interface NodeFoundationPageProps {
  /** Optional className for NodeFoundationPage, pass in a sass module class to override component default */
  className?: string;
  node: NodeFoundationPageFragment;
}

/**
 * NodeFoundationPage description
 */

export const NodeFoundationPage = ({
  className,
  node,
}: NodeFoundationPageProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <Container as="article" className={rootClassName}>
      {node.header && <ParagraphHeroHeader paragraph={node.header} />}
      {node.sections && <Paragraphs paragraphs={node.sections} />}
    </Container>
  );
};
