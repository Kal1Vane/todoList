import { createSlice } from '@reduxjs/toolkit';
import { NameProcess } from '../../const';
import { TodoItem } from '../../types';
import { getTodoItem } from '../../utils';

export type DataProcess = {
  isLoaded : boolean,
  todoArray: TodoItem[],
}

const initialState : DataProcess = {
  isLoaded: false,
  todoArray: [],

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
      state.todoArray.push(getTodoItem(action.payload));
    },
    removeTodo : (state,action) => {
      state.todoArray.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {setTodoArray,addTodo,removeTodo} = dataProcess.actions;
