import cn from 'classnames';
import { ParagraphTalksGridFragment } from '@models/operations';
import styles from './ParagraphTalksGrid.module.scss';
import { CardTalk } from '@components/layout/CardTalk/CardTalk';
import { Grid } from '@components/layout/Grid/Grid';

export interface ParagraphTalksGridProps {
  /** Optional className for ParagraphTalksGrid, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphTalksGridFragment;
}

/**
 * ParagraphTalksGrid description
 */

export const ParagraphTalksGrid = ({
  className,
  paragraph,
}: ParagraphTalksGridProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <Grid className={rootClassName} cols={1} colsTablet={2} colsDesktop={2}>
      {paragraph.talksView?.__typename === 'TalksAllResult' &&
        paragraph.talksView?.results.map((t) =>
          t.__typename === 'NodeTalk' ? <CardTalk key={t.id} talk={t} /> : null
        )}
    </Grid>
  );
};
