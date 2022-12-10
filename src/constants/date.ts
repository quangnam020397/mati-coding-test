// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/naming-convention
export const DATE_TIME_FORMAT = {
  SHORT: 'M/d/yy, h:mm a', // ex: 6/15/15, 9:03 AM
  MEDIUM: 'MMM d, y, h:mm:ss a', // ex: Jun 15, 2015, 9:03:01 AM
  LONG: 'MMMM d, y, h:mm:ss a z', // ex: June 15, 2015 at 9:03:01 AM GMT+1
  FULL: 'EEEE, MMMM d, y, h:mm:ss a zzzz', // ex: Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
  SHORT_DATE: 'M/d/yy', // ex: 6/15/15
  MEDIUM_DATE: 'MMM d, y', // ex: Jun 15, 2015
  LONG_DATE: 'MMMM d, y', // ex: June 15, 2015
  FULL_DATE: 'EEEE, MMMM d, y', // ex: Monday, June 15, 2015
  SHORT_TIME: 'h:mm a', // ex: 9:03 AM
  MEDIUM_TIME: 'h:mm:ss a', // ex: 9:03:01 AM
  LONG_TIME: 'h:mm:ss a z', // ex: 9:03:01 AM GMT+1
  FULL_TIME: 'h:mm:ss a zzzz', // ex: 9:03:01 AM GMT+01:00
  DEFAULT: 'DD/MM/YYYY', // ex: 6/15/15, 9:03 AM
  NAME_OF_DAY_OF_WEEK: 'dddd', // ex: Monday
  DAY_OF_MONTH: 'DD', // ex: 15
};
