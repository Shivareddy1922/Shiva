import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ 
  children, 
  onPress, 
  style, 
  textStyle, 
  disabled = false,
  variant = 'default' 
}) => {
  const buttonStyles = [
    styles.button,
    variant === 'ghost' && styles.ghostButton,
    disabled && styles.disabled,
    style
  ];

  const textStyles = [
    styles.text,
    variant === 'ghost' && styles.ghostText,
    disabled && styles.disabledText,
    textStyle
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress} 
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#74a4ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  ghostText: {
    color: '#74a4ee',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#999999',
  },
});

export default Button;