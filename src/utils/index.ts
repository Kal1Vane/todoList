import { nanoid } from 'nanoid';
import { TodoItem, TodoItemIcon } from '../types';

export const getTodoItem = (value: string) : TodoItem => ({
  title : value,
  id : nanoid(),
  description: 'test',
  icon : TodoItemIcon.DEFAULT,
});
