// this file using to store all the data in the local storage

import { Collection, Event } from '../models';
import dayjs from 'dayjs';
import { randomWordGenerator, generateID } from '../utils/randomize';

// TODO: replace this with a real database
class Storage {
  private _collections: Collection[] = [];

  constructor() {
    this.mockupData();
  }

  // mockup data collection for all day in this month with random collection on a day
  private mockupData = () => {
    const today = new Date();
    const firstDay = dayjs(today).startOf('month').toDate();
    const lastDay = dayjs(today).endOf('month').toDate();

    const days = Array.from({ length: lastDay.getDate() }, (_, i) => {
      return dayjs(firstDay).add(i, 'day');
    });

    const data = days.map((day, index) => {
      const collectionId = generateID();
      const items = Array.from({ length: Math.floor(Math.random() * 5) }, (_, i) => {
        return new Event(
          generateID(),
          `Event ${i + 1}`,
          day.toDate(),
          randomWordGenerator(),
          collectionId,
          Math.floor(Math.random() * 10),
          i + 1,
        );
      });
      return new Collection(collectionId, `Collection ${index + 1}`, index + 1, day.toDate(), items);
    });

    this._collections = data;
  };

  //   private mockupData = () => {
  //     const today = new Date();
  //     const firstDay = dayjs(today).startOf('month').toDate();
  //     const lastDay = dayjs(today).endOf('month').toDate();

  //     const days = Array.from({ length: lastDay.getDate() }, (_, i) => {
  //       return dayjs(firstDay).add(i, 'day');
  //     });

  //     const data = days.map((day, index) => {
  //       return new Collection(generateID(), `Collection ${index + 1}`, index + 1, day.toDate(), []);
  //     });

  //     this._collections = data;
  //   };

  get collections(): Collection[] {
    return this._collections;
  }

  set collections(value: Collection[]) {
    this._collections = value;
  }

  clear() {
    this._collections = [];
  }
}

export const storage = new Storage();
