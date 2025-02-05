import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({children}: MainContainerProps) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};
