import cn from 'classnames';
import { ParagraphScheduleFragment } from '@models/operations';
import styles from './ParagraphSchedule.module.scss';
import { Text } from '@components/ui/Text/Text';
import { useState } from 'react';
import { Grid } from '@components/layout/Grid/Grid';
import { Duration } from '@components/ui/Duration/Duration';
import { DateFormat } from '@components/util/DateFormat/DateFormat';
import { ParagraphScheduleDay } from '../ParagraphScheduleDay/ParagraphScheduleDay';
import { getUtcDate } from '@lib/helpers';

export interface ParagraphScheduleProps {
  /** Optional className for ParagraphSchedule, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphScheduleFragment;
}

/**
 * ParagraphSchedule description
 */

export const ParagraphSchedule = ({
  className,
  paragraph,
}: ParagraphScheduleProps) => {
  const [active, setActive] = useState(paragraph.days[0].id);
  const rootClassName = cn(styles.root, className);

  const dayTitle = paragraph.days.find((d) => d.id === active);

  return (
    <section className={rootClassName}>
      <div className={styles.schedule}>
        <div className={styles.days}>
          {paragraph.days.map((d) => (
            <button
              className={cn(styles.dayButton, {
                [styles.dayButtonActive]: d.id === active,
              })}
              key={d.id}
              onClick={() => setActive(d.id)}
            >
              <DateFormat date={getUtcDate(d.date.time)} dateFormat={'EEEE'} />
            </button>
          ))}
        </div>
        <Text className={styles.date} variant="h2" as="h1">
          <DateFormat
            date={getUtcDate(dayTitle?.date.time)}
            dateFormat={'EEEE d MMMM yyyy'}
          />
        </Text>
        {paragraph.days.map((d) =>
          d.id === active ? (
            <ParagraphScheduleDay key={d.id} paragraph={d} />
          ) : null,
        )}
      </div>
    </section>
  );
};
