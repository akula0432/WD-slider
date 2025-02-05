import {Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

export const CONTAINER_PADDING = 16;
export const CARDS_CONTAINER_PADDING = 16;
export const CARDS_GAP = 16;
export const NEXT_CARD_VISIBLE_PX = 30;

export const CARD_WIDTH =
  width -
  2 * CONTAINER_PADDING -
  CARDS_CONTAINER_PADDING -
  CARDS_GAP -
  NEXT_CARD_VISIBLE_PX;
export const SNAP_INTERVAL = CARD_WIDTH + CARDS_GAP + CARDS_CONTAINER_PADDING;
