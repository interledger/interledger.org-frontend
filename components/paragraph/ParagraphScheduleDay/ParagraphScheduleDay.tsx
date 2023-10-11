import { Duration } from '@components/ui/Duration/Duration';
import { DateFormat } from '@components/util/DateFormat/DateFormat';
import { NodeRoom, NodeTalk } from '@models/graphql';
import { ParagraphScheduleDayFragment } from '@models/operations';
import cn from 'classnames';
import { addMinutes, format } from 'date-fns';
import { group, sort, unique } from 'radash';
import { CSSProperties, Fragment } from 'react';
import styles from './ParagraphScheduleDay.module.scss';
import { CardLink } from '@components/layout/Card/Card';

export interface ParagraphScheduleDayProps {
  /** Optional className for ParagraphScheduleDay, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphScheduleDayFragment;
}

/**
 * ParagraphScheduleDay description
 */

export const ParagraphScheduleDay = ({
  className,
  paragraph,
}: ParagraphScheduleDayProps) => {
  const rootClassName = cn(styles.root, className);
  if (paragraph.talksView.__typename !== 'TalksByDateResult') {
    return null;
  }

  const talks = paragraph.talksView.results.filter(
    (t) => t.__typename === 'NodeTalk',
  ) as NodeTalk[];

  const groupedTalks = group(talks, (t) => t.startsAt?.time);

  const times = talks.map((t) => {
    return {
      id: format(new Date(t.startsAt?.time), 'HHmm'),
      formatted: format(new Date(t.startsAt?.time), 'h:mmaaa'),
      minutes: format(new Date(t.startsAt?.time), 'mm'),
    };
  });

  const timeSlots = unique(times, (t) => t.id).filter(
    (s) => s.minutes !== '05',
  );

  const seperators = timeSlots.filter((element, index) => index % 2 == 0);

  const firstTalk = talks[0];
  const lastTalk = [...talks].pop();
  const firstTalkDate = new Date(firstTalk.startsAt?.time);

  const lastTalkDate = new Date(lastTalk?.endsAt?.time);
  const differenceInTime =
    (lastTalkDate.getTime() - firstTalkDate.getTime()) / 60000;
  const slots = differenceInTime / 5;

  let rows = '[rooms] auto';
  let loopDate = firstTalkDate;
  for (let index = 0; index < slots; index++) {
    rows += ` [time-${format(loopDate, 'HHmm')}] auto`;
    loopDate = addMinutes(loopDate, 5);
  }

  const talkRooms = talks
    .map((r) => {
      if (r.__typename === 'NodeTalk') {
        return r.room;
      }
    })
    .filter((r) => !!r) as NodeRoom[];

  const rooms = sort(
    unique(talkRooms, (t) => t.sessionizeid),
    (t) => t.sort,
  );

  let columns = '[times] auto [gap] 10px';
  rooms.forEach((room, i) => {
    if (i === 0) {
      columns += ` [track-${room.sessionizeid}-start] 1fr`;
    }
    if (i === rooms.length - 1) {
      columns += ` [track-${room.sessionizeid}-end]`;
    } else if (rooms.length > 1) {
      const next = rooms[i + 1];
      columns += ` [track-${room.sessionizeid}-end track-${next.sessionizeid}-start] 1fr`;
    }
  });

  const gridStyles: CSSProperties = {
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
  };

  return (
    <div className={rootClassName} style={gridStyles}>
      {rooms.map((r) => (
        <div
          key={`room-${r.sessionizeid}`}
          className={styles.room}
          style={{
            gridColumn: `track-${r?.sessionizeid}`,
            gridRow: `rooms`,
          }}
        >
          {r.title}
        </div>
      ))}

      {timeSlots.map((t) => (
        <div
          key={`time-${t.id}`}
          className={styles.slot}
          style={{
            gridColumn: `times`,
            gridRow: `time-${t.id}`,
            whiteSpace: 'nowrap',
          }}
        >
          {t.formatted}
        </div>
      ))}
      {seperators.map((t) => (
        <div
          key={`seperator-${t.id}`}
          className={styles.seperator}
          style={{
            gridColumn: `times / span ${rooms.length + 2}`,
            gridRow: `time-${t.id}`,
            whiteSpace: 'nowrap',
          }}
        ></div>
      ))}

      {Object.entries(groupedTalks).map((g) => {
        const time = g[0];
        const talks = g[1];

        return (
          <Fragment key={time}>
            <div className={styles.mobileSlotTime}>
              <DateFormat date={new Date(time)} dateFormat={'h:mmaaa '} />
            </div>
            {talks?.map((t) => (
              <div
                key={t.id}
                className={cn(styles.talk, {
                  [styles.plenumSession]: t.isPlenumSession,
                })}
                style={{
                  gridColumn: t.isPlenumSession
                    ? `track-${rooms[0].sessionizeid} / span ${rooms.length} `
                    : `track-${t.room?.sessionizeid}`,
                  gridRow: `time-${format(
                    new Date(t.startsAt?.time),
                    'HHmm',
                  )} / time-${format(new Date(t.endsAt?.time), 'HHmm')}`,
                }}
              >
                <h2>{t.title}</h2>
                {!!t.speakers?.length ? <h3>{t.speakers[0].title}</h3> : null}
                <div className={styles.talkInfo}>
                  <div className={styles.talkTime}>
                    {t.startsAt ? (
                      <DateFormat
                        date={new Date(t.startsAt.time)}
                        dateFormat={'h:mmaaa '}
                      />
                    ) : null}
                    {t.startsAt && t.endsAt ? (
                      <>
                        {' '}
                        -{' '}
                        <Duration
                          startsAt={new Date(t.startsAt.time)}
                          endsAt={new Date(t.endsAt.time)}
                        />
                      </>
                    ) : null}
                  </div>
                  {!t.isPlenumSession ? (
                    <div className={styles.talkRoom}>{t.room?.title}</div>
                  ) : null}
                </div>
                {!t.isPlenumSession ? <CardLink link={t.path} /> : null}
              </div>
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};
