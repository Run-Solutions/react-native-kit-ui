import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

export default function TextInput({ value, onChangeText, placeholder, style, ...rest }) {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.input, style]}
      placeholderTextColor="#888"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#222',
  },
});
