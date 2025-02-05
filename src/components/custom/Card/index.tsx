import React from 'react';
import {styles} from './styles';
import {ICard} from '../../../store/modules/Cards/reducer';
import {useDispatch} from 'react-redux';
import {editCard} from '../../../store/modules/Cards/reducer';

import {View} from 'react-native';
import {DraggableText} from '../DraggableText';

interface CardProps {
  card: ICard;
}

export const Card = ({card}: CardProps) => {
  const dispatch = useDispatch();

  const handleTitleChange = (newValue: string) => {
    dispatch(editCard({...card, title: newValue}));
  };

  const handleDescriptionChange = (newValue: string) => {
    dispatch(editCard({...card, description: newValue}));
  };

  return (
    <View style={styles.cardContainer}>
      <DraggableText
        card={card}
        value={card.title}
        variant="title"
        handleChangeText={handleTitleChange}
      />
      <DraggableText
        card={card}
        variant="description"
        value={card.description}
        handleChangeText={handleDescriptionChange}
      />
    </View>
  );
};
