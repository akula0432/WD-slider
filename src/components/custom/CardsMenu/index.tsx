import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {Button} from '../../core/Button';
import styles from './styles';
import {IMenuOption, useMenuOptions} from './options/useMenuOptions';

const keyExtractor = ({option}: IMenuOption) => option;

export const CardsMenu = () => {
  const menuOptions = useMenuOptions();

  const renderItem: ListRenderItem<IMenuOption> = ({item}) => {
    const {option, Icon, handlePress} = item;

    return (
      <Button onPress={handlePress}>
        <Icon width={16} height={16} />
        <Text style={styles.text}>{option}</Text>
      </Button>
    );
  };

  return (
    <View>
      <FlatList
        data={menuOptions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        horizontal
      />
    </View>
  );
};
