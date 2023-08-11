import cn from 'classnames';
import {
  NodeDeveloperToolsFragment,
  ParagraphAnchorFragment,
} from '@models/operations';
import styles from './NodeDeveloperTools.module.scss';
import { Text } from '@components/ui/Text/Text';
import { Paragraphs } from '@components/layout/Paragraphs/Paragraphs';
import { useGetInitDataQuery } from '@graphql/hooks';
import { DeveloperToolsMenu } from '@components/nav/DeveloperToolsMenu/DeveloperToolsMenu';
import { dash } from 'radash';
import Link from 'next/link';

export interface NodeDeveloperToolsProps {
  /** Optional className for NodeDeveloperTools, pass in a sass module class to override component default */
  className?: string;
  node: NodeDeveloperToolsFragment;
}

/**
 * NodeDeveloperTools description
 */

export const NodeDeveloperTools = ({
  className,
  node,
}: NodeDeveloperToolsProps) => {
  const rootClassName = cn(styles.root, className);

  const { data: developerToolsMenu } = useGetInitDataQuery(
    {},
    { select: (data) => data.developerToolsMenu }
  );

  const anchors = node.sections?.filter(
    (s) => s.__typename === 'ParagraphAnchor'
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={rootClassName}>
      <aside>
        {developerToolsMenu ? (
          <>
            <Text className={styles.menuTitle} variant="h2" as="h3">
              {developerToolsMenu.name}
            </Text>
            <DeveloperToolsMenu developerToolsMenu={developerToolsMenu} />
          </>
        ) : null}
      </aside>
      <article className={styles.article}>
        <div className={styles.content}>
          <Text variant="h1">{node.title}</Text>
          {node.sections && <Paragraphs paragraphs={node.sections} />}
        </div>
        <aside>
          {!!anchors?.length ? (
            <ul>
              {anchors.map((a) =>
                a.__typename === 'ParagraphAnchor' ? (
                  <li key={a.id}>
                    <Link href={`#${dash(a.title)}`} onClick={handleScroll}>
                      {a.title}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          ) : null}
        </aside>
      </article>
    </div>
  );
};
