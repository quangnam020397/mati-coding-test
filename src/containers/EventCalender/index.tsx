import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import { useSelectWeek } from '../../hooks';

import styles from './styles.module.scss';
import useDataWeekly from '../../hooks/useDataWeekly';
import useDragDrop from '../../hooks/useDragDrop';

function EventCalender() {
  const { nextWeek, prevWeek, weeklyData, days } = useSelectWeek();

  const { data, setData } = useDataWeekly({ days });

  const handler = useDragDrop(setData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CalendarHeader nextWeek={nextWeek} prevWeek={prevWeek} weeklyData={weeklyData} />
      </div>
      <div className={styles.body}>
        <CalendarBody handler={handler} data={data} />
      </div>
    </div>
  );
}

export default EventCalender;
