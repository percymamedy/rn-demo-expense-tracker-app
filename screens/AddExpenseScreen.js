import { View, StyleSheet } from 'react-native';

import Container from '../components/ui/Container';

import PrimaryButton from '../components/ui/PrimaryButton';
import TransparentButton from '../components/ui/TransparentButton';

export default function AddExpenseScreen({ navigation }) {
  function handleCancel() {
    navigation.goBack();
  }

  return (
    <Container>
      <View style={styles.formContainer}>
        <TransparentButton title="Cancel" onPress={handleCancel} />
        <PrimaryButton title="Add" onPress={() => {}} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
