import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoListRequest } from '../../types';

export const fetchTodoList = createAsyncThunk(
  'data/fetchTodo',
  async (_, thunkApi) => {
    try {
      const {data} = await axios.get<TodoListRequest[]>('https://server-todo-listjzp8j.herokuapp.com/todos');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue('Server error, data not loaded. Please reloaded app');
    }

  },
);
