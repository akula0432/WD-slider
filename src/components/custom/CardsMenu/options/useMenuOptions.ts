import {useDispatch} from 'react-redux';
import {addCard} from '../../../../store/modules/Cards/reducer';

import {PlusIcon} from '../../../../assets/icons/PlusIcon';
import { LayoutListIcon} from '../../../../assets/icons/LayoutListIcon';
import {FilePenIcon} from '../../../../assets/icons/FilePenIcon';
import {FileChartIcon} from '../../../../assets/icons/FileChartIcon';
import {SvgProps} from 'react-native-svg';
import { ICard } from '../../../../store/modules/Cards/reducer';
import uuid from 'react-native-uuid';


export interface IMenuOption {
  option: string;
  Icon: (props: SvgProps) => React.JSX.Element;
  handlePress: () => void;
}

export const useMenuOptions = (): IMenuOption[] => {
  const dispatch = useDispatch();

  const addNewCard = () => {

    const newCard: ICard = {
      id: uuid.v4(),
      title: 'Title goes here',
      description: 'Description goes here',
      plate: {
        titleColor: 'black',
        descriptionColor: 'black',
      },
      fonts: {
        titleFontWeight: '300',
        descriptionFontWeight: '300',
      },
      position: {
        x: 0,
        y: 0,
      },
    };

    dispatch(addCard(newCard));
  };

  return [
    {
      option: 'Card',
      Icon: PlusIcon,
      handlePress: addNewCard,
    },
    {option: 'Quiz', Icon: LayoutListIcon, handlePress: () => {}},
    {option: 'Form', Icon: FilePenIcon, handlePress: () => {}},
    {option: 'Poll', Icon: FileChartIcon, handlePress: () => {}},
  ];
};
