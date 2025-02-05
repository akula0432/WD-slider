import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PlusIcon} from '../../../../assets/icons/PlusIcon';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {addCard, ICard} from '../../../../store/modules/Cards/reducer';
import uuid from 'react-native-uuid';

export const AddCardButton = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const newCard: ICard = {
    id: uuid.v4(),
    title: 'Title goes here',
    description: 'Description goes here',
    plate: {
      titleColor: 'black',
      descriptionColor: 'black',
    },
    fonts: {
      titleFontWeight: '300',
      descriptionFontWeight: '300',
    },
    position: {
      x: 0,
      y: 0,
    },
  };

  const handlePress = () => {
    dispatch(addCard(newCard));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <PlusIcon width={16} height={16} stroke={'#527aff'} />
    </TouchableOpacity>
  );
};
