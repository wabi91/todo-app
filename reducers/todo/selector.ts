import { InitialState } from './';

export const selectCount = (state: {
  todo: InitialState;
}) => state.todo.count;
