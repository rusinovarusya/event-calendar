
import { IDate } from '../../../shared/api/types';
import { getMonthWithRest } from './getMonthWithRest';

export const getMonthWithRestByWeek = (dateId: string) => {
  const array = getMonthWithRest(dateId);
  const arrays: IDate[][] = [];

  for (let i = 0; i < array.length/7; ++i) {
    const week: IDate[] = [];
    for (let j = 0; j < 7; ++j) {
      week.push(array[i * 7 + j]);
    }
    arrays.push(week);
  }
  return arrays;
}
