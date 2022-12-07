import dayjs from 'dayjs';
import { useCallback, useMemo, useState } from 'react';
import { IWeeklyData } from '../interfaces/date';

export const useSelectWeek = () => {
  const [offset, setOffset] = useState(0);

  const [weeklyData, setWeeklyData] = useState<IWeeklyData>({
    start: dayjs().startOf('week'),
    end: dayjs().endOf('week'),
    offset: 0,
  });

  const selectWeek = useCallback((offset: number) => {
    setWeeklyData({
      start: dayjs().add(offset, 'week').startOf('week'),
      end: dayjs().add(offset, 'week').endOf('week'),
      offset,
    });
  }, []);

  const nextWeek = useCallback(() => {
    selectWeek(offset + 1);
    setOffset(offset + 1);
  }, [offset, selectWeek]);

  const prevWeek = useCallback(() => {
    selectWeek(offset - 1);
    setOffset(offset - 1);
  }, [offset, selectWeek]);

  const days = useMemo(() => Array.from({ length: 7 }, (_, i) => weeklyData.start.add(i, 'day')), [weeklyData.start]);

  return { weeklyData, days, selectWeek, nextWeek, prevWeek };
};
