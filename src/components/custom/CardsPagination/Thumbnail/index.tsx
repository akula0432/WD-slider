import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

type ThumbnailProps = {
  isActive: boolean;
  handlePress: (index: number) => void;
  index: number;
};

const Thumbnail = ({isActive, handlePress, index}: ThumbnailProps) => {
  return (
    <TouchableOpacity onPress={() => handlePress(index)}>
      <View style={[styles.thumbnail, isActive && styles.thumbnailActive]} />
    </TouchableOpacity>
  );
};

export default Thumbnail;
