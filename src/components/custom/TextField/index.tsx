import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useStyles} from './styles';

interface TextFieldIE extends TextInputProps {
  variant: 'title' | 'description';
  value: string;
  handleChangeText: (newValue: string) => void;
  textColor: string;
  fontWeight: '300' | '500' | '700';
}

export const TextField: React.FC<TextFieldIE> = ({
  value,
  variant,
  handleChangeText,
  onFocus,
  textColor,
  fontWeight,
}) => {
  const styles = useStyles(textColor, fontWeight);

  return (
    <TextInput
      value={value}
      onChangeText={handleChangeText}
      style={[
        variant === 'title' && styles.title,
        variant === 'description' && styles.description,
      ]}
      onFocus={onFocus}
    />
  );
};
