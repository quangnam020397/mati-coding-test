/* eslint-disable react/jsx-one-expression-per-line */
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { formatDate } from '../../../utils';
import Button from '../../../components/common/Button';
import styles from './styles.module.scss';
import { IWeeklyData } from '../../../interfaces/date';

interface CalendarBodyProps {
  prevWeek: () => void;
  nextWeek: () => void;
  weeklyData: IWeeklyData;
}

function CalendarHeader({ prevWeek, nextWeek, weeklyData }: CalendarBodyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Button type="primary" onClick={prevWeek}>
          <LeftCircleOutlined />
        </Button>
        <div className="flex items-center">
          <div>{formatDate(weeklyData.start)}</div>
          <span> {' - '} </span>
          <div>{formatDate(weeklyData.end)}</div>
        </div>
        <Button type="primary" onClick={nextWeek}>
          <RightCircleOutlined />
        </Button>
      </div>
    </div>
  );
}

export default CalendarHeader;
