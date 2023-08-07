import cn from 'classnames';
import { ParagraphScheduleFragment } from '@models/operations';
import styles from './ParagraphSchedule.module.scss';
import { Text } from '@components/ui/Text/Text';
import { useState } from 'react';
import { Grid } from '@components/layout/Grid/Grid';
import { Duration } from '@components/ui/Duration/Duration';
import { DateFormat } from '@components/util/DateFormat/DateFormat';

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
  return (
    <section className={rootClassName}>
      {paragraph.title ? (
        <Text className={styles.title} variant="h2" as="h1">
          {paragraph.title}
        </Text>
      ) : null}
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
              <DateFormat date={new Date(d.date.time)} dateFormat={'EEEE'} />
            </button>
          ))}
        </div>
        {paragraph.days.map((d) =>
          d.id === active ? (
            <Grid
              key={d.id}
              className={styles.talks}
              cols={2}
              colsTablet={2}
              colsDesktop={3}
            >
              {d.talksView.__typename === 'TalksByDateResult'
                ? d.talksView.results.map((t) =>
                    t.__typename === 'NodeTalk' ? (
                      <div key={t.id} className={styles.talk}>
                        <h2>{t.title}</h2>
                        {!!t.speakers?.length ? (
                          <h3>{t.speakers[0].title}</h3>
                        ) : null}
                        <div className={styles.talkTime}>
                          <DateFormat
                            date={new Date(t.dateTime.time)}
                            dateFormat={'h:mmaaa '}
                          />
                          - <Duration duration={t.duration} />
                        </div>
                      </div>
                    ) : null
                  )
                : null}
            </Grid>
          ) : null
        )}
      </div>
    </section>
  );
};
