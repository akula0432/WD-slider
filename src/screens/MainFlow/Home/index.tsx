import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import {CardsMenu} from '../../../components/custom/CardsMenu';
import {CardsList} from '../../../components/custom/CardsList';
import {CardsPagination} from '../../../components/custom/CardsPagination';
import {styles} from './styles';
import {KeyboardAvoider} from '../../../components/core/KeyboardAvoider';
import {MainContainer} from '../../../components/core/MainContainer';
import {CardOptionsMenu} from '../../../components/custom/CardOptionsMenu';
import {useSelector} from 'react-redux';
import {
  isOpenFontsSelector,
  isOpenPlateSelector,
} from '../../../store/modules/Cards/selectors';
import {ColorPlateList} from '../../../components/custom/ColorPlateList';
import {FontWeightList} from '../../../components/custom/FontWeightList';

export const Home = () => {
  const flatListRef = useRef<FlatList>(null);

  const isOpenPlate = useSelector(isOpenPlateSelector);
  const isOpenFonts = useSelector(isOpenFontsSelector);

  return (
    <MainContainer>
      <KeyboardAvoider>
        <View style={styles.container}>
          <CardsMenu />
          <CardsList flatListRef={flatListRef} />
        </View>
      </KeyboardAvoider>
      {isOpenPlate ? (
        <ColorPlateList />
      ) : isOpenFonts ? (
        <FontWeightList />
      ) : (
        <CardOptionsMenu />
      )}
      <CardsPagination flatListRef={flatListRef} />
    </MainContainer>
  );
};
