import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/ui/Container';
import IconButton from '../components/ui/IconButton';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ExpenseForm from '../components/manage-expense/ExpenseForm';

import { removeExpense, updateExpense } from '../store/expenses/expenseSlice';
import { expenseById } from '../store/expenses/expenseSlice';

import useGlobalStyles from '../constants/styles';

import {
  updateExpense as updateExpenseRemotely,
  deleteExpense,
} from '../utils/http';

const { colors } = useGlobalStyles();

export default function EditExpenseScreen({ route, navigation }) {
  const expenseId = route.params.id;
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const expense = useSelector(expenseById(expenseId));

  function handleCancel() {
    navigation.goBack();
  }

  async function handleDelete() {
    try {
      setSaving(true);

      await deleteExpense(expenseId);

      dispatch(removeExpense(expenseId));

      navigation.goBack();
    } catch (error) {
      setError('An error occurred while deleting the expense.');
      console.warn(error);
    } finally {
      setSaving(false);
    }
  }

  async function saveUpdatedExpense(expenseData) {
    try {
      setSaving(true);

      await updateExpenseRemotely(expenseId, expenseData);

      dispatch(
        updateExpense({
          id: expenseId,
          amount: expenseData.amount,
          description: expenseData.description,
          date: expenseData.date,
        })
      );

      navigation.goBack();
    } catch (error) {
      setError('An error occurred while updating the expense.');
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
        submitButtonLabel="Update"
        onCancel={handleCancel}
        onSave={saveUpdatedExpense}
        defaultValues={expense}
      />
      <View style={styles.deleteButtonContainer}>
        <IconButton
          icon="trash"
          color={colors.red400}
          size={30}
          onPress={handleDelete}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.primary950,
    paddingTop: 10,
  },
});
