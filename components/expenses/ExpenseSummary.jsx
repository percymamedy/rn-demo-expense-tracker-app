import { View, Text, StyleSheet } from 'react-native';

import useGlobalStyles from '../../constants/styles';

const { colors } = useGlobalStyles();

export default function ExpenseSummary({ title, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.primary200,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: colors.primary950,
  },
  amount: {
    color: colors.primary950,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
