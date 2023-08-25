import { differenceInMinutes } from 'date-fns';

export interface DurationProps {
  startsAt: Date;
  endsAt: Date;
}

function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}

/**
 * Duration description
 */

export const Duration = ({ startsAt, endsAt }: DurationProps) => {
  const duration = differenceInMinutes(endsAt, startsAt);

  if (duration < 60) {
    return (
      <>
        {duration}
        {'m'}
      </>
    );
  }

  const { hours, minutes } = toHoursAndMinutes(duration);

  return (
    <>
      {hours}
      {'h'}
      {minutes > 0 ? ` ${minutes}m` : null}
    </>
  );
};
