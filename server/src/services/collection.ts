import { Collection } from '../models';
import { storage } from '../storage';

const getCollections = async (): Promise<Collection[]> => {
  return new Promise((resolve, reject) => {
    const data = storage.collections;
    if (!data) {
      return reject(new Error('No data'));
    }
    return resolve(data);
  });
};

const getCollectionById = async (id: string): Promise<Collection | undefined> => {
  return new Promise((resolve, reject) => {
    const data = storage.collections.find((collection) => collection.id === id);
    if (!data) {
      return reject(new Error('No data'));
    }
    return resolve(data);
  });
};

const getCollectionsInRangeDate = async (startDate: Date, endDate: Date): Promise<Collection[]> => {
  return new Promise((resolve, reject) => {
    const data = storage.collections.filter((collection) => {
      return collection.date >= startDate && collection.date <= endDate;
    });
    if (!data) {
      return reject(new Error('No data'));
    }
    return resolve(data);
  });
};

export default {
  getCollections,
  getCollectionById,
  getCollectionsInRangeDate,
};
