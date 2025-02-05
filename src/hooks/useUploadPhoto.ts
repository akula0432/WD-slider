import {useCallback} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';

interface useUploadPhotoIE {
  width?: number;
  height?: number;
  updater: Function;
}

export const useUploadPhoto = ({
  width = 350,
  height = 600,
  updater,
}: useUploadPhotoIE) => {
  const handleCamera = useCallback(() => {
    try {
      ImageCropPicker.openPicker({
        cropping: true,
        cropperToolbarTitle: 'Crop Photo',
        mediaType: 'photo',
        width,
        height,
      }).then(resp => {
        updater(resp);
      });
    } catch (e) {}
  }, [height, updater, width]);

  return {
    handleCamera,
  };
};
