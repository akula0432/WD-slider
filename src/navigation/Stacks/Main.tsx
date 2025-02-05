import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/MainFlow/Home';
import {screenOptions} from '../options';

export type MainStackParamList = {
  Cards: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="Cards" component={Home} />
    </MainStack.Navigator>
  );
}
