import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, onPress, color, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
}
