import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Container from '../components/ui/Container';

import PrimaryButton from '../components/ui/PrimaryButton';
import TransparentButton from '../components/ui/TransparentButton';

import { addExpense } from '../store/expenses/expenseSlice';

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch();

  function handleCancel() {
    navigation.goBack();
  }

  function saveExpense() {
    dispatch(
      addExpense({
        id: 'e11',
        amount: 200.75,
        description: 'Test',
        date: new Date().toDateString(),
      })
    );
    navigation.goBack();
  }

  return (
    <Container>
      <View style={styles.formContainer}>
        <TransparentButton title="Cancel" onPress={handleCancel} />
        <PrimaryButton title="Add" onPress={saveExpense} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
