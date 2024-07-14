import { configureStore } from '@reduxjs/toolkit';
import { plannerApi } from '../shared/api/plannerApi';
import { inputDateReducer } from '../features/slices/inputDateSlice';
import { calendarReducer } from '../features/slices/calendarSlice';
import { modalReducer } from '../features/slices/modalSlice';

export const store = configureStore({
  reducer: {
    inputDate: inputDateReducer,
    calendar: calendarReducer,
    modal: modalReducer,
    [plannerApi.reducerPath]: plannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      plannerApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
