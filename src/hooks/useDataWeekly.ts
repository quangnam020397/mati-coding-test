import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { DATE_TIME_FORMAT } from '../constants';
import { ICollectionData, IDataWeekly } from '../interfaces';
import { formatDate, generateId } from '../utils';
import useCalendarQuery from './useCalendarQuery';

export interface useDataWeeklyProps {
  days: Dayjs[];
}

const useDataWeekly = ({ days }: useDataWeeklyProps) => {
  const [data, setData] = useState<IDataWeekly[]>([]);

  const { data: dataApi, isLoading } = useCalendarQuery({
    from: days[0],
    to: days[days.length - 1],
  });

  useEffect(() => {
    // transform dataApi to data
    const dataApiTransformed: IDataWeekly[] = days.map((day) => {
      const collections = dataApi.filter((collection) => {
        const date = dayjs(collection.date);
        return date.isSame(day, 'day');
      });

      return {
        id: generateId(),
        day: day,
        collections,
      };
    });

    setData(dataApiTransformed);
  }, [dataApi]);

  return { data, setData };
};

export default useDataWeekly;
