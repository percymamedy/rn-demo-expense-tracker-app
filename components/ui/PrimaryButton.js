import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['primary-500'],
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 120,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
