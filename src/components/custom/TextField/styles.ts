import {StyleSheet} from 'react-native';

export const useStyles = (textColor: string, fontWeight: '300' | '500' | '700') => {
  return StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: fontWeight,
      color: textColor,
   },
    description: {
      fontSize: 18,
      color: textColor,
      fontWeight: fontWeight,
    },
  });
};

