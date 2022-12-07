import { Dayjs } from 'dayjs';
import { IDataWeekly } from '../../../interfaces';
import ColumnDay from '../components/ColumnDay';
import styles from './styles.module.scss';

interface CalendarBodyProps {
  data: IDataWeekly[];
  handler: any;
}

function CalendarBody({ data, handler }: CalendarBodyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        {data.map((day) => (
          <ColumnDay handler={handler} key={day.id} collections={day.collections} date={day.day} />
        ))}
      </div>
    </div>
  );
}

export default CalendarBody;
