import { createSelector, createSlice } from '@reduxjs/toolkit';
import Expense from '../../models/Expense';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.value = state.value.filter(
        expense => expense.id !== action.payload
      );
    },
    updateExpense: (state, action) => {
      const index = state.value.findIndex(
        expense => expense.id === action.payload.id
      );
      state.value[index] = action.payload;
    },
    loadExpenses: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addExpense, removeExpense, updateExpense, loadExpenses } = counterSlice.actions;

const expenses = state => state.expenses.value;

export const allExpenses = createSelector([expenses], expenses =>
  expenses
    .map(
      expense =>
        new Expense(
          expense.id,
          expense.amount,
          expense.description,
          new Date(expense.date)
        )
    )
    .sort((a, b) => b.date - a.date)
);

export const recentExpenses = createSelector([expenses], expenses => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return expenses
    .map(
      expense =>
        new Expense(
          expense.id,
          expense.amount,
          expense.description,
          new Date(expense.date)
        )
    )
    .filter(expense => expense.date >= sevenDaysAgo)
    .sort((a, b) => b.date - a.date);
});

export default counterSlice.reducer;
