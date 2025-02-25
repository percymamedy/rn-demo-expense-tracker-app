import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getToLocaleDateString } from '../../utils/date';
import useGlobalStyles from '../../constants/styles';

const { colors } = useGlobalStyles();

export default function ExpenseItem({ id, amount, description, date }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EditExpense', { id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getToLocaleDateString(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.primary800,
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountContainer: {
    backgroundColor: colors.primary100,
    padding: 10,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary50,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: colors.primary50,
  },
  amount: {
    color: colors.primary700,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
