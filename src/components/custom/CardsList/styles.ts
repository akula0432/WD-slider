import {StyleSheet} from 'react-native';
import {
  CARDS_CONTAINER_PADDING,
  CARDS_GAP,
} from '../../../constants/cardLayout';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CARDS_CONTAINER_PADDING,
    gap: CARDS_GAP,
    flexGrow: 1,
  },
});

export default styles;
