import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import Input from './Input';
import PrimaryButton from '../ui/PrimaryButton';
import TransparentButton from '../ui/TransparentButton';

import useGlobalStyles from '../../constants/styles';

import { getFormattedDate } from '../../utils/date';

const { colors } = useGlobalStyles();

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSave,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues
        ? getFormattedDate(new Date(defaultValues.date))
        : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHanlder() {
    const amountIsValid =
      !isNaN(+inputs.amount.value) && +inputs.amount.value > 0;
    const dateIsValid =
      new Date(inputs.date.value).toString() !== 'Invalid Date';
    const descriptionIsValid = inputs.description.value.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs(currentInputs => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });

      return;
    }

    const expenseData = {
      id: defaultValues ? defaultValues.id : Math.random().toString(),
      amount: +inputs.amount.value,
      date: getFormattedDate(new Date(inputs.date.value)),
      description: inputs.description.value,
    };

    onSave(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.formStyle}>
      <Text style={styles.titleStyle}>Expense details</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: 'sentences',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TransparentButton title="Cancel" onPress={onCancel} />
        <PrimaryButton title={submitButtonLabel} onPress={submitHanlder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40,
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
    textAlign: 'center',
    color: colors.primary950,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  errorText: {
    textAlign: 'center',
    color: colors.red500,
    margin: 8,
  },
});
