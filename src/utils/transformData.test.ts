import { describe, expect, it } from 'vitest';
import dayjs from 'dayjs';
import { isValidDate } from './transformData';
describe('mati coding app testing tranformData', () => {
  // describe -> Used to group the test and used to describe what is currently being tested
  it('isValidDate function', () => {
    // it or test -> Individual test which is run by Vitest. It can either pass or fail
    
    // test function isValidDate
    expect(isValidDate('12/10/2022')).toBe(true);
    expect(isValidDate('22/12/202')).toBe(false);
    expect(isValidDate('22/12/20222')).toBe(false);
    expect(isValidDate('22')).toBe(false);
    expect(isValidDate('test')).toBe(false);
  });
});
