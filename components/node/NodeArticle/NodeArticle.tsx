import { Container } from '@components/layout/Container/Container';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { Text } from '@components/ui/Text/Text';
import { NodeArticleFragment } from '@models/operations';
import cn from 'classnames';
import styles from './NodeArticle.module.scss';
import { CardTalk } from '@components/layout/CardTalk/CardTalk';
import { TwoColumn } from '@components/layout/TwoColumn/TwoColumn';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { DateFormat } from '@components/util/DateFormat/DateFormat';

export interface NodeArticleProps {
  /** Optional className for NodeArticle, pass in a sass module class to override component default */
  className?: string;
  node: NodeArticleFragment;
}

export const NodeArticle = ({ className, node }: NodeArticleProps) => {
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
            </div>
          </Container>
        </div>
      </header>
      <Container>
        <TwoColumn>
          <TwoColumn.Content className={styles.sections}>
            {node.sections && <Paragraphs paragraphs={node.sections} />}
          </TwoColumn.Content>
          <TwoColumn.Side>
            <div className={styles.published}>
              Published on{' '}
              <DateFormat
                date={new Date(node.created.time)}
                dateFormat={'dd.MM.yyyy'}
              />
            </div>
          </TwoColumn.Side>
        </TwoColumn>
      </Container>
    </article>
  );
};
