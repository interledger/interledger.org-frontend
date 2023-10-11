import { toDate, utcToZonedTime } from 'date-fns-tz';

export const externalLink = (link: string) => !link.toString().startsWith('/');

export const getUtcDate = (date: string) => {
  const parsedDate = toDate(date);
  const utcDate = utcToZonedTime(parsedDate, 'UTC');
  return utcDate;
};
