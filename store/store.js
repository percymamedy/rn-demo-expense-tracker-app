import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expenses/expenseSlice';

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
