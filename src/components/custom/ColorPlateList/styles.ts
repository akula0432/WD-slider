import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING } from '../../../constants/cardLayout';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 33,
    height: 33,
  },
  container: {
    paddingHorizontal: CONTAINER_PADDING,
    marginBottom: 16,
  },
  list: {
    flexGrow: 1,
    gap: 16,
    justifyContent: 'center',
  },
});
