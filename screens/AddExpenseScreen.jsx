import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from '../components/ui/Container';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ExpenseForm from '../components/manage-expense/ExpenseForm';

import { addExpense } from '../store/expenses/expenseSlice';
import { storeExpense } from '../utils/http';

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  function handleCancel() {
    navigation.goBack();
  }

  async function saveExpense(expenseData) {
    try {
      setSaving(true);

      const id = await storeExpense(expenseData);

      dispatch(addExpense({ ...expenseData, id }));

      navigation.goBack();
    } catch (error) {
      setError('An error occurred while saving the expense.');
      console.warn(error);
    } finally {
      setSaving(false);
    }
  }

  if (error) {
    return (
      <ErrorOverlay
        message={error}
        buttonTitle="Go back"
        onConfirm={() => navigation.goBack()}
      />
    );
  }

  if (saving) {
    return <LoadingOverlay />;
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
