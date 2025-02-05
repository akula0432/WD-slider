import React from 'react';
import {styles} from './styles';
import {TextField} from '../TextField';
import {ICard, setCurrentInputOpen} from '../../../store/modules/Cards/reducer';
import {useDispatch} from 'react-redux';
import {editCard} from '../../../store/modules/Cards/reducer';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {useStyles} from './useStyles';

type CardProps = {
  card: ICard;
};

const DraggableText = ({
  handleChangeText,
  variant,
  card,
  value,
}: {
  handleChangeText: (newValue: string) => void;
  variant: 'title' | 'description';
  card: ICard;
  value: string;
}) => {
  const dispatch = useDispatch();

  const {plate, fonts} = card;

  const {animatedStyle, onGestureEvent, onHandlerStateChange} = useStyles(card);

  const filedText = (currentVariant: 'title' | 'description') => {
    switch (currentVariant) {
      case 'title': {
        return plate.titleColor;
      }
      case 'description': {
        return plate.descriptionColor;
      }
    }
  };

  const fontWeightText = (currentVariant: 'title' | 'description') => {
    switch (currentVariant) {
      case 'title': {
        return fonts.titleFontWeight;
      }
      case 'description': {
        return fonts.descriptionFontWeight;
      }
    }
  };

  const handleFocus = (currentVariant: 'title' | 'description') => {
    dispatch(setCurrentInputOpen(currentVariant));
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onEnded={onHandlerStateChange}>
      <Animated.View style={[animatedStyle]}>
        <TextField
          textColor={filedText(variant)}
          fontWeight={fontWeightText(variant)}
          value={value}
          variant={variant}
          handleChangeText={handleChangeText}
          onFocus={() => handleFocus(variant)}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

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
