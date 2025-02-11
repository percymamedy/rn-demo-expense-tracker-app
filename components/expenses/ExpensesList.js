import { View, Text, StyleSheet, FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

export default function ExpensesList({ data }) {
  const renderExpenseItem = ({ item }) => {
    const props = {
      id: item.id,
      amount: item.amount,
      description: item.description,
      date: item.date.toLocaleDateString('en-US'),
    };

    return <ExpenseItem {...props} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderExpenseItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
});
