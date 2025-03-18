import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/ui/Container';
import IconButton from '../components/ui/IconButton';

import { removeExpense, updateExpense } from '../store/expenses/expenseSlice';

import useGlobalStyles from '../constants/styles';
import ExpenseForm from '../components/manage-expense/ExpenseForm';

import { expenseById } from '../store/expenses/expenseSlice';

const { colors } = useGlobalStyles();

export default function EditExpenseScreen({ route, navigation }) {
  const expenseId = route.params.id;
  const dispatch = useDispatch();

  const expense = useSelector(expenseById(expenseId));

  function handleCancel() {
    navigation.goBack();
  }

  function handleDelete() {
    dispatch(removeExpense(expenseId));
    navigation.goBack();
  }

  function saveUpdatedExpense(expenseData) {
    dispatch(
      updateExpense({
        id: expenseId,
        amount: expenseData.amount,
        description: expenseData.description,
        date: expenseData.date,
      })
    );
    navigation.goBack();
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
