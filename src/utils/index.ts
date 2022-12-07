export * from './transformData';

// generate string unique id with length input
export const generateId = (length: number = 10): string => {
  return Math.random().toString(36).substr(2, length);
};
