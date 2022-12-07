import { Dayjs } from 'dayjs';

export * from './date';

export interface IDataWeekly {
  id: string;
  day: Dayjs;
  collections: ICollection[];
}

export interface ICollectionData {
  id: string;
  name: string;
  items: IItemData[];
  index: number;
}

export interface IItemData {
  id: string;
  name: string;
  quantity: number;
  description: string;
  index: number;
}
