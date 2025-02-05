import React from 'react';
import {FlatList, View} from 'react-native';
import Thumbnail from './Thumbnail';
import styles from './styles';
import {ICard} from '../../../store/modules/Cards/reducer';
import {AddCardButton} from './AddCardButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';
import {cardsSelector} from '../../../store/modules/Cards/selectors';

type PaginationProps = {
  flatListRef: React.RefObject<FlatList<ICard>>;
};

const keyExtractor = ({id}: ICard) => id;

export const CardsPagination = React.memo(({flatListRef}: PaginationProps) => {
  const currentCardIndex = useSelector(
    (state: RootState) => state.cards.setCurrentCardIndex,
  );

  const cards = useSelector(cardsSelector);

  const scrollToCard = (index: number) => {
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        data={cards}
        renderItem={({index}) => {
          const isActive = index === currentCardIndex;
          return (
            <Thumbnail
              isActive={isActive}
              handlePress={scrollToCard}
              index={index}
            />
          );
        }}
        horizontal
        ListFooterComponent={<AddCardButton />}
      />
    </View>
  );
});
