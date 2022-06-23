import { combineReducers } from '@reduxjs/toolkit';
import { NameProcess } from '../const';
import { dataProcess } from './data-store/data-store';

export const rootReducer = combineReducers({
  [NameProcess.Data] : dataProcess.reducer,
});
