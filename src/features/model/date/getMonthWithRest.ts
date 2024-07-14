import { IDate } from '../../../shared/api/types';
import { getMonthLimits } from './getMonthLimits';

export const getMonthWithRest = (currentDateId: string) => {
  const { firstMondayDateObject, firstDateObject, currentDateObject, lastDateObject, lastSundayDateObject, lastDateForPreviousMonth } = getMonthLimits(currentDateId);

  const dates: IDate[] = [];

  if (firstMondayDateObject.getMonth() !== firstDateObject.getMonth()) {
    for (let i = firstMondayDateObject.getDate(); i <= lastDateForPreviousMonth.getDate(); ++i) {
      const y = firstMondayDateObject.getFullYear();
      const m = firstMondayDateObject.getMonth();
      const d = i;
      dates.push({
        dateId: `${y}-${String(m).length === 1 ? '0' : ''}${m + 1}-${d}`,
        date: i, 
        status: 'passive'
      });
    }
  }
  for (let i = 1; i <= lastDateObject.getDate(); ++i) {
    const y = currentDateObject.getFullYear();
    const m = currentDateObject.getMonth();
    const d = i;
    dates.push({
      dateId: `${y}-${String(m).length === 1 ? '0' : ''}${m + 1}-${d}`,
      date: i, 
      status: 'active'
    });
  }
  if (lastDateObject.getMonth() !== lastSundayDateObject.getMonth()) {
    for (let i = 1; i <= lastSundayDateObject.getDate(); ++i) {
      const y = lastSundayDateObject.getFullYear();
      const m = lastSundayDateObject.getMonth();
      const d = i;
      dates.push({
        dateId: `${y}-${String(m).length === 1 ? '0' : ''}${m + 1}-${d}`,
        date: i,
        status: 'passive',
      });
    }
  }

  return dates;
}
