import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Image } from 'react-native-image-crop-picker';

export interface ICard {
  id: string;
  title: string;
  description: string;
  plate: {
    titleColor: string;
    descriptionColor: string;
  }
  fonts: {
    titleFontWeight: '300' | '500' | '700';
    descriptionFontWeight: '300' | '500' | '700';
  }
  position: {
    x: number,
    y: number,
  }
  photo?: Image | null
}

export interface CardState {
  cards: ICard[];
  setCurrentCardIndex: number;
  setOpenPlate: boolean;
  setOpenFonts: boolean;
  setCurrentInput: 'title' | 'description' | null;
}

const initialState: CardState = {
  cards: [
    {
      id: '',
      title: '',
      description: '',
      plate: {
        titleColor: '',
        descriptionColor: '',
      },
      fonts: {
        titleFontWeight: '300',
        descriptionFontWeight: '300',
      },
      position: {
        x: 0,
        y: 0,
      },
      photo: null,
    },
  ],
  setCurrentCardIndex: 0,
  setOpenPlate: false,
  setOpenFonts: false,
  setCurrentInput: null,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action: PayloadAction<ICard>) => {
      const index = state.cards.findIndex(
        card => card.id === action.payload.id,
      );
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((_, index) => index !== action.payload);
    },
    setCurrentCardIndex: (state, action: PayloadAction<number>) => {
      state.setCurrentCardIndex = action.payload;
    },
    setOpenPlate: (state, action: PayloadAction<boolean>) => {
      state.setOpenPlate = action.payload;
    },
    setOpenFonts: (state, action: PayloadAction<boolean>) => {
      state.setOpenFonts = action.payload;
    },
    setCurrentInputOpen: (state, action: PayloadAction<'title' | 'description' | null>) => {
      state.setCurrentInput = action.payload;
    },
    setChangeTextColor: (
      state,
      action: PayloadAction<{ titleColor?: string; descriptionColor?: string }>
    ) => {
      const currentCard = state.cards[state.setCurrentCardIndex];
      if (currentCard) {
        if (action.payload.titleColor !== undefined) {
          currentCard.plate.titleColor = action.payload.titleColor;
        }
        if (action.payload.descriptionColor !== undefined) {
          currentCard.plate.descriptionColor = action.payload.descriptionColor;
        }
      }
    },
    setChangeFontWeight: (state, action: PayloadAction<{titleFontWeight?: '300' | '500' | '700', descriptionFontWeight?: '300' | '500' | '700'}>) => {
      const currentCard = state.cards[state.setCurrentCardIndex];
      if (currentCard) {
        if (action.payload.titleFontWeight !== undefined) {
          currentCard.fonts.titleFontWeight = action.payload.titleFontWeight;
        }
        if (action.payload.descriptionFontWeight !== undefined) {
          currentCard.fonts.descriptionFontWeight = action.payload.descriptionFontWeight;
        }
      }
    },
    setPosition: (state, action: PayloadAction<{x?: number, y?: number}>) => {
      const currentCard = state.cards[state.setCurrentCardIndex];
      if (currentCard) {
        if (action.payload.x !== undefined) {
          currentCard.position.x = action.payload.x;
        }
        if (action.payload.y !== undefined) {
          currentCard.position.y = action.payload.y;
        }
      }
    },
    setPhoto: (state, action: PayloadAction<Image>) => {
      const currentCard = state.cards[state.setCurrentCardIndex];
      if (currentCard) {
        currentCard.photo = action.payload;
      }
    },
  },
});

export const {addCard, editCard, deleteCard, setCurrentCardIndex, setOpenPlate, setOpenFonts, setCurrentInputOpen, setChangeTextColor, setChangeFontWeight, setPosition, setPhoto} = cardSlice.actions;
export default cardSlice.reducer;
