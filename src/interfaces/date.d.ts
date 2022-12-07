import { Dayjs } from "dayjs";

export interface IWeeklyData {
  start: Dayjs;
  end: Dayjs;
  offset: number;
}
