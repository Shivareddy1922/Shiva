import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ 
  placeholder, 
  value, 
  onChangeText, 
  style, 
  keyboardType = 'default',
  secureTextEntry = false,
  ...props 
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#999999"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e3e4e5',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f5f7fc',
    color: '#000000',
  },
});

export default Input;