import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export const AccountInput = ({ input, placeholder, password, invalid }) => {
  return (
    <TextInput
      autoCapitalize="none"
      style={
        invalid ? [styles.input, styles.invalid] : [styles.input, styles.valid]
      }
      placeholder={placeholder}
      placeholderTextColor={invalid ? '#d84934' : '#0082B580'}
      {...input}
      secureTextEntry={password}
    />
  );
};
