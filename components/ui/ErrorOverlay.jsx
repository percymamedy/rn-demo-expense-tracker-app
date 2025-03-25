import { View, Text, StyleSheet, Button } from 'react-native';

import useGlobalStyles from '../../constants/styles';

const { colors } = useGlobalStyles();

export default function ErrorOverlay({ message, buttonTitle, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      {onConfirm && <Button title={buttonTitle} onPress={onConfirm} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.primary700,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
  },
});
