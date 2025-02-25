import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import useGlobalStyles from '../../constants/styles';

const { colors } = useGlobalStyles();

export default function TransparentButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary50,
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 120,
  },
  title: {
    color: colors.primary950,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
