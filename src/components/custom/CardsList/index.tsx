import React from 'react';
import {ICard} from '../../../store/modules/Cards/reducer';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {SNAP_INTERVAL} from '../../../constants/cardLayout';
import styles from './styles';
import {Card} from '../Card';
import {useDispatch} from 'react-redux';
import {setCurrentCardIndex} from '../../../store/modules/Cards/reducer';
import {useSelector} from 'react-redux';
import {
  cardsSelector,
  currentCardSelector,
} from '../../../store/modules/Cards/selectors';

type CardsListProps = {
  flatListRef: React.RefObject<FlatList<ICard>>;
};

const keyExtractor = ({id}: ICard) => id;

export const CardsList = React.memo(({flatListRef}: CardsListProps) => {
  const dispatch = useDispatch();

  const currentCardIndex = useSelector(currentCardSelector);

  const cards = useSelector(cardsSelector);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SNAP_INTERVAL);

    if (newIndex !== currentCardIndex) {
      dispatch(setCurrentCardIndex(newIndex));
    }
  };

  return (
    <FlatList
      ref={flatListRef}
      data={cards}
      horizontal
      pagingEnabled
      snapToInterval={SNAP_INTERVAL}
      snapToAlignment="start"
      decelerationRate="fast"
      scrollEventThrottle={16}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      contentContainerStyle={styles.container}
      renderItem={({item}) => <Card card={item} />}
    />
  );
});
