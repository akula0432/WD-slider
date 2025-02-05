import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { GestureEvent, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import { ICard, setPosition } from '../../../store/modules/Cards/reducer';

export const useStyles = (card: ICard) => {
  const translateX = useSharedValue(card.position.x);
  const translateY = useSharedValue(card.position.y);

  const dispatch = useDispatch();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  const onGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) => {
    translateX.value = event.nativeEvent.translationX;
    translateY.value = event.nativeEvent.translationY;
  };

  const onHandlerStateChange = () => {
    translateX.value = withSpring(translateX.value);
    translateY.value = withSpring(translateY.value);

    dispatch(setPosition({x: translateX.value, y: translateY.value}));
  };

  return {animatedStyle, onGestureEvent, onHandlerStateChange};
};

