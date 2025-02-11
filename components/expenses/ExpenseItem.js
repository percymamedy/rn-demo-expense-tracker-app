import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../constants/colors';

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
          <Text style={styles.date}>{date}</Text>
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
    backgroundColor: colors['primary-800'],
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountContainer: {
    backgroundColor: colors['primary-100'],
    padding: 10,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors['primary-50'],
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: colors['primary-50'],
  },
  amount: {
    color: colors['primary-700'],
    fontSize: 16,
    fontWeight: 'bold',
  },
});
