import { useSelector } from 'react-redux';

import { allExpenses } from '../store/expenses/expenseSlice';

import ExpensesOutput from '../components/expenses/ExpensesOutput';

export default function AllExpensesScreen() {
  const expensesList = useSelector(allExpenses);

  return (
    <ExpensesOutput
      title="Total"
      expensesList={expensesList}
      noExpensesFoundTitle="No expenses found"
    />
  );
}
