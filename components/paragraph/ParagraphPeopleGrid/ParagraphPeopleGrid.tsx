import cn from 'classnames';
import { ParagraphPeopleGridFragment } from '@models/operations';
import styles from './ParagraphPeopleGrid.module.scss';
import { Grid } from '@components/layout/Grid/Grid';
import { CardPeople } from '@components/layout/CardPeople/CardPeople';

export interface ParagraphPeopleGridProps {
  /** Optional className for ParagraphPeopleGrid, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphPeopleGridFragment;
}

/**
 * ParagraphPeopleGrid description
 */

export const ParagraphPeopleGrid = ({
  className,
  paragraph,
}: ParagraphPeopleGridProps) => {
  const rootClassName = cn(styles.root, className);

  return (
    <section className={rootClassName}>
      <Grid cols={2} colsTablet={3} colsDesktop={5}>
        {paragraph.peopleView?.__typename === 'PeopleResult' &&
          paragraph.peopleView?.results.map((p) =>
            p.__typename === 'NodePeople' ? (
              <CardPeople key={p.id} people={p} />
            ) : null
          )}
      </Grid>
    </section>
  );
};
