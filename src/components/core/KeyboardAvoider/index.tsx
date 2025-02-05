import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {styles} from './styles';

interface KeyboardAvoiderProps {
  children: React.ReactNode;
}

export const KeyboardAvoider = ({children}: KeyboardAvoiderProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {children}
    </KeyboardAvoidingView>
  );
};
