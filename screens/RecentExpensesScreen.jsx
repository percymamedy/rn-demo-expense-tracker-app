import { useSelector } from 'react-redux';

import { recentExpenses } from '../store/expenses/expenseSlice';

import ExpensesOutput from '../components/expenses/ExpensesOutput';

export default function RecentExpensesScreen() {
  const expensesList = useSelector(recentExpenses);

  return (
    <ExpensesOutput
      title="Last 7 days"
      expensesList={expensesList}
      noExpensesFoundTitle="No expenses found in the last 7days"
    />
  );
}
