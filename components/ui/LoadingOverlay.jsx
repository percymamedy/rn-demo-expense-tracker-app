import { View, ActivityIndicator, StyleSheet } from 'react-native';

import useGlobalStyles from '../../constants/styles';

const { colors } = useGlobalStyles();

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
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
});
