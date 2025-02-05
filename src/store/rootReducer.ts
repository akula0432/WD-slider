import {combineReducers} from '@reduxjs/toolkit';
import cardReducer from './modules/Cards/reducer';

export const rootReducer = combineReducers({
  cards: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
