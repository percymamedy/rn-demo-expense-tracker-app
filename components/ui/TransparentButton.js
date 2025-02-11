import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export default function TransparentButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['primary-50'],
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 120,
  },
  title: {
    color: colors['primary-950'],
    fontSize: 16,
    fontWeight: 'bold',
  },
});
