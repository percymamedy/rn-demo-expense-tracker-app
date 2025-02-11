import { useSelector } from 'react-redux';

import Container from '../components/ui/Container';
import ExpenseSummary from '../components/expenses/ExpenseSummary';
import ExpensesList from '../components/expenses/ExpensesList';
import NoExpensesFound from '../components/expenses/NoExpensesFound';

import { recentExpenses } from '../store/expenses/expenseSlice';

export default function RecentExpensesScreen() {
  const expensesList = useSelector(recentExpenses);
  const totalAmount = expensesList.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <Container>
      <ExpenseSummary title="Last 7 days" amount={totalAmount} />
      {expensesList.length > 0 ? (
        <ExpensesList data={expensesList} />
      ) : (
        <NoExpensesFound title="No expenses found in the last 7days" />
      )}
    </Container>
  );
}
