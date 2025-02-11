import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Container from '../components/ui/Container';
import PrimaryButton from '../components/ui/PrimaryButton';
import TransparentButton from '../components/ui/TransparentButton';
import IconButton from '../components/ui/IconButton';

import { colors } from '../constants/colors';
import { removeExpense } from '../store/expenses/expenseSlice';

export default function EditExpenseScreen({ route, navigation }) {
  const expenseId = route.params.id;
  const dispatch = useDispatch();

  function handleCancel() {
    navigation.goBack();
  }

  function handleDelete() {
    dispatch(removeExpense(expenseId));
    navigation.goBack();
  }

  return (
    <Container>
      <View style={styles.formContainer}>
        <TransparentButton title="Cancel" onPress={handleCancel} />
        <PrimaryButton title="Update" onPress={() => {}} />
      </View>
      <View style={styles.deleteButtonContainer}>
        <IconButton
          icon="trash"
          color={colors['red-400']}
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
    borderTopColor: colors['primary-950'],
    paddingTop: 10,
  },
});
