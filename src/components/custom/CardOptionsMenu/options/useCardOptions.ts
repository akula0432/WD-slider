import {SvgProps} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {deleteCard, setOpenFonts, setOpenPlate} from '../../../../store/modules/Cards/reducer';

import { CircleIcon } from '../../../../assets/icons/CircleIcon';
import { GalleryIcon } from '../../../../assets/icons/GalleryIcon';
import { SensitiveIcon } from '../../../../assets/icons/SensitiveIcon';
import { StickerIcon } from '../../../../assets/icons/StickerIcon';
import { ImageIcon } from '../../../../assets/icons/ImageIcon';
import { TrashIcon } from '../../../../assets/icons/TrashIcon';

export interface ICardOption {
  Icon: (props: SvgProps) => React.JSX.Element;
  handlePress: (index: number) => void;
}

export const useCardOptions = () => {
  const dispatch = useDispatch();

  const handleCardDelete = (index: number) => {
    dispatch(deleteCard(index));
  };

  const handleOpenPlate = () => {
    dispatch(setOpenPlate(true));
  };

  const handleOpenFonts = () => {
    dispatch(setOpenFonts(true));
  };

  return [
    {
      Icon: CircleIcon,
      handlePress: () => {},
    },
    {
      Icon: GalleryIcon,
      handlePress: () => {},
    },
    {
      Icon: SensitiveIcon,
      handlePress: handleOpenFonts,
    },
    {
      Icon: StickerIcon,
      handlePress: handleOpenPlate,
    },
    {
      Icon: ImageIcon,
      handlePress: () => {},
    },
    {
      Icon: TrashIcon,
      handlePress: handleCardDelete,
    },
  ];
};
