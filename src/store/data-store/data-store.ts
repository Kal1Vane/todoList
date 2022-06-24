import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { NameProcess } from '../../const';
import { TodoItem } from '../../types';
import { getTodoItem } from '../../utils';
import { fetchTodoList } from '../api-creators';

export type DataProcess = {
  isLoaded : boolean,
  todoArray: TodoItem[],
  isError : boolean,
}

const initialState : DataProcess = {
  isLoaded: false,
  todoArray: [],
  isError : false,
};

export const dataProcess = createSlice({
  name: NameProcess.Data,
  initialState,
  reducers : {
    setTodoArray : (state,action) => {
      state.todoArray = action.payload;
      state.isLoaded = true;
    },
    addTodo : (state,action) => {
      state.todoArray.unshift(getTodoItem(action.payload));
    },
    removeTodo : (state,action) => {
      state.todoArray = state.todoArray.filter((todo) => String(todo.id) !== action.payload);
    },
  },
  extraReducers: {
    [fetchTodoList.fulfilled.type] : (state,action) => {
      state.todoArray = action.payload;
      state.isLoaded = true;
    },
    [fetchTodoList.pending.type] : (state,action) => {
      state.isLoaded = false;
    },
    [fetchTodoList.rejected.type] : (state,action) => {
      state.isLoaded = true;
      state.isError = true;
      toast.error(action.payload);
    },
  },
});

export const {setTodoArray,addTodo,removeTodo} = dataProcess.actions;
