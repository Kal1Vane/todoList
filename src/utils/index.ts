import { nanoid } from 'nanoid';
import { TodoItem, NameFilter } from '../types';

export const getTodoItem = (value: string) : TodoItem => ({
  title : value,
  id : nanoid(),
  description: 'test',
  icon : NameFilter.FAVORITE,
});
