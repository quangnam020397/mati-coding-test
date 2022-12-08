import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { DATE_TIME_FORMAT } from '../constants';
import { IDataWeekly } from '../interfaces';
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
    const _data = days.map((item, index) => {
      const quantityCollection = Math.floor(Math.random() * 6) + 1;
      return {
        id: generateId(),
        day: item,
        collections: Array.from({ length: quantityCollection }, (_, i) => {
          const quantityItem = Math.floor(Math.random() * 6) + 1;
          const collectionName = `Collection ${item.format('DD-MM')} ${i} ${generateId(10)}`;
          return {
            id: generateId(),
            name: collectionName,
            index: i,
            items: Array.from({ length: quantityItem }, (_, i) => {
              return {
                id: generateId(),
                name: collectionName + ` Item ${i}`,
                quantity: Math.floor(Math.random() * 100) + 1,
                description: `Description ${collectionName} ${i}`,
                index: i,
              };
            }),
          };
        }),
      };
    });

    setData(_data);
  }, [days]);

  return { data, setData };
};

export default useDataWeekly;
