import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    button: {
      backgroundColor: '#d9e2ff',
      width: 30,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#527aff',
      borderStyle: 'dashed',
    },
  });
};
