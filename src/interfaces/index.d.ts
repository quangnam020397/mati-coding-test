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


export type axiosContentType = 'multipart/form-data'| 'application/json';


// export type TReqLogin = {
//   username: string;
//   password: string;
// };

export type TResData<T> = {
  data: T;
  status: number;
  isSuccess: boolean;
};

// export interface ILoginResponse {
//   infoUser: any;
//   token: string;
//   success: boolean;
// }

// // export type T
