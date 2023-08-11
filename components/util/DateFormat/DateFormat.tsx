import { format } from 'date-fns';

export interface DateFormatProps {
  /** Optional className for DateFormat, pass in a sass module class to override component default */
  date: Date;
  dateFormat: string;
}

/**
 * DateFormat description
 */

export const DateFormat = ({ date, dateFormat }: DateFormatProps) => {
  return <>{format(date, dateFormat)}</>;
};
