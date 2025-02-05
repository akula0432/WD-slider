import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {Button} from '../../core/Button';
import {styles} from './styles';
import {useCardOptions, ICardOption} from './options/useCardOptions';
import {useSelector} from 'react-redux';
import {currentCardSelector} from '../../../store/modules/Cards/selectors';

const keyExtractor = (_: unknown, index: number) => index.toString();

export const CardOptionsMenu = () => {
  const cardOptions = useCardOptions();

  const currentCardIndex = useSelector(currentCardSelector);

  const renderItem: ListRenderItem<ICardOption> = ({item}) => {
    const {Icon, handlePress} = item;

    return (
      <Button
        onPress={() => handlePress(currentCardIndex)}
        customStyles={styles.button}>
        <Icon width={16} height={17} />
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={cardOptions}
        keyExtractor={keyExtractor}
        horizontal
        renderItem={renderItem}
      />
    </View>
  );
};
