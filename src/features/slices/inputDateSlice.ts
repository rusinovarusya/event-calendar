import { createSlice } from '@reduxjs/toolkit';
import { createDateId } from '../model/date/createDateId';

export interface InputDateState {
  dateId: string;
}

const initialState: InputDateState = {
  dateId: createDateId(new Date()),
}

export const inputDateSlice = createSlice({
  name: 'inputDate',
  initialState,
  reducers: {
    getPreviousMonthDateId: (state) => {
      const currentDateId = state.dateId;
      const currentDateObject = new Date(currentDateId);
      const prevMonthDateObject = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth() - 1, 1);

      state.dateId = createDateId(prevMonthDateObject);
    },
    getNextMonthDateId: (state) => {
      const currentDateId = state.dateId;
      const currentDateObject = new Date(currentDateId);
      const nextMonthDateObject = new Date(currentDateObject.getFullYear(), currentDateObject.getMonth() + 1, 1);

      state.dateId = createDateId(nextMonthDateObject);
    },
  },
})

export const { getPreviousMonthDateId, getNextMonthDateId } = inputDateSlice.actions;

export const { reducer: inputDateReducer } = inputDateSlice;
