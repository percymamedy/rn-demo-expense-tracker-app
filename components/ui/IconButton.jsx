import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({
  icon,
  onPress,
  color,
  size,
  buttonStyles,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}
