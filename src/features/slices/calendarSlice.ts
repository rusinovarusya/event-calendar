import { createSlice } from '@reduxjs/toolkit';
import { createDateId } from '../model/date/createDateId';

export interface CalendarState {
  dateId: string;
}

const initialState: CalendarState = {
  dateId: createDateId(new Date()),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getPreviousMonthDateId: (state) => {
      const currentDateObject = new Date(state.dateId);
      const year = currentDateObject.getFullYear();
      const month = currentDateObject.getMonth();
      const prevMonthDateObject = new Date(year, month - 1, 1);

      state.dateId = createDateId(prevMonthDateObject);
    },
    getNextMonthDateId: (state) => {
      const currentDateObject = new Date(state.dateId);
      const year = currentDateObject.getFullYear();
      const month = currentDateObject.getMonth();
      const nextMonthDateObject = new Date(year, month + 1, 1);

      state.dateId = createDateId(nextMonthDateObject);
    },
  },
})

export const { getPreviousMonthDateId, getNextMonthDateId } = calendarSlice.actions;

export const { reducer: calendarReducer } = calendarSlice;
