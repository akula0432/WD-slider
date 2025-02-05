import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import {Button} from '../../core/Button';
import {styles} from './styles';
import {SensitiveIcon} from '../../../assets/icons/SensitiveIcon';
import {SvgProps} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  setChangeFontWeight,
  setOpenFonts,
} from '../../../store/modules/Cards/reducer';
import {currentInputFocusSelector} from '../../../store/modules/Cards/selectors';

const keyExtractor = ({id}: OptionsIE) => id;

interface OptionsIE {
  id: string;
  Icon: (props: SvgProps) => React.JSX.Element;
  fontWeight: '300' | '500' | '700';
}

const FONT_WEIGHT_OPTIONS: OptionsIE[] = [
  {
    id: '1',
    Icon: SensitiveIcon,
    fontWeight: '300',
  },
  {
    id: '2',
    Icon: SensitiveIcon,
    fontWeight: '500',
  },
  {
    id: '3',
    Icon: SensitiveIcon,
    fontWeight: '700',
  },
];

export const FontWeightList = () => {
  const dispatch = useDispatch();

  const currentInputFocus = useSelector(currentInputFocusSelector);

  const renderItem: ListRenderItem<OptionsIE> = ({item}) => {
    const {Icon, fontWeight} = item;

    const handleChangeFontWeight = () => {
      switch (currentInputFocus) {
        case 'title': {
          dispatch(setChangeFontWeight({titleFontWeight: fontWeight}));
          break;
        }
        case 'description': {
          dispatch(setChangeFontWeight({descriptionFontWeight: fontWeight}));
          break;
        }
      }
    };

    return (
      <Button onPress={handleChangeFontWeight} customStyles={styles.button}>
        <Icon width={16} height={17} />
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FONT_WEIGHT_OPTIONS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <Button
            onPress={() => dispatch(setOpenFonts(false))}
            customStyles={[styles.button]}
          />
        }
        horizontal
      />
    </View>
  );
};
