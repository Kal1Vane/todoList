import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoListRequest } from '../../types';

export const fetchTodoList = createAsyncThunk(
  'data/fetchTodo',
  async (_, thunkApi) => {
    const {data} = await axios.get<TodoListRequest[]>('https://jsonplaceholder.typicode.com/users/1/todos');
    return data;
  },
);
