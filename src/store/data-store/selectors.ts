import { NameProcess } from '../../const';
import { TodoItem } from '../../types';
import { State } from '../../types/state';

export const getTodoArray = (state:State) : TodoItem[] => state[NameProcess.Data].todoArray;

export const getLoaded = (state:State) : boolean => state[NameProcess.Data].isLoaded;
