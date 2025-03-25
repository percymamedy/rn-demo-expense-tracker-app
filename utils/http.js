import axios from 'axios';

const BACKEND_URL =
  'https://expense-tracker-b7034-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', {
    amount: expenseData.amount,
    date: expenseData.date,
    description: expenseData.description,
  });

  return response.data.name;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, {
    amount: expenseData.amount,
    date: expenseData.date,
    description: expenseData.description,
  });
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    });
  }

  return expenses;
}
