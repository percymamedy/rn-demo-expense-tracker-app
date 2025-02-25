import Container from '../ui/Container';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';
import NoExpensesFound from './NoExpensesFound';

export default function ExpensesOutput({
  expensesList,
  title,
  noExpensesFoundTitle,
}) {
  const totalAmount = expensesList.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <Container>
      <ExpenseSummary title={title} amount={totalAmount} />
      {expensesList.length > 0 ? (
        <ExpensesList data={expensesList} />
      ) : (
        <NoExpensesFound title={noExpensesFoundTitle} />
      )}
    </Container>
  );
}
