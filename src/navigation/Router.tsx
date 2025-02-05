import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {MainNavigator, MainStackParamList} from './Stacks/Main';
import {screenOptions} from './options';

type RootRouterParamList = {
  MainNavigator: NavigatorScreenParams<MainStackParamList>;
};

const RootRouterStack = createNativeStackNavigator<RootRouterParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <RootRouterStack.Navigator screenOptions={screenOptions}>
        <RootRouterStack.Screen
          name="MainNavigator"
          component={MainNavigator}
        />
      </RootRouterStack.Navigator>
    </NavigationContainer>
  );
}
