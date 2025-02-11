import { useSelector } from 'react-redux';

import Container from '../components/ui/Container';
import ExpenseSummary from '../components/expenses/ExpenseSummary';
import ExpensesList from '../components/expenses/ExpensesList';
import NoExpensesFound from '../components/expenses/NoExpensesFound';

import { allExpenses } from '../store/expenses/expenseSlice';

export default function AllExpensesScreen() {
  const expensesList = useSelector(allExpenses);
  const totalAmount = expensesList.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <Container>
      <ExpenseSummary title="Total" amount={totalAmount} />
      {expensesList.length > 0 ? (
        <ExpensesList data={expensesList} />
      ) : (
        <NoExpensesFound />
      )}
    </Container>
  );
}
