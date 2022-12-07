import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { DATE_TIME_FORMAT } from '../constants';
import { IDataWeekly } from '../interfaces';
import { formatDate, generateId } from '../utils';

export interface useDataWeeklyProps {
  days: Dayjs[];
}

const useDataWeekly = ({ days }: useDataWeeklyProps) => {
  const [data, setData] = useState<IDataWeekly[]>([]);

  useEffect(() => {
    const _data = days.map((item, index) => {
      const quantityCollection = Math.floor(Math.random() * 6) + 1;
      return {
        id: generateId(),
        day: item,
        collections: Array.from({ length: quantityCollection }, (_, i) => {
          const quantityItem = Math.floor(Math.random() * 6) + 1;
          return {
            id: generateId(),
            name: `Collection ${item.format('DD-MM')} ${i}`,
            items: Array.from({ length: quantityItem }, (_, i) => {
              return {
                id: generateId(),
                name: `Item ${i}`,
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
