import { NameProcess } from '../../const';
import { TodoItem } from '../../types';
import { State } from '../../types/state';

export const getTodoArray = (state:State) : TodoItem[] => state[NameProcess.Data].todoArray;

export const isLoaded = (state:State) : boolean => state[NameProcess.Data].isLoaded;
