import dayjs, { Dayjs } from 'dayjs';
import { DATE_TIME_FORMAT } from '../constants';

export const isValidDate = (date: string) => dayjs(date).isValid();

export const formatDateFromString = (
  date: string,
  format: string = DATE_TIME_FORMAT.DEFAULT,
): string | null => (isValidDate(date) ? dayjs(date).format(format) : null);

export const formatDate = (
  date: Dayjs | string,
  format: string = DATE_TIME_FORMAT.DEFAULT,
): string | null => {
  if (!date) {
    return null;
  }

  if (typeof date === 'string') {
    return isValidDate(date) ? formatDateFromString(date, format) : null;
  }

  if (date instanceof dayjs) {
    return date.format(format);
  }

  return null;
};
