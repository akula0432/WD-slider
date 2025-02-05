import React from 'react';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {TextField} from '../TextField';
import {ICard, setCurrentInputOpen} from '../../../store/modules/Cards/reducer';
import {useDispatch} from 'react-redux';
import {useStyles} from './styles';

export const DraggableText = ({
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
