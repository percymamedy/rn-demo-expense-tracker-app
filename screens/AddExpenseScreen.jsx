import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Container from '../components/ui/Container';

import ExpenseForm from '../components/manage-expense/ExpenseForm';

import { addExpense } from '../store/expenses/expenseSlice';

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch();

  function handleCancel() {
    navigation.goBack();
  }

  function saveExpense(expenseData) {
    dispatch(addExpense(expenseData));
    navigation.goBack();
  }

  return (
    <Container>
      <ExpenseForm
        submitButtonLabel="Add"
        onCancel={handleCancel}
        onSave={saveExpense}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
