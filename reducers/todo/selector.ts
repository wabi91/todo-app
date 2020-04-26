import { initialStateType } from './';

export const getItems = (state: {
  todo: initialStateType;
}) => state.todo.items;

export const getFlag = (state: {
  todo: initialStateType;
}) => state.todo.flag;
