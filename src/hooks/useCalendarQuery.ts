import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import axiosService from '../services/axios.service';

interface ICalendarProps {
  from: Dayjs;
  to: Dayjs;
}

const useCalendarQuery = ({ from, to }: ICalendarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      // build query params
      const params = {
        from: from.toISOString(),
        to: to.toISOString(),
      };

      const result = await axiosService.getMethod<any[]>('/calendar', params);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [from, to]);

  return { data, isLoading };
};

export default useCalendarQuery;
