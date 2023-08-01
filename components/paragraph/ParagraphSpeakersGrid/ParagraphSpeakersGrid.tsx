import cn from 'classnames';
import { ParagraphSpeakersGridFragment } from '@models/operations';
import styles from './ParagraphSpeakersGrid.module.scss';
import { CardSpeaker } from '@components/layout/CardSpeaker/CardSpeaker';
import { Grid } from '@components/layout/Grid/Grid';

export interface ParagraphSpeakersGridProps {
  /** Optional className for ParagraphSpeakersGrid, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphSpeakersGridFragment;
}

/**
 * ParagraphSpeakersGrid description
 */

export const ParagraphSpeakersGrid = ({
  className,
  paragraph,
}: ParagraphSpeakersGridProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <Grid className={rootClassName} cols={1} colsTablet={2} colsDesktop={3}>
      {paragraph.speakersView?.results.map((s) =>
        s.__typename === 'NodeSpeaker' ? (
          <CardSpeaker key={s.id} speaker={s} />
        ) : null
      )}
    </Grid>
  );
};
