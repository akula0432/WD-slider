import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import {Button} from '../../core/Button';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  setChangeTextColor,
  setOpenPlate,
} from '../../../store/modules/Cards/reducer';
import {currentInputFocusSelector} from '../../../store/modules/Cards/selectors';

interface PlateIE {
  id: string;
  color: string;
}

const COLOR_PLATE: PlateIE[] = [
  {
    id: '1',
    color: 'green',
  },
  {
    id: '2',
    color: 'red',
  },
  {
    id: '3',
    color: 'blue',
  },
  {
    id: '4',
    color: 'yellow',
  },
];

const keyExtractor = ({id}: PlateIE) => id;

export const ColorPlateList = () => {
  const currentInputFocus = useSelector(currentInputFocusSelector);
  const dispatch = useDispatch();

  const renderItem: ListRenderItem<PlateIE> = ({item}) => {
    const {color} = item;

    const handleChangeText = () => {
      switch (currentInputFocus) {
        case 'title': {
          dispatch(setChangeTextColor({titleColor: color}));
          break;
        }
        case 'description': {
          dispatch(setChangeTextColor({descriptionColor: color}));
          break;
        }
      }
    };

    return (
      <Button
        onPress={handleChangeText}
        customStyles={[styles.button, {backgroundColor: color}]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={COLOR_PLATE}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <Button
            onPress={() => dispatch(setOpenPlate(false))}
            customStyles={styles.button}
          />
        }
        horizontal
      />
    </View>
  );
};
