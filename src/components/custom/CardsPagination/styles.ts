import {StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../../constants/cardLayout';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CONTAINER_PADDING,
  },
  list: {
    flexGrow: 1,
    gap: 16,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default styles;
