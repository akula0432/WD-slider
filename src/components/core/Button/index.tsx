import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  customStyles?: {};
}

export const Button = ({onPress, customStyles, children}: ButtonProps) => (
  <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
    {children}
  </TouchableOpacity>
);
