import { RootState } from '../../../rootReducer';

export const cardsSelector = (state: RootState) => state.cards.cards;

export const currentCardSelector = (state: RootState) => state.cards.setCurrentCardIndex;

export const isOpenPlateSelector = (state: RootState) => state.cards.setOpenPlate;

export const isOpenFontsSelector = (state: RootState) => state.cards.setOpenFonts;

export const currentInputFocusSelector = (state: RootState) => state.cards.setCurrentInput;
