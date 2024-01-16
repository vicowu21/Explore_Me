import React, { FC } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  text: string;
  onChangeText: (text: string) => void;
}

const InputField: FC<InputFieldProps> = ({ placeholder, text, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={text}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        // padding: 10,
        fontSize: 20,
        borderBottomWidth: 2,  // Add a border below the text
        borderColor: 'black',
        fontWeight: 'bold',  // Make the text bold
        marginBottom: 20,
        marginLeft: 20,
       

      },
});

export default InputField;
