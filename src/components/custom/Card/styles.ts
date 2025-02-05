import {StyleSheet} from 'react-native';
import {CARDS_GAP, CARD_WIDTH} from '../../../constants/cardLayout';


export const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    width: CARD_WIDTH,
    marginRight: CARDS_GAP,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'lightgray',
    padding: 16,
    rowGap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
});

