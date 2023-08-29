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
    <section className={rootClassName}>
      <Grid cols={1} colsTablet={2} colsDesktop={3}>
        {paragraph.speakersView?.__typename === 'SpeakersResult' &&
          paragraph.speakersView?.results.map((s) =>
            s.__typename === 'NodeSpeaker' ? (
              <CardSpeaker
                key={s.id}
                speaker={s}
                sizes="(min-width: 1280px) 315px, (min-width: 980px) 25.71vw, (min-width: 780px) calc(50vw - 5.1875rem), calc(100vw - 2.5rem)"
              />
            ) : null
          )}
      </Grid>
    </section>
  );
};
