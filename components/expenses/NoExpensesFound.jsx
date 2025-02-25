import { StyleSheet, Text, View } from 'react-native';

export default function NoExpensesFound({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title || 'No expenses found'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});
